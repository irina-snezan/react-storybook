import React, {useState} from 'react';

export type OnOffPropsType = {
   // on: boolean
   // onChange: () => void
}


export const OnOff = () => {
    let [on, setOn] = useState(true);
    const onStyle = {
        width: '30px',
        height: '20px',
        borderRadius: '5px',
        border: '1px solid red',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        borderRadius: '5px',
        border: '1px solid red',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid red',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: on ? 'green' : 'red'
    };

    return (
        <div>

            <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
