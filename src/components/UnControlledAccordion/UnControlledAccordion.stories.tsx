import type { Meta} from '@storybook/react';

import {UnControlledAccordion} from './UnControlledAccordion';



const meta: Meta<typeof UnControlledAccordion> = {
    component: UnControlledAccordion,
    title:'UnControlledAccordion',
};

export default meta;

export const DemoUnControlledAccordion = () => {

    return <>
        <UnControlledAccordion
            titleValue={'Users'}
        />
    </>
}