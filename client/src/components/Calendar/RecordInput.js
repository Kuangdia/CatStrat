import "react-widgets/scss/styles.scss";
import "./RecordInput.scss";
import * as React from 'react';
import { useEffect, useState } from "react";
import NumberPicker from "react-widgets/NumberPicker";
import DropdownList from "react-widgets/DropdownList";
import Axios from "axios";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RecordInput(props) {
  const userID = localStorage.getItem("userID");
  const { 
    date, 
    setShowForm,
    netBalance, 
    setNetBalance,
    investAmount, 
    setInvestAmount,
    strategyID, 
    setStrategyID,
    stockID, 
    setStockID,
    recordID,
    setRecordID,
    setRender,
    investChoice,
    setInvestChoice,
    render
  } = props;

  const [stockData, setStockData] = useState([]);
  const [stratData, setStratData] = useState([]);

  const getStockData = () => {
    return Axios.get("/stock")
  }
  const getStratData = () => {
    return Axios.get(`/strategy/${userID}`)
  }
  useEffect(() => {
    Promise.all([getStockData(), getStratData(userID)])
      .then(res => {
        const stockDataReturn = res[0].data.map(dataObj => {
          return {
            id: dataObj.id,
            stock: dataObj.stock_symbol
          }
        });
        const startDataReturn = res[1].data.map(stratObj => {
          return {
            id: stratObj.id,
            strategy: stratObj.strategy_name
          }
        });
        setStockData([...stockDataReturn]);
        setStratData([...startDataReturn]);
      })
      .catch(err => console.log(err.message));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInvestChoiceChange(e) {
    setInvestChoice(e.target.value);
  }

  function clear() {
    setNetBalance(0);
    setInvestAmount(0);
    setStrategyID("");
    setStockID("");
    setRecordID("");
  }

  function deleteRecord() {
    Axios.delete(`/calendar/${recordID}`)
    .then(res => {
      clear();
      setShowForm(false);
      setRender(!render);
      alert("Delete 1 record successfully!");
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  function submit() {
    if (recordID) {
      Axios.put(`/calendar/${recordID}`, {
        netBalance,
        investAmount,
        strategyID,
        stockID,
        date,
        investChoice,
        userID,
      })
        .then(res => {
          console.log("Update route sent back", res.data);
          alert("update submitted!");
          setRender(!render);
          close();
        });
    } else {
      Axios.post("/calendar", {
        netBalance,
        investAmount,
        strategyID,
        stockID,
        date,
        investChoice,
        userID
      })
        .then(res => {
          // console.log("server sends back latest inserted data", res.data);
          alert("Record Created!");
          setRender(!render);
          close();
        });
    }
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

        <label htmlFor="balance">Gain/Loss</label>
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
          value={ investAmount }
          step={ 100 }
          onChange={ value => setInvestAmount(value) }
        />
        <br />

        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Investment Options</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={ investChoice }
              onChange={ handleInvestChoiceChange }
            >
            <FormControlLabel value={true} control={<Radio />} label="Stock" />
            <FormControlLabel value={false} control={<Radio />} label="Option" />
          </RadioGroup>
        </FormControl>
        <br />

        <label htmlFor="strategy">
          Investment Strategy
        </label>
        <DropdownList
          id="strategy"
          value={ strategyID }
          onChange={nextValue => {
            setStrategyID(nextValue.id);
          }}
          dataKey="id"
          textField="strategy"
          data={ stratData }
        />
        <br />

        <label htmlFor="stock">
          Stock/Option ticker
        </label>
        <DropdownList
          id="stock"
          value={ stockID }
          onChange={nextValue => {
            setStockID(nextValue.id);
          }}
          dataKey="id"
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