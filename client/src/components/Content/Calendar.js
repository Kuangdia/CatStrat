import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import "./Calendar.scss";

export default function Calendar() {

  return (
    <div className="calendar">
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: '-$280', date: '2022-02-16'},
          { title: '$350', date: '2022-02-15'},
        ]}
      />
    </div>
  );
}