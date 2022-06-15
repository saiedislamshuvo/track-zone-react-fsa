import Button from '../shared/button/Button';
import TextField from '../shared/text-field/TextField';

const EventForm = ({ event, handleChange, handleSubmit, clockInfo }) => {
    return (
        <form onSubmit={(e) => handleSubmit(e, clockInfo)} style={{ marginTop: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField type="text" name='title' value={event.title} onChange={handleChange} placeholder={'Type event title'} />
                <TextField type="datetime-local" name='time' value={new Date(event.time)} onChange={handleChange} />
                <Button type="submit" value={'Save'} />
            </div>
        </form>
    );
};

export default EventForm;