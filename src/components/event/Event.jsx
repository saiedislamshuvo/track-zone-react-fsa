import EventForm from './EventForm';
import EventList from './EventList';

const Event = ({ event, events, clockInfo, handleChange, handleSubmit, deleteEvent, clearClockInfo }) => {
    return (
        <div style={{ margin: '0 10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ textAlign: 'start', marginTop: '10px', marginBottom: '5px', }}>Create Event</h3>
                <div> <button type="button" onClick={clearClockInfo}>Close</button></div>
            </div>
            <EventForm
                event={event}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                clockInfo={clockInfo}
            />
            <EventList
                events={events}
                deleteEvent={deleteEvent}
                clockInfo={clockInfo}
            />
        </div>
    );
};

export default Event;