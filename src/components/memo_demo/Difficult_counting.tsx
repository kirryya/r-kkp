import React, {ChangeEvent, useMemo, useState} from 'react';

export const Difficult_counting = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    const onChangeAHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setA(Number(e.currentTarget.value))
    }
    const onChangeBHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setB(Number(e.currentTarget.value))
    }

    let resultA = useMemo(() => {
        let tempA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random();
            }
            tempA = tempA * i
        }
        return tempA

    }, [a])


    let resultB = 1


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <div>
            <input value={a} onChange={onChangeAHandler}/>
            <input value={b} onChange={onChangeBHandler}/>
            <hr/>
            <div>
                Result a: {resultA}
            </div>
            <div>
                Result b: {resultB}
            </div>
        </div>
    );
};