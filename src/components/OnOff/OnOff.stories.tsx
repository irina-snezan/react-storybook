import type {Meta} from '@storybook/react';
import {OnOff} from './OnOff';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';


const meta: Meta<typeof OnOff> = {
    component: OnOff,
    title: 'OnOff stories',
    argTypes: { onClick: { action: 'clicked' } },
};
export default meta;
const callback = action('click me');

// export const OnMode = () => < OnOff on={true} onChange={callback}/>
// export const OffMode = () => < OnOff on={false} onChange={callback}/>

export const ModeChanging = () => {
    //let [value, setValue] = useState<boolean>(true)
    return <OnOff />;

}


