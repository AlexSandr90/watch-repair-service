import React from 'react';
import './masters.scss';
import masters from "../../redux/masters.data";

const Masters = () => {
    console.log('Masters => ', masters[0].schedule[0].hours);

    const master = masters.map(item => {
        return (
            <>
                <div className="master" key={item.id}>

                    <p className="name">Name: {item.name}</p>
                    <p className="rating">Rating: {item.rating}</p>
                    <p className="city">City: {item.city}</p>
                    <ul className="schedule">
                        Schedule:
                        {
                            item.schedule.map(schedule => {
                                return (
                                    <li key={schedule.id}>{schedule.date}
                                        <ul>
                                            {
                                                schedule.hours.map((hour, id) => {
                                                    return (
                                                        <li key={id}>{hour}</li>
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
            </>
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