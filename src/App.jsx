import { useState } from 'react';
import ClockForm from './components/clock/ClockForm';
import ClockList from './components/clock/ClockList';
import DefaultClock from './components/clock/DefaultClock';
import Event from './components/event/Event';
import useClock from './hooks/useClock';
import useEvent from './hooks/useEvent';

const App = () => {

	const {
		clock,
		clocks,
		clockInfo,
		editClock,
		deleteClock,
		handleChange,
		handleSubmit,
		handleClockInfo,
		filterEventsbyClockId,
		clearClockInfo,
	} = useClock();
	const {
		event,
		events,
		deleteEvent,
		handleChange: handleEventChange,
		handleSubmit: handleEventSubmit
	} = useEvent();

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
					editClock={editClock}
					deleteClock={deleteClock}
					handleClockInfo={handleClockInfo}
					clockId={clockInfo?.id || ''}
				/>
				{(clockInfo?.id || false) && <Event
					event={event}
					events={filterEventsbyClockId(events)}
					clockInfo={clockInfo}
					handleChange={handleEventChange}
					handleSubmit={handleEventSubmit}
					deleteEvent={deleteEvent}
					clearClockInfo={clearClockInfo}
				/>}
			</div>
		</div>
	);
};

export default App;