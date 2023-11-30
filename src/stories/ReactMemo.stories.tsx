import {useState} from 'react';
import {Meta} from '@storybook/react';


const meta: Meta<typeof Example> = {
    //component: Example,
    title: 'ReactMemoDemo'
};
export default meta;

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UserSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, index) => <div key={index}>{u}</div>)}</div>
}
const Users = React.memo(UserSecret);

export const Example = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Irina', 'Olga']);
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
        <Users users={users}/>

    </>

}