import React from 'react';
import './masters.scss';
import masters from "../../redux/masters.data";

const Masters = () => {
    const master = masters.map(item => {
        // console.log('masters.map.id => ', item.id);
        return (
            <div className="master" key={item.id}>

                <p className="name">
                    <span>Name:</span>
                    <span>{item.name}</span>
                </p>
                <p className="rating">
                    <span>Rating:</span>
                    <span>{item.rating}</span>
                </p>
                <p className="city">
                    <span>City:</span>
                    <span>{item.city}</span>
                </p>
                <ul className="schedule">
                    Schedule:
                    {
                        item.schedule.map(schedule => {
                            // console.log('item.schedule.id => ', schedule.id);
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
    });
    console.log(master);

    return (
        <div className='masters'>
            { master }
        </div>
    );
};

export default Masters;