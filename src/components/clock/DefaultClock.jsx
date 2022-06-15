import { getDate } from '../../utils/datetime';
import Clock from './Clock';

const DefaultClock = () => {
    return (
        <div style={{ margin: '10px 0', padding: '10px 0', border: '2px solid #4c35ae', borderRadius: '10px' }}>
            <h2>Base Clock: <Clock /></h2>
            <p style={{ fontWeight: 'bold' }}>Date: {getDate(new Date())}</p>
            <p style={{ fontWeight: 'bold' }}>Time Zone: UTC</p>
        </div >
    );
};

export default DefaultClock;