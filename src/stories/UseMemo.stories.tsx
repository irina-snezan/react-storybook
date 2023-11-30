import {useMemo, useState} from 'react';


// const meta: Meta<typeof Example1> = {
//    // component: Example1,
//     title: 'UseMemoDemo'
// };
// export default meta;

export default {
    title: 'UseMemoDemo'
}
export const Example1 = () => {
    let [a, setA] = useState<number>(5);
    let [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <div>
        <input value={a} onChange={(e) => {
            Number(setA(e.currentTarget.value))
        }}/>

        <input value={b} onChange={(e) => {
            +setB(e.currentTarget.value)
        }}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </div>

}