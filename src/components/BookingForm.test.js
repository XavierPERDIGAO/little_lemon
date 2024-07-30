import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
import { updateTimes } from "../pages/Booking";

test('Renders the BookingForm submit text', () => {
    render(<BookingForm availableTimes={[]} actions={() => {}}/>);
    const headingElement = screen.getByText("Make your reservation");
    expect(headingElement).toBeInTheDocument();
})

test('Renders the BookingForm date', () => {
    const result = render(<BookingForm availableTimes={[]} actions={() => {}}/>);
    const today = new Date().toISOString().split('T')[0];
    const datePicker = result.container.querySelector('#res-date');
    expect(datePicker.value).toEqual(today);
})

test('Renders the BookingForm time', () => {
    const result = render(<BookingForm availableTimes={[]} actions={() => {}}/>);
    const timePicker = result.container.querySelector('#res-time');
    expect(timePicker.value).toEqual("");
})

test('Renders the BookingForm guests', () => {
    const result = render(<BookingForm availableTimes={[]} actions={() => {}}/>);
    const guestsPicker = result.container.querySelector('#guests');
    expect(guestsPicker.value).toEqual("1");
})

test('Renders the BookingForm occasion', () => {
    const result = render(<BookingForm availableTimes={[]} actions={() => {}}/>);
    const occasionPicker = result.container.querySelector('#occasion');
    expect(occasionPicker.value).toEqual("");
})

test('Validation correct for BookingForm', () => {
    const result = render(<BookingForm availableTimes={["14:00", "15:00"]} actions={{updateTimes: (newDate) => {}}}/>);
    const timePicker = result.container.querySelector('#res-time');
    const datePicker = result.container.querySelector('#res-date');
    const guestsPicker = result.container.querySelector('#guests');
    const submitButton = result.container.querySelector('#submit-button');

    const date = new Date();
    date.setDate(date.getDate() +1);
    const tomorrow = date.toISOString().split('T')[0];

    fireEvent.change(timePicker, { target: { value: '14:00' } });
    fireEvent.change(datePicker, { target: { value: tomorrow } });
    fireEvent.change(guestsPicker, { target: { value: "5" } });

    expect(submitButton).toBeEnabled();
})

test('Validation incorrect for BookingForm - no time selected', () => {
    const result = render(<BookingForm availableTimes={["14:00", "15:00"]} actions={() => {}}/>);
    const submitButton = result.container.querySelector('#submit-button');
    const timePicker = result.container.querySelector('#res-time');

    fireEvent.change(timePicker, { target: { value: '' } });
    expect(submitButton).toBeDisabled();

    const errorElement = screen.getByText("A time must be selected");
    expect(errorElement).toBeInTheDocument();
})

test('Validation incorrect for BookingForm - incorrect date selected', () => {
    const result = render(<BookingForm availableTimes={["14:00", "15:00"]} actions={() => {}}/>);
    const submitButton = result.container.querySelector('#submit-button');
    const datePicker = result.container.querySelector('#res-date');

    const date = new Date();
    date.setDate(date.getDate() -1);
    const yesterday = date.toISOString().split('T')[0];

    fireEvent.change(datePicker, { target: { value: yesterday } });
    expect(submitButton).toBeDisabled();

    const errorElement = screen.getByText("You cannot make a reservation in the past");
    expect(errorElement).toBeInTheDocument();
})

test('Validation incorrect for BookingForm - no available times', () => {
    const result = render(<BookingForm availableTimes={[]} actions={() => {}}/>);
    const timePicker = result.container.querySelector('#res-time');
    const submitButton = result.container.querySelector('#submit-button');

    fireEvent.change(timePicker, { target: { value: '14:00' } });
    expect(submitButton).toBeDisabled();

    const errorElement = screen.getByText("The restaurant is full for this date");
    expect(errorElement).toBeInTheDocument();
})

test('Validation incorrect for BookingForm - no guests selected', () => {
    const result = render(<BookingForm availableTimes={[]} actions={() => {}}/>);
    const guestsPicker = result.container.querySelector('#guests');
    const submitButton = result.container.querySelector('#submit-button');

    fireEvent.change(guestsPicker, { target: { value: 'a' } });
    expect(submitButton).toBeDisabled();

    const errorElement = screen.getByText("There should be at least one guest for the reservation");
    expect(errorElement).toBeInTheDocument();
})

test('Validation incorrect for BookingForm - less than 1 guest selected', () => {
    const result = render(<BookingForm availableTimes={[]} actions={() => {}}/>);
    const guestsPicker = result.container.querySelector('#guests');
    const submitButton = result.container.querySelector('#submit-button');

    fireEvent.change(guestsPicker, { target: { value: '0' } });
    expect(submitButton).toBeDisabled();

    const errorElement = screen.getByText("There should be at least one guest for the reservation");
    expect(errorElement).toBeInTheDocument();
})

test('Validation incorrect for BookingForm - more than 10 guests selected', () => {
    const result = render(<BookingForm availableTimes={[]} actions={() => {}}/>);
    const guestsPicker = result.container.querySelector('#guests');
    const submitButton = result.container.querySelector('#submit-button');

    fireEvent.change(guestsPicker, { target: { value: '11' } });
    expect(submitButton).toBeDisabled();

    const errorElement = screen.getByText("The reservation must contain at maximum 10 guests");
    expect(errorElement).toBeInTheDocument();
})