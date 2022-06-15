import { useState } from 'react';
import { generateId } from '../utils/generate-id';

const getId = generateId();

const CLOCK_INIT = {
    'id': '',
    'title': '',
    'time': '',
    'timezone': 'UTC',
};

const useClock = () => {
    const [clocks, setClocks] = useState([]);
    const [clock, setClock] = useState({ ...CLOCK_INIT });
    const [isEdit, setIsEdit] = useState(false);
    const [clockInfo, setClockInfo] = useState(null);

    const handleChange = (e) => {
        setClock({
            ...clock,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isEdit) {
            const clockState = {
                ...clock,
                id: getId.next().value,
            };
            setClocks([].concat(clocks, clockState));
        } else {
            updateClock({ ...clock });
        }
        clearClock();
    };

    const deleteClock = (clockId) => {
        clearClock();
        setClocks(clocks.filter(clock => clock.id != clockId));
    };

    const editClock = (clock) => {
        setIsEdit(true);
        setClock({ ...clock });
    };

    const updateClock = (element) => {
        setIsEdit(false);
        const clockState = clocks.map(clock => {
            if (clock.id == element.id) return { ...clock, ...element };
            return clock;
        });
        setClocks([...clockState]);
        clearClockInfo();
    };

    const clearClock = () => setClock({ ...CLOCK_INIT });

    const handleClockInfo = (clock) => setClockInfo(clock);

    const filterEventsbyClockId = (events) => events.filter(event => (event?.clockInfo?.id ?? '') == (clockInfo?.id ?? ''));

    const clearClockInfo = () => setClockInfo(null);

    return {
        clock,
        clocks,
        clockInfo,
        handleChange,
        handleSubmit,
        deleteClock,
        editClock,
        handleClockInfo,
        filterEventsbyClockId,
        clearClockInfo,
    };
};

export default useClock;