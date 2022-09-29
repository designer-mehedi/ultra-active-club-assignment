import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Activity.css';

const Activity = ({ activity, handleAddTime }) => {
    // const {activity, handleAddTime} = props; 
    const { activityName, img, duration, status} = activity; 
    return (
        <div className="activity">
            <img src={img} alt="" />
            <h2>{activityName}</h2>
            <p>Part of the day: {status}</p>
            <p>Required Time: {duration}m</p>
            <button onClick={() => handleAddTime(activity.duration)} className="activity-btn">Add activity<span className="icon"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span> </button>
        </div>
    );
};

export default Activity;