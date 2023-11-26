import type { Meta } from '@storybook/react';
import {Accordion} from './Accordion';
import {useReducer} from 'react';
import {action} from '@storybook/addon-actions';
import {AccordionWithReducer} from './AccordionWithReducer';

const meta: Meta<typeof AccordionWithReducer> = {
    component: AccordionWithReducer,
    title:'AccordionWithReducer',

};
export default meta;

const onClickCallback = action('some item clicked')

type ActionType = {
    type: string
}
const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED';

const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state;
        default:
            throw new Error ('Bad action type')
    }
    return state
}

export const DemoAccordion = () => {
    const [collapsed, dispatch] = useReducer(reducer, true);
    return <>
        <Accordion
            titleValue={'Accordion'}
            collapsed={collapsed}
            items={[
            {value: 1, title:'Gleb'},
            {value: 2, title:'Yulia'},
            {value: 3, title:'Max'}
            ]}
            onClickAccordion={():void => {dispatch({type:TOGGLE_CONSTANT})}}
            onClick={onClickCallback}
        />
    </>
}
