import './startDatePicker.css'
import React, { useContext, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { UserData } from '../../App';







const StartDatePicker = () => {
  const { bookingDetails } = useContext(UserData);

  useEffect(() => {
    window.localStorage.setItem(
      'startDateValue',
      JSON.stringify(bookingDetails.checkInDate)
    );
  }, [bookingDetails.checkInDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label="Check-in"
        value={bookingDetails.checkInDate}
        // onChange={(newValue) => {
        //   if (newValue !== null) {
        //     const date = newValue._d;
        //     setStartDateMilliseconds(date);
        //     const day = date.getDate();
        //     let stringDay = day.toString();
        //     if (stringDay.length < 2) {
        //       stringDay = '0' + stringDay;
        //     }

        //     const month = date.getMonth() + 1;
        //     let stringMonth = month.toString();
        //     if (stringMonth.length < 2) {
        //       stringMonth = '0' + stringMonth;
        //     }

        //     const year = date.getFullYear();
        //     let stringYear = year.toString();

        //     let finalDate = stringMonth + '/' + stringDay + '/' + stringYear;
        //     setStartDateValue(finalDate);
        //   }
        // }}
        renderInput={(params) => <TextField {...params} />}
        className="start-date-picker-styling"
      />
    </LocalizationProvider>
  );
};

export default StartDatePicker;
