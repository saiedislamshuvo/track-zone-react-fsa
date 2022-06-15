import EventForm from './EventForm';
import EventList from './EventList';

const Event = ({ event, events, clockId, handleChange, handleSubmit, deleteEvent }) => {
    return (
        <div style={{ margin: '0 10px' }}>
            <EventForm
                event={event}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                clockId={clockId}
            />
            <EventList
                events={events}
                deleteEvent={deleteEvent}
            />
        </div>
    );
};

export default Event;