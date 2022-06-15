const TextField = ({ type, name, value, placeholder, onChange, error }) => {
    return (
        <div style={{ height: '50px', textAlign: 'start' }}>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder ?? ''}
                style={{
                    width: '100%',
                    border: '2px solid #333',
                    outline: 'none',
                    background: 'none',
                    padding: '10px',
                    borderRadius: '10px',
                    fontSize: '16px',
                }}
            />
            {error && <span style={{ color: 'red', fontWeight: '500', marginBottom: '10px' }}>Title is required</span>}
        </div>
    );
};

export default TextField;