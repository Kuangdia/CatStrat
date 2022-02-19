import './StrategyInfo.scss';
import Strategy from './Strategy';
import AddStrategy from './AddStrategy';
import useVisualMode from './useVisualMode';
import { useState, useEffect } from 'react';
import WriteStrategy from './WriteStrategy';
import Axios from 'axios';

export default function StrategyInfo({ loginUserID }) {

  const userID = localStorage.getItem('userID')
  const [data, setData] = useState([]);

  const { mode, transition, back } = useVisualMode("SHOW");

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [showForm, setShowForm] = useState(false);
  const [creation, setCreation] = useState(false);

  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const EDIT = "EDIT";
  const ADD = "ADD";
  const SHOWOPEN = "SHOWOPEN";
  // const SAVING = "SAVING";
  // const DELETING = "DELETING";
  // const CONFIRM = "CONFIRM";

  // let navigate = useNavigate();

  useEffect(() => {
    Axios.get(`/strategy/${userID}`)
    if (userID) {
      console.log('userID', userID)
      Axios.get(`http://localhost:8080/strategy/${userID}`)
        .then((res) => {
          console.log('response', res.data)
          setData(res.data)
        })
    } else {
      // navigate("/");
    }
  }, [loginUserID, creation]);


  // save strategy
  function save(name, description) {
    Axios.put('http://localhost:8080/strategy/info/${id}')
      .then(() => {
        transition(SHOWOPEN)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  // create strategy
  function create(name, description) {
    Axios.post('http://localhost:8080/strategy/info/${id}')
      .then(() => transition(SHOWOPEN))
      .catch((err) => {
        console.log('err', err)
      })
  }

  // // reset the input data and transition back to the previous mode
  function reset() {
    setName('');
    setDescription('');
    setShowForm(false);
    back();
  }

  const parsedStrategies = data.map((i) =>
    <Strategy
      key={i.id}
      id={i.id}
      mode={mode}
      reset={reset}
      save={save}
      create={create}
      name={i.strategy_name}
      description={i.description}
      setName={setName}
      setDescription={setDescription}
      type={i.custom === true ? 'Custom' : 'Standard'}
    />
  );

  const edit = () => {

  }



  return (
    <section className="full-container">
      <div className="strategies">
        <h1>Strategies Explained</h1>
        <ul>{parsedStrategies}</ul>
        {showForm ? <ul><WriteStrategy
          type={'Custom'}
          name={name}
          description={description}
          setName={setName}
          setDescription={setDescription}
          setShowForm={setShowForm}
          setCreation={setCreation}
          save={save}
          cancel={reset}
        /> </ul> : <ul><AddStrategy onClick={() => setShowForm(true)} /></ul>}
      </div>
    </section>
  );
}