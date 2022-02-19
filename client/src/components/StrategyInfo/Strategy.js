import './StrategyInfo.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from 'react-bootstrap/Button';
import ShowStrategy from './ShowStrategy';
import AddStrategy from './AddStrategy';
import WriteStrategy from './WriteStrategy';
import { useState } from 'react';
import axios from 'axios';
import OpenStrategy from './OpenStrategy';

export default function Strategy(props) {

    const { id, name, description, type, setName, setDescription, mode, transition, back, reset, save, create} = props;

    const SHOW = "SHOW";
    const CREATE = "CREATE";
    const EDIT = "EDIT";
    const ADD = "ADD";
    const SHOWOPEN = "SHOWOPEN";
    // const SAVING = "SAVING";
    // const DELETING = "DELETING";
    // const CONFIRM = "CONFIRM";

    return (
        <>
            {mode === SHOW && <ShowStrategy name={name} description={description} type={type} />}

            {mode === ADD && <AddStrategy onAdd={() => transition(CREATE)} />}

            {mode === CREATE && <WriteStrategy
                onCancel={reset}
                onSave={save}
            />}

            {mode === SHOWOPEN && <OpenStrategy name={name} description={description} type={type} />}

            {mode === EDIT && <WriteStrategy
                name={name}
                description={description}
                type={type}
            />}


        </>

    );
}