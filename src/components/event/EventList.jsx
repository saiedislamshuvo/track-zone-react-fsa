import EventCard from './EventCard';

const EventList = ({ events, deleteEvent }) => {
    return (
        <>
            {events.map(event => (
                <EventCard
                    key={event.id}
                    event={event}
                    deleteEvent={deleteEvent}
                />
            ))}
        </>
    );
};

export default EventList;