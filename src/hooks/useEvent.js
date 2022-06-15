import { useState } from 'react';
import { generateId } from '../utils/generate-id';

const getId = generateId();

const EVENT_INIT = {
    'id': '',
    'clockInfo': '',
    'title': '',
    'time': '',
};

const useEvent = () => {
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState({ ...EVENT_INIT });

    const handleChange = (e) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e, clockInfo) => {
        e.preventDefault();
        const eventState = {
            ...event,
            id: getId.next().value,
            clockInfo,
        };
        setEvents([...events, eventState]);
        clearEvent();
    };

    const deleteEvent = (eventId) => {
        clearEvent();
        setEvents(events.filter(event => event.id != eventId));
    };

    const clearEvent = () => setEvent({ ...EVENT_INIT });

    return {
        event,
        events,
        handleChange,
        handleSubmit,
        deleteEvent,
    };
};

export default useEvent;