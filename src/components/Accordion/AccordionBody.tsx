import React from 'react';

export type AccordionBodyType = {
    items: ItemsType[]
    onClick: (value: any) => void
}
export type ItemsType = {
    value: any
    title: string
}
export const AccordionBody = (props: AccordionBodyType) => {
    return (
        <ul>
            {props.items.map((i, index) => <li key={index} onClick={() => { props.onClick(i.value)}}>{i.title}</li>)}

        </ul>
    );
}
