import "react-widgets/scss/styles.scss";
import "./RecordInput.scss";
import { useEffect, useState } from "react";
import NumberPicker from "react-widgets/NumberPicker";
import DropdownList from "react-widgets/DropdownList";
import Axios from "axios";

export default function RecordInput(props) {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    Axios.get("/stock")
    .then(res => {
      const result = res.data.map(dataObj => {
        return {
          id: dataObj.id,
          stock: dataObj.stock_symbol
        }
      });
      setStockData([...result]);
    })
    .catch(err => console.log(err.message));
  }, []);

  const { 
    date, 
    setShowForm,
    netBalance, 
    setNetBalance,
    investAmount, 
    setInvestAmount,
    strategy, 
    setStrategy,
    strategyID, 
    setStrategyID,
    stock, 
    setStock,
    recordID,
    setRecordID,
    setRender,
    render
  } = props;
  
  const userID = localStorage.getItem("userID");
  
  function handleSubmit(e) {
    e.preventDefault();
    alert("You submit a form!");
  }

  function clear() {
    setNetBalance(0);
    setInvestAmount(0);
    setStrategy("");
    setStrategyID("");
    setStock("");
    setRecordID("");
  }

  function deleteRecord() {
    Axios.delete(`/calendar/${recordID}`)
    .then(res => {
      alert(res.data);
      clear();
      setShowForm(false);
      setRender(!render);
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  function submit() {
    // if (recordID) {
    //   put
    // }
    Axios.post("/calendar", {
      netBalance,
      investAmount,
      strategyID,
      stock,
      date,
      userID
    })
      .then(res => {
        console.log("server sends back latest inserted data", res.data);
        setRender(!render);
        close();
      });
  }

  function close() {
    clear();
    setShowForm(false);
  }

  return (
    <>
      <form 
        className="record-input" 
        onSubmit={ handleSubmit }
      >
        <button onClick={ close }>X</button>

        <label htmlFor="balance">Gain/loss</label>
        <input
          id="balance"
          name="balance"
          type="text"
          value={ netBalance }
          onChange={(e) => {
            setNetBalance(e.target.value)
          }}
        />
        <br />
        <label htmlFor="investAmount">
          Invest Amount
        </label>
        <NumberPicker
          id="investAmount"
          defaultValue={ investAmount }
          step={1000}
          onChange={e => setInvestAmount(e.target.value)}
        />
        <br />
        <label htmlFor="strategy">
          Investment Strategy
        </label>
        <DropdownList
          id="strategy"
          value={ strategy }
          onChange={nextValue => {
            setStrategy(nextValue.strategy);
            setStrategyID(nextValue.id);
          }}
          datakey="id"
          textField="strategy"
          data={[
            { id: 1, strategy: "strat1" },
            { id: 2, strategy: "strat2" },
            { id: 3, strategy: "strat3" },
          ]}
        />
        <br />
        <label htmlFor="stock">
          Stock/Option tick
        </label>
        <DropdownList
        id="stock"
          value={ stock }
          onChange={nextValue => {
            setStock(nextValue.id);
          }}
          datakey="id"
          textField="stock"
          data={ stockData }
        />
        <br />
        <p>{ date }</p>
        <p>RecordID: { recordID }</p>
        <br />

        <button 
          type="submit"
          onClick={ deleteRecord }
        >Delete</button>

        <button 
          type="submit"
          onClick={ submit }
        >Submit</button>
      </form>
    </>
  );
}