import './StrategyInfo.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from 'react-bootstrap/Button';
import ShowStrategy from './ShowStrategy';
import AddStrategy from './AddStrategy';
import WriteStrategy from './WriteStrategy';
import useVisualMode from './useVisualMode';
import { useState } from 'react';
import axios from 'axios';
import OpenStrategy from './OpenStrategy';

export default function Strategy({ id, name, description, type, setName, setDescription}) {

    const { mode, transition, back } = useVisualMode("SHOW");

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
        axios.put('http://localhost:8080/strategy/info/${id}')
            .then(() => transition(SHOWOPEN))
            .catch((err) => {
                console.log('err', err)
            })
    }

    // create strategy
    function create(name, description) {
        axios.post('http://localhost:8080/strategy/info/${id}')
            .then(() => transition(SHOWOPEN))
            .catch((err) => {
                console.log('err', err)
            })
    }

    // // reset the input data and transition back to the previous mode
    function reset() {
        setName('');
        setDescription('');
        back();
    }

    return (
        <>
            {mode === SHOW && <ShowStrategy name={name} description={description} type={type} />}

            {mode === ADD && <AddStrategy onAdd={() => transition(CREATE)} />}

            {mode === CREATE && <WriteStrategy
                onCancel={reset}
                onSave={save}
            />}

            {mode === SHOWOPEN && <OpenStrategy name={name} description={description} type={type} />}

            {/* <details className="info" open>
                    <summary> End-of-day trading</summary>
                    <p>The end-of-day trading strategy involves trading near the close of markets. End-of-day traders become active when it becomes clear that the price is going to ‘settle’ or close. </p>
                </details>

                <details className="alert">
                    <summary>Custom trading</summary>
                    <p>I made this custom trading strategy that uses psychic powers.</p>
                </details> */}
        </>

    );
}