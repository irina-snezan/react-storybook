import {useMemo, useState} from 'react';

export default {
    title: 'UseMemoDemo2'
}
const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UserSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, index) => <div key={index}>{u}</div>)}</div>
}
const Users = React.memo(UserSecret);

export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo')

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Irina', 'Olga']);
    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1);
        return newArray
    }, [users]);

    const addUserHandler = () => {
        let newUsers = [
            ...users,
            'Sveta' + new Date().getTime()
        ]
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUserHandler}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={newArray}/>

    </>

}