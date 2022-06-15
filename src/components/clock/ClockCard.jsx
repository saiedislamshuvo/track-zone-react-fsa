import { getDate } from '../../utils/datetime';
import Clock from './Clock';

const ClockCard = ({ clock, handleClockView, editClock, deleteClock, clockId }) => {
    return (
        <div style={{
            width: '250px',
            margin: '10px 0',
            padding: '10px 0',
            border: clockId == clock.id ? '4px solid #4c35ae' : '2px solid #4c35ae',
            borderRadius: '10px',
        }}>
            <h2>{clock.title}</h2>
            <h2><Clock datetime={new Date(clock.time)} /> ({clock.id})</h2>
            <p style={{ fontWeight: 'bold' }}>Date: {getDate(new Date(clock.time))}</p>
            <p style={{ fontWeight: 'bold' }}>Time Zone: {clock.timezone}</p>
            <button type='button' onClick={(_) => handleClockView(clock.id)}>View</button>
            <button type='button' onClick={(_) => editClock(clock)}>Edit</button>
            <button type='button' onClick={(_) => deleteClock(clock.id)}>Delete</button>
        </div >
    );
};

export default ClockCard;