import React from 'react';

type AccordionTitleType = {
    title: string
    onClickAccordion: () => void
}

export function AccordionTitle(props: AccordionTitleType) {
    return (
        <div>
            <h3 onClick={props.onClickAccordion}>{props.title}</h3>
        </div>
    );
}