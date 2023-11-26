import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {Accordion} from './components/Accordion/Accordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';
import {UnControlledOnOff} from './components/UnControlledOnOff/UnControlledOnOff';
import {Select} from './components/Select/Select';


function App() {

    let[ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let[accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, switchOnsetOn] = useState<boolean>(false);

    return (
        <div className='App'>
            <h3>Article 1</h3>
            <input type="text"/>
            <input type="date"/>
            <h3>Article 2</h3>
            <PageTitle title={'This is component'}/>
            <PageTitle title={'My friends'}/>
            <h3>Article 3</h3>
            <Accordion titleValue={'Menu'}
                       items={[]}
                       onClick={() => {}}
                       collapsed= {accordionCollapsed}
                       onClickAccordion={() => setAccordionCollapsed(!accordionCollapsed)}/>
            {/*<Accordion titleValue={'Topic'} collapsed={true}/>*/}
            <h3>Article 4</h3>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <h3>Article 5</h3>
                <OnOff/>
                {/*<OnOff on={false}/>*/}
                {/*<OnOff on={true}/>*/}
                <h3>Article 6</h3>
                <UnControlledAccordion titleValue={'Menu'}/>
                <UnControlledAccordion titleValue={'Topic'}/>
            <h3>Article 6</h3>
            {/*<UnControlledRating/>*/}
            {/*<h3>Article 7</h3>*/}
            {/*<UnControlledOnOff onChange={switchOnsetOn}/>*/}
            <h3>Article 7</h3>
            <Select value={'1'} onChange={() => {}} items={[]}/>
        </div>
    );
}

export default App;


function PageTitle(props: any)
    {
        return (<h1>{props.title}</h1>
        );
    }