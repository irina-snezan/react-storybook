import React, {useState} from 'react';
import {Rating, RatingPropsType, RatingValueType} from './Rating';
import {Meta} from '@storybook/react';


const meta: Meta<typeof Rating> = {
    title: 'Rating stories',
    component: Rating
}

export default meta;

export const EmptyRating = () => <Rating value={0} onClick={() => {}}/>;
export const Rating1 = () => <Rating value={1} onClick={() => {}}/>;
export const Rating2 = () => <Rating value={2} onClick={() => {}}/>;
export const Rating3 = () => <Rating value={3} onClick={() => {}}/>;
export const Rating4 = () => <Rating value={4} onClick={() => {}}/>;
export const Rating5 = () => <Rating value={5} onClick={() => {}}/>;


    export const RatingChanging = (value: RatingValueType) => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return <Rating value={ratingValue} onClick={setRatingValue}/>;
}
