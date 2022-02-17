import React, { useEffect } from 'react';
import { useState} from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import Axios from "axios";
import RecordInput from "./RecordInput";

import "./Calendar.scss";
import { sendGetReq } from '../../helpers/cleanCalendarData';

export default function Calendar() {
  const [calendarData, setCalendarData] = useState([]);
  const [date, setDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [netBalance, setNetBalance] = useState(0);
  const [investAmount, setInvestAmount] = useState(0);
  const [strategy, setStrategy] = useState("");
  const [strategyID, setStrategyID] = useState("");
  const [stock, setStock] = useState("");
  const [recordID, setRecordID] = useState("");
  const [render, setRender] = useState(false);

  const userID = localStorage.getItem("userID");

  useEffect(() => {
    sendGetReq("calendar", userID, setCalendarData);
  }, [render])

  const handleDateClick = (arg) => {
    setDate(arg.dateStr);
    setShowForm(true);
  }

  const handleRecordClick = (info) => {
    Axios.get(`/calendar/${info.event.id}`)
      .then(res => {
        console.log("single record", res.data);
        const {day, profit, strategy_id} = res.data[0];
        setRecordID(info.event.id);
        setDate(day.slice(0, 10));
        setInvestAmount(1001);
        setNetBalance(profit);
        setStrategy(strategy_id);
        setStock(3);
        setShowForm(true);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='calendar-container'>
      <div className="calendar">
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          events={ calendarData }
          dateClick={ handleDateClick }
          eventClick={ handleRecordClick }
          selectable={true}
          unselectAuto
        />
      </div>
        {showForm? 
          <RecordInput 
            setShowForm={ setShowForm }
            date={ date }
            // setCalendarData={ 
            //   setCalendarData 
            // }
            netBalance={ netBalance }
            setNetBalance = { setNetBalance }
            investAmount={ investAmount }
            setInvestAmount={ setInvestAmount }
            strategy={ strategy }
            setStrategy={ setStrategy }
            strategyID={ strategyID }
            setStrategyID={ setStrategyID }
            stock={ stock }
            setStock={ setStock }
            recordID={ recordID }
            setRecordID={ setRecordID }
            setRender={ setRender }
          /> : <></>
        }
    </div>
  );
}