import Button from '../shared/button/Button';
import TextField from '../shared/text-field/TextField';

const EventForm = ({ event, handleChange, handleSubmit, clockId }) => {
    return (
        <div>
            <h3 style={{ textAlign: 'start', marginTop: '10px', marginBottom: '5px', }}>Create Event</h3>
            <form onSubmit={(e) => handleSubmit(e, clockId)} style={{ marginTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField type="text" name='title' value={event.title} onChange={handleChange} placeholder={'Type event title'} />
                    <TextField type="datetime-local" name='time' value={event.time} onChange={handleChange} />
                    <Button type="submit" value={'Save'} />
                </div>
            </form>
        </div>
    );
};

export default EventForm;