import React, {useState} from 'react';
import {Star} from './Star';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type UnControlledRatingType = {
    defaultValue?: RatingValueType
    onChange: (props:RatingValueType) => void

}

export const UnControlledRating = (props: UnControlledRatingType) => {
    let[value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0 );
    return (
        <div>
            <Star value={1} selected={value > 0} setValue={() => { setValue(2); props.onChange(1)}}/>
            <Star value={2} selected={value > 1} setValue={() => { setValue(2); props.onChange(2)}}/>
            <Star value={3} selected={value > 2} setValue={() => { setValue(3); props.onChange(3)}}/>
            <Star value={4} selected={value > 3} setValue={() => { setValue(4); props.onChange(4)}}/>
            <Star value={5}selected={value > 4} setValue={() => { setValue(5); props.onChange(5)}}/>
        </div>
    );
}



