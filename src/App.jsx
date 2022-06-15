import { useState } from 'react';
import ClockForm from './components/clock/ClockForm';
import ClockList from './components/clock/ClockList';
import DefaultClock from './components/clock/DefaultClock';
import Event from './components/event/Event';
import useClock from './hooks/useClock';
import useEvent from './hooks/useEvent';

const App = () => {
	const [clockId, setClockId] = useState(null);
	const { clock, clocks, editClock, deleteClock, handleChange, handleSubmit } = useClock();
	const { event, events, deleteEvent, handleChange: handleEventChange, handleSubmit: handleEventSubmit } = useEvent();

	const handleClockView = (clockId) => setClockId(clockId);

	const filterEventsbyClockId = (events) => events.filter(event => event.clockId == clockId);

	return (
		<div style={{ width: '786px', margin: 'auto' }}>
			<DefaultClock />
			<ClockForm
				clock={clock}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
			<div style={{ display: 'flex', justifyContent: 'space-between', }}>
				<ClockList
					clocks={clocks ?? []}
					handleClockView={handleClockView}
					editClock={editClock}
					deleteClock={deleteClock}
					clockId={clockId}
				/>
				{clockId && <Event
					event={event}
					events={filterEventsbyClockId(events)}
					clockId={clockId}
					handleChange={handleEventChange}
					handleSubmit={handleEventSubmit}
					deleteEvent={deleteEvent}
				/>}
			</div>
		</div>
	);
};

export default App;