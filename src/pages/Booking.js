import BookingForm from "../components/BookingForm";
import {submitApi, fetchAPI, store} from "../api/mockAPI.js"
import React from 'react';
import { useNavigate } from "react-router-dom";

export function updateTimes(newDate) {
  return fetchAPI(newDate);
}

export function initializeTimes() {
  return fetchAPI(new Date().toISOString().split('T')[0]);
}

export function submitForm(formData) {
  return submitApi(formData)
}

function Booking() {
    const [availableTimes, setAvailableTimes] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => { store(); }, []);
    React.useEffect(() => { initializeTimesLocal(); }, []);

    function updateTimesLocal(newDate) {
      updateTimes(newDate)
      .then(response => setAvailableTimes(response));
    }

    function initializeTimesLocal() {
      initializeTimes()
      .then(response => setAvailableTimes(response));
    }

    function submitFormLocal(formData) {
      submitForm(formData)
      .then(result => {
        if (result)
          navigate("/confirmedBooking");
        else
          navigate("/error");
      });
    }

    return (
      <>
        <BookingForm availableTimes={availableTimes} actions={{updateTimes: updateTimesLocal, initializeTimes: initializeTimesLocal, submitForm: submitFormLocal}}/>
      </>
    );
}

export default Booking;