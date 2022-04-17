import React, {useState} from 'react';


const generationData = () => {
    console.log("generation")
  return 21256
}

const NewUseState = () => {

    //let initialState = useMemo(generationData, [])

    const [count, setCount] = useState(generationData)

    const changer = (state: number) => {
      return state+1
    }

    return (
        <div>
            {count}
            <button onClick={() => {setCount(changer)}}>+</button>
        </div>
    );
};

export default NewUseState;