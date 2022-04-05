import React, {useState} from 'react';

const NewMessagesCounterSecret = (props: { count: number }) => {
    console.log("NewMessagesCounterSecret")
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("UsersSecret")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)
const NewMessagesCounter = React.memo(NewMessagesCounterSecret)

const MemoDemo = () => {
    console.log("MemoDemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Andrei", "Kostya", "Iryna"])

    const addUser = () => {
        setUsers([...users, "Sveta" + new Date().getTime()])
    }

    const addCount = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <button onClick={addCount}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    );
};

export default MemoDemo;