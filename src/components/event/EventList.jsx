import EventCard from './EventCard';

const EventList = ({ events, deleteEvent, clockInfo }) => {
    return (
        <>
            {events.map(event => (
                <EventCard
                    key={event.id}
                    event={event}
                    deleteEvent={deleteEvent}
                    clockInfo={clockInfo}
                />
            ))}
        </>
    );
};

export default EventList;