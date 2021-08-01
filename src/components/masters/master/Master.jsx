import React from 'react';
import './master.scss';

const Master = props => {
    return (
        <div className="master" key={props.id}>

            <div className="name">
                <span>Name:</span>
                <span>{props.name}</span>
            </div>
            <div className="rating">
                <span>Rating:</span>
                <span>{props.rating}</span>
            </div>
            <div className="city">
                <span>City:</span>
                <span>{props.city}</span>
            </div>
            <ul className="schedule">
                Schedule:
                {
                    props.schedule.map(schedule => {
                        return (
                            <li key={schedule.id}>
                                {schedule.date}

                                <ul className='schedule_in__li'>
                                    { schedule.hours.map((hour, id) => <li key={`${id + 1}`}>{hour}</li>) }
                                </ul>

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Master;