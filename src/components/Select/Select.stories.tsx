import {Meta} from '@storybook/react';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';
import {useState} from 'react';

const meta: Meta<typeof Select> = {
    component: Select,
    title: 'Select',

};
export default meta;

export const SelectWithValue = () => {
    const [value, setValue] = useState('2')
    return (
        <div>
            <Select value={value} onChange={setValue}
                    items={[
                        {value: '1', title: 'Minsk'},
                        {value: '2', title: 'Gomel'},
                        {value: '3', title: 'Brest'},
                        {value: '4', title: 'Grodno'},
                        {value: '5', title: 'Vitebsk'},
                        {value: '6', title: 'Mogilev'}
                    ]}/>
        </div>
    );
};

export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null)
    return (
        <div>
            <Select  value={value} onChange={setValue}
                    items={[
                        {value: '1', title: 'Belarus'},
                        {value: '2', title: 'Russian'},
                        {value: '3', title: 'Ukraine'},
                        {value: '4', title: 'Lithuania'},
                        {value: '5', title: 'Poland'},

                    ]}/>
        </div>
    );
};

