import React, {useState} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody, AccordionBodyType, ItemsType} from './AccordionBody';

export type AccordionType = {
    titleValue: string
    collapsed: boolean
    onClickAccordion: () => void
    onClick: (value: any) => void
    items: ItemsType[]
}

export function Accordion(props: AccordionType) {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
        <AccordionTitle title={props.titleValue}  onClickAccordion = {props.onClickAccordion}
        />
        {!props.collapsed && <AccordionBody  onClick={props.onClick} items={props.items}/>}
    </div>
    )
}





