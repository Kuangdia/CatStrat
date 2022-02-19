import './StrategyInfo.scss';
import Strategy from './Strategy';
import AddStrategy from './AddStrategy';
import useVisualMode from './useVisualMode';
import { useState, useEffect} from 'react';
import WriteStrategy from './WriteStrategy';
import Axios from 'axios';

export default function StrategyInfo({loginUserID}) {

  const [ showForm, setShowForm ] = useState(false);
  const [ creation, setCreation ] = useState(false);
  const [data, setData] = useState([]);
  const userID = localStorage.getItem('userID')


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



  const { mode, transition, back } = useVisualMode("ADD");

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const parsedStrategies = data.map((i) =>
    <Strategy
      key={i.id}
      id={i.id}
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
        {showForm ? <WriteStrategy 
          name={''} 
          description={''}  
          setName={setName}
          setShowForm={setShowForm}
          setCreation={setCreation}
          /> : <ul><AddStrategy onClick={() => setShowForm(true)} /></ul>}
      </div>
    </section>
  );
}