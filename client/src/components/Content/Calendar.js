import React, { useEffect } from 'react';
import { useState} from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import Axios from "axios";
import RecordInput from "./RecordInput";

import "./Calendar.scss";
import { transformCalendarData } from '../../helpers/cleanCalendarData';

export default function Calendar() {
  const [calendarData, setCalendarData] = useState([]);

  const sendGetReq = (target, userID) => {
    Axios.get(`/${target}`, {params: { userID }})
      .then(res => {
        // console.log("recorconsods data", res.data);
        setCalendarData([...transformCalendarData(res.data)]);
      })
      .catch(err => console.log(err));
  }

  const userID = localStorage.getItem("userID");

  useEffect(() => {
    sendGetReq("calendar", userID);
  }, [])

  const [date, setDate] = useState("");

  const handleDateClick = (arg) => {
    setDate(arg.dateStr);
    setShowForm(!showForm);
  }

  const [showForm, setShowForm] = useState(false);

  return (
    <div className='calendar-container'>
    <div className="calendar">
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        events={ calendarData }
        dateClick={ handleDateClick }
      />
    </div>
      {showForm? <RecordInput 
        setShowForm={setShowForm}
        date={date}
        setCalendarData={ 
          setCalendarData 
        }
      /> : <></>}
    </div>
  );
}