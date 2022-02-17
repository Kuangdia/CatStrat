import "react-widgets/scss/styles.scss";
import "./RecordInput.scss";
import { useState } from "react";
import NumberPicker from "react-widgets/NumberPicker";
import DropdownList from "react-widgets/DropdownList";
import Axios from "axios";
import { transformCalendarData } from "../../helpers/cleanCalendarData";

export default function RecordInput(props) {

  const { date, 
          setShowForm,
          setCalendarData 
        } = props;

  const [netBalance, setNetBalance] = useState(0);
  const [investAmount, setInvestAmount] = useState(0);
  const [strategy, setStrategy] = useState("");
  const [strategyID, setStrategyID] = useState("");
  const [stock, setStock] = useState("");
  

  function handleSubmit(e) {
    e.preventDefault();
    alert("You submit a form!");
  }

  function cancel() {
    setNetBalance(0);
    setInvestAmount(0);
    setStrategy("");
    setStock("");
  }

  function submit() {
    Axios.post("/calendar", {
      netBalance,
      investAmount,
      strategyID,
      stock,
      date,
      userID: localStorage.getItem("userID")
    })
      .then(res => {
        console.log("server sends back latest inserted data", res.data);
        Axios.get("/calendar", {params: {userID: localStorage.getItem("userID")}})
          .then(res => {
            setCalendarData([...transformCalendarData(res.data)]);
          })
          .catch(err => {
            console.log(err);
          })
      });
  }

  function close() {
    setShowForm(false);
    cancel();
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
          value={netBalance}
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
          defaultValue={investAmount}
          step={1000}
          onChange={value => setInvestAmount(value)}
        />
        <br />
        <label htmlFor="strategy">
          Investment Strategy
        </label>
        <DropdownList
        id="strategy"
          value={strategy}
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
          value={stock}
          onChange={nextValue => {
            setStock(nextValue.stock);
          }}
          datakey="id"
          textField="stock"
          data={[
            { id: 1, stock: "AAPL" },
            { id: 2, stock: "AMD" },
            { id: 3, stock: "SPY" },
          ]}
        />
        <br />
        <p>{date}</p>
        <br />
        <button 
          type="submit"
          onClick={cancel}
        >Cancel</button>

        <button 
          type="submit"
          onClick={submit}
        >Submit</button>
      </form>
    </>
  );
}