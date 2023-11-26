import React, {KeyboardEvent, useEffect, useState} from 'react';
import styles from './Select.module.css'

export type ItemsType = {
    title: string
    value?: any
}
export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]

}
export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(true);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value])

    const toggleItem = ()  => setActive(!active)
    const OnItemClick = (value: any) => {
        props.onChange(value);
        toggleItem()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement> ) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props. onChange(props.items[0].value)
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItem}>
                {selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(s => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(s.value)
                            }}
                            className={styles.item + ' ' + (hoveredItem === s ? styles.selected : '')}
                            key={s.value}
                            onClick={() => {
                                OnItemClick(s.value)
                            }}>
                            {s.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    )
};

