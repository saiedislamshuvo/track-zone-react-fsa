import ClockCard from './ClockCard';

const ClockList = ({ clocks, editClock, deleteClock, handleClockInfo, clockId }) => {
    let child = clocks.length === 0
        ? (<div>
            <h3 style={{ textAlign: 'start', marginTop: '10px', marginBottom: '5px', }}>Clock list is empty!</h3>
            <p style={{ textAlign: 'start', marginTop: '10px', marginBottom: '5px', color: '#333' }}>You can create as many clock as you want</p>
        </div>)
        : (<div>
            <h3 style={{ textAlign: 'start', marginTop: '10px', marginBottom: '5px', }}>Clocks List</h3>
            {clocks.map(clock => (
                <ClockCard
                    key={clock.id}
                    clock={clock}
                    handleClockInfo={handleClockInfo}
                    editClock={editClock}
                    deleteClock={deleteClock}
                    clockId={clockId}
                />
            ))}
        </div>);
    return (child);
};

export default ClockList;