import { useState } from 'react';
import Button from '../shared/button/Button';
import SelectField from '../shared/text-field/SelectField';
import TextField from '../shared/text-field/TextField';


const ClockForm = ({ clock, handleChange, handleSubmit, }) => {

    return (
        <div>
            <h3 style={{ textAlign: 'start', marginTop: '10px', marginBottom: '5px', }}>Create Clock</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    type="text"
                    name='title'
                    value={clock.title}
                    onChange={handleChange}
                    placeholder={'Type clock title here'}
                />
                <TextField
                    type="datetime-local"
                    name='time'
                    value={clock.time}
                    onChange={handleChange}
                />
                <SelectField
                    name='timezone'
                    value={clock.timezone}
                    onChange={handleChange}
                />
                <Button type="submit" value={'Save'} />
            </form>
        </div>
    );
};

export default ClockForm;