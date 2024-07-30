import './BookingForm.css'

import React from 'react';

function BookingForm(props) {
    const today = new Date().toISOString().split('T')[0];

    const [date, setDate] = React.useState(today);
    const [time, setTime] = React.useState("");
    const [guests, setGuests] = React.useState(1);
    const [occasion, setOccasion] = React.useState("");
    const [errors, setErrors] = React.useState({});

    React.useEffect(() => {
        if (!Array.isArray(props.availableTimes) || props.availableTimes.length === 0)
            setErrors(errors => { return {...errors, avail: "The restaurant is full for this date"}});
        else
            setErrors(errors => { return {...errors, avail: ""}});
    }, [props.availableTimes]);

    function handleSubmit(e) {
        e.preventDefault();
        props.actions.submitForm({date: date, time: time, guests: guests, occasion: occasion});
    }

    function isDateValid(date) {
        return new Date(date) >= new Date(today);
    }

    function isAvailabilities() {
        return Array.isArray(props.availableTimes) && props.availableTimes.length > 0;
    }

    function isTimeValid(time) {
        return time && props.availableTimes.includes(time);
    }

    function isGuestsValid(guests) {
        return !isNaN(parseInt(guests)) && guests > 0 && guests < 11;
    }

    function validate() {
        return isDateValid(date)
            && isAvailabilities()
            && isTimeValid(time)
            && isGuestsValid(guests);
    }

    const availableTimesOptions = Array.isArray(props.availableTimes) ?
        props.availableTimes.map(avail => <option key={avail}>{avail}</option>) :
        null;

    const errorDateLabel = errors.date ?
        <div className="error">{errors.date}</div> :
        null;

    const errorTimeLabel = errors.time ?
        <div className="error">{errors.time}</div> :
        null;

    const errorAvailLabel = errors.avail ?
        <div className="error">{errors.avail}</div> :
        null;

    const errorGuestsLabel = errors.guests ?
        <div className="error">{errors.guests}</div> :
        null;

    return (
        <section className="form">
            <h2>Find a table for any occasion</h2>
            <form onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor="res-date" aria-label="On Click">Choose date</label>
                    <input type="date" id="res-date"
                        value={date}
                        onChange={e => {
                                const newDate = e.target.value;
                                setDate(newDate);
                                if (!isDateValid(newDate))
                                    setErrors({...errors, date: "You cannot make a reservation in the past"});
                                else
                                {
                                    setErrors({...errors, date: ""});
                                    props.actions.updateTimes(newDate);
                                }
                            }}/>
                    { errorDateLabel }
                </div>

                <div className='field'>
                    <label htmlFor="res-time" aria-label="On Click">Choose time</label>
                    <select id="res-time"
                            value={time}
                            onChange={e => {
                                const newTime = e.target.value;
                                setTime(newTime);
                                if (!isTimeValid(newTime))
                                    setErrors({...errors, time: "A time must be selected"});
                                else
                                    setErrors({...errors, time: ""});
                            }}>
                                <option hidden value=""/>
                                {availableTimesOptions}
                    </select>
                    { errorTimeLabel }
                    { errorAvailLabel }
                </div>

                <div className='field'>
                    <label htmlFor="guests" aria-label="On Click">Number of guests</label>
                    <input type="number" placeholder="1"
                        id="guests"
                        value={guests}
                        onChange={e => {
                                const newGuests = e.target.value; 
                                setGuests(newGuests);
                                if (newGuests < 1)
                                    setErrors({...errors, guests: "There should be at least one guest for the reservation"});
                                else if (newGuests > 10)
                                    setErrors({...errors, guests: "The reservation must contain at maximum 10 guests"});
                                else
                                    setErrors({...errors, guests: ""});
                        }}/>
                    { errorGuestsLabel }
                </div>

                <div className='field'>
                    <label htmlFor="occasion" aria-label="On Click">Occasion</label>
                    <select id="occasion"
                            value={occasion}
                            onChange={e => setOccasion(e.target.value)}>
                        <option value=""/>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>

                <button id="submit-button" type="submit" disabled={!validate()}>Make your reservation</button>
            </form>
        </section>
    );
}

export default BookingForm;