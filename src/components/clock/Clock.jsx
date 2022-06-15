import { useState, useEffect } from 'react';

const Clock = ({ datetime }) => {
    const initDate = datetime ? new Date(datetime.getTime()) : new Date();
    const [date, setDate] = useState(initDate);

    const tick = () => setDate((date) => new Date(date.setSeconds(date.getSeconds() + 1)));

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>{date.toLocaleTimeString()}</>
    );
};

export default Clock;