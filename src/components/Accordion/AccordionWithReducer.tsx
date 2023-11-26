import {AccordionTitle} from './AccordionTitle';
import {AccordionBody, AccordionBodyType, ItemsType} from './AccordionBody';
import {useReducer} from 'react';

export type AccordionWithReducerType = {
    titleValue: string
    collapsed: boolean
    onClickAccordion: () => void
    onClick: (value: any) => void
    items: ItemsType[]
}

type ActionType = {
    type: string

}

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED';
const reducer =(state:boolean, action: ActionType) => {
    // if (action.type === TOGGLE_CONSTANT) {
    //     return !state
    // }
    // return state;

    switch (action.type) {
        case TOGGLE_CONSTANT:
        return !state;
        default:
            throw new Error ('Bad action type')
    }
    return state
}


export function AccordionWithReducer(props: AccordionWithReducerType) {
    let[collapsed, dispatch] = useReducer(reducer, false)
    return (
        <div>
        <AccordionTitle title={props.titleValue}  onClickAccordion = {() => {dispatch({type:TOGGLE_CONSTANT })}}
        />
        {!props.collapsed && <AccordionBody  onClick={props.onClick} items={props.items}/>}
    </div>
    )
}





