import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const {dispatch, currency} =useContext(AppContext);
    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return (
        <div>
            {
                <select className='alert alert-success' name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
                    <option default value={currency}>Currency: UK(£)</option>
                    <option value="£">UK(£)</option>
                    <option value="₹">India(₹)</option>
                    <option value="€">Europe(€)</option>
                    <option value="CAD">Canada(CAD)</option>
                </select>	
            }
        </div>
    );
};

export default Location;