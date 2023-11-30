import React, {useState} from 'react';

type UnControlledOnOffPropsType = {
    defaultOn: boolean
    onChange: (on: boolean) => void
}


export const UnControlledOnOff = (props: UnControlledOnOffPropsType) => {
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle = {
        width: '30px',
        height: '20px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? 'blue' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: on ? 'white' : 'blue'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: on ? 'blue' : 'white'
    };

    const onClicked = () => {
        setOn(true)
        props.onChange(true)};
    const offClicked = ()=> {
        setOn(false)
        props.onChange(false)};

    return (
        <div>

            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

