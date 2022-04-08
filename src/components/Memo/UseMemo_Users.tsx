import React, {useCallback, useMemo, useState} from 'react';

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("UsersSecret")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)


const UseMemo_Users = () => {
    console.log("MemoDemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Andrei", "Kostya", "Iryna", "Dimych"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().includes('a'))
    }, [users])

    const addCount = useCallback(() => {
            setCounter(counter + 1)
        },
        [counter]
    )

    return (
        <>
            <button onClick={addCount}>+</button>
            {counter}
            <Users users={newArray}/>
        </>
    );
};

export default UseMemo_Users;