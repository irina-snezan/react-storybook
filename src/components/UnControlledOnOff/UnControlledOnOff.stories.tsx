import type { Meta} from '@storybook/react';
import React, {useState} from 'react';

import {UnControlledOnOff} from './UnControlledOnOff';


const meta: Meta<typeof UnControlledOnOff> = {
    component: UnControlledOnOff,
    title:'OnOff stories',
    // argTypes: { onClick: { action: 'clicked me' }},

};
export default meta;

export const UnOnMode = () => < UnControlledOnOff  defaultOn={true} onChange={() => {}}/>
export const UnOffMode = () => < UnControlledOnOff defaultOn={false}onChange={() => {}}/>

// export const ModeChangingUnControlledOnOff = () => {
//     return <UnControlledOnOff onChange={setValue}/>;
// }

