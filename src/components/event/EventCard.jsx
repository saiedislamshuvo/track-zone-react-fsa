const EventCard = ({ event, deleteEvent }) => {
    return (
        <div
            style={{
                width: '100%',
                height: '80px',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column'
            }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}>
                <h4>{event.title}</h4>
                <p>{event.date}</p>
                <p>{event.time}</p>
                <div>
                    <button type='button' onClick={(_) => deleteEvent(event.id)}>Remove</button>
                </div>
            </div>
            <h4>Will Show Diffrence on time</h4>
        </div>
    );
};

export default EventCard;