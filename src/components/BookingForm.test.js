import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm submit text', () => {
    render(<BookingForm availableTimes={[]} dispatchAvailableTimes={() => {}}/>);
    const headingElement = screen.getByText("Make your reservation");
    expect(headingElement).toBeInTheDocument();
})