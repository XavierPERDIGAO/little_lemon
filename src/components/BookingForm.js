import './BookingForm.css'

import React from 'react';

function BookingForm(props) {
    const [date, setDate] = React.useState(new Date().toISOString().split('T')[0]);
    const [time, setTime] = React.useState("19:00");
    const [guests, setGuests] = React.useState(1);
    const [occasion, setOccasion] = React.useState("Birthday");

    function handleSubmit(e) {
        e.preventDefault();
        props.actions.submitForm({date: date, time: time, guests: guests, occasion: occasion});
    }

    const availableTimesOptions = Array.isArray(props.availableTimes) ? 
        props.availableTimes.map(avail => <option key={avail}>{avail}</option>) :
        null;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date"
                   value={date}
                   onChange={e => {
                        const newShortDate = e.target.value;
                        setDate(newShortDate);
                        props.actions.updateTimes(newShortDate);
                    }}/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time"
                    value={time}
                    onChange={e => setTime(e.target.value)}>
                        {availableTimesOptions}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10"
                   id="guests"
                   value={guests}
                   onChange={e => setGuests(e.target.value)}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion"
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make your reservation"/>
        </form>
    );
}

export default BookingForm;