import type { Meta } from '@storybook/react';

import {Accordion} from './Accordion';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    title:'Accordion',

};

export default meta;


export const CollapsedAccordion = () => {
    return <div>collapsed</div>
}

export const OpenedAccordion = () => {
    return <div>open</div>
}
const onClickCallback = action('some item clicked')
export const DemoAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <>
        <Accordion
            titleValue={'Accordion'}
            collapsed={collapsed}
            items={[
            {value: 1, title:'Gleb'},
            {value: 2, title:'Yulia'},
            {value: 3, title:'Max'}
            ]}
            onClickAccordion={():void => {setCollapsed(!collapsed)}}
            onClick={onClickCallback}
        />
    </>
}
