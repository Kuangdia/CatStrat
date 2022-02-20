import './StrategyInfo.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from 'react-bootstrap/Button';
import ShowStrategy from './ShowStrategy';
import AddStrategy from './AddStrategy';
import WriteStrategy from './WriteStrategy';
import { useState } from 'react';
import useVisualMode from './useVisualMode';
import OpenStrategy from './OpenStrategy';
import Axios from 'axios';

export default function Strategy(props) {

    const { id, name, description, type, reset, create } = props;

    const { mode, transition, back } = useVisualMode("SHOW");

    const [editName, setEditName] = useState(name)
    const [editDescription, setEditDescription] = useState(description)

    const SHOW = "SHOW";
    const CREATE = "CREATE";
    const EDIT = "EDIT";
    const ADD = "ADD";
    const SHOWOPEN = "SHOWOPEN";
    // const SAVING = "SAVING";
    // const DELETING = "DELETING";
    // const CONFIRM = "CONFIRM";

    // save strategy
    function save(name, description) {
        Axios.put('http://localhost:8080/strategy/', {
            id,
            name,
            description
        })
            .then((response) => {
                const data = response.data[0];
                console.log('put request', response.data);
                // console.log('response.data[0].strategy_name', response.data[0].strategy_name)
                setEditName(data.strategy_name);
                setEditDescription(data.description);
                transition(SHOWOPEN);
            })
            .catch((err) => {
                console.log('err', err)
            })
    }

    function cancel() {
        editName('');
        editDescription('');
    };

    return (
        <>
            {mode === SHOW && <ShowStrategy
                name={name}
                description={description}
                type={type}
                onEdit={() => transition(EDIT)} />}

            {mode === ADD && <AddStrategy onAdd={() => transition(CREATE)} />}

            {mode === SHOWOPEN && <OpenStrategy
                name={editName}
                description={editDescription}
                type={type}
                onEdit={() => transition(EDIT)}
            />}

            {mode === EDIT && <WriteStrategy
                name={editName}
                description={editDescription}
                setName={setEditName}
                setDescription={setEditDescription}
                type={type}
                save={save}
                cancel={cancel}
            />}


        </>

    );
}