import React from 'react';
import './master.scss';

const Master = props => {
    console.log('Master props => ', props);
    console.log('Master props.schedule ===>>> ',props.schedule);
    return (
        <div className="master" key={props.id}>

            <p className="name">
                <span>Name:</span>
                <span>{props.name}</span>
            </p>
            <p className="rating">
                <span>Rating:</span>
                <span>{props.rating}</span>
            </p>
            <p className="city">
                <span>City:</span>
                <span>{props.city}</span>
            </p>
            <ul className="schedule">

                Schedule:
                {
                    props.schedule.map(schedule => {
                        // console.log('props.schedule.id => ', schedule.id);
                        return (
                            <li key={schedule.id}>

                                {schedule.date}

                                <ul className='schedule_in__li'>
                                    {
                                        schedule.hours.map((hour, id) => {
                                            // console.log('schedule.hours.ID => ', `${id + 1}`);
                                            return (
                                                <li key={`${id + 1}`}>{hour}</li>
                                            )
                                        })
                                    }
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