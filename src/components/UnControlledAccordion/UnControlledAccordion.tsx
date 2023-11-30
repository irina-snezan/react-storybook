import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './reducer';


export type UnControlledAccordionType = {
    titleValue: string
}
export const UnControlledAccordion = (props:UnControlledAccordionType) => {

    let[state, dispatch] = useReducer(reducer, {collapsed:false} );

    return <div>
        <AccordionTitle title={props.titleValue} onClick={()=> {dispatch({type:TOGGLE_COLLAPSED})}}/>

       {!state.collapsed && <AccordionBody/> }
       {/* {collapsed ? <AccordionTitle/> : <AccordionBody/>}*/}
    </div>
}


type AccordionTitleType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleType) {

    return (
        <div>
            <h3 onClick={() =>{props.onClick()}}>{props.title}</h3>
        </div>
    );
}

export const  AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

