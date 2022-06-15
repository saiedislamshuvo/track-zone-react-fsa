const timezones = ['UTC', 'GMT', 'PST', 'EST'];

const SelectField = ({ name, value, onChange }) => {
    return (
        <div style={{ height: '50px' }}>
            <select
                name={name}
                value={value}
                onChange={onChange}
                style={{
                    width: '100%',
                    border: '2px solid #333',
                    outline: 'none',
                    background: 'none',
                    padding: '10px',
                    borderRadius: '10px',
                    fontSize: '16px',
                }}
            >
                {timezones.map(timezone => (<option key={timezone} value={timezone}>{timezone}</option>))}
            </select>
        </div>
    );
};

export default SelectField;