import { initializeTimes, updateTimes, submitForm } from "./Booking";
import { store } from "../api/mockAPI"

const initialTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
];

test('behaviour of initializeTimes', async () => {
    store();
    var times = await initializeTimes();

    expect(times).toStrictEqual(initialTimes)
});

test('behaviour of updateTimes', async () => {
    store();
    var times = await updateTimes(new Date());

    expect(times).toStrictEqual(initialTimes);
});

test('behaviour of submiting a form and checking available times', async () => {
    store();
    var formData = {
        date: new Date().toISOString().split('T')[0],
        time: "19:00"
    };

    var result = submitForm(formData);
    expect(result).toBeTruthy();

    var times = await initializeTimes();
    expect(times).not.toContain("19:00");
});