const Button = ({ type, value }) => {
    return (
        <div style={{ height: '40px' }}>
            <button
                type={type ?? 'button'}
                style={{
                    background: '#4C35AE',
                    color: '#fff',
                    border: '#fff',
                    outline: 'none',
                    padding: '10px 20px',
                    margin: '0 10px',
                    borderRadius: '10px',
                    fontSize: '18px',
                }}
            >
                {value ?? ''}
            </button>
        </div>
    );
};

export default Button;