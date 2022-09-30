import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import { useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';

const Activities = () => {
    const [activities, setActivities] = useState([])
    const [breaks, setBreaks] = useState(0)
    let [time, setTime] = useState(0)
    useEffect(() => {
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])

    const handleAddBreak = (breaks) => {
        const breakTime = breaks;
        setBreaks(breakTime);
        localStorage.setItem('breaks', breaks)
    }

    useEffect(() => {
        const localStorageData = localStorage.getItem('breaks');
        console.log(localStorageData);
        setBreaks(localStorageData);
    }, [])

    const handleAddTime = (activity) => {
        const newTime = time + parseFloat(activity);
        setTime(newTime); 
    }

    const toastMessage = () => {
        toast.success("Activity Completed", {
            position: "top-center",
            autoClose: 2000
        })
    }

    return (
        <div className="activities">

            <div className="activities-container">
                {
                    activities.map(activity => <Activity activity={activity} key={activity.id} handleAddTime={handleAddTime}></Activity>)
                }
            </div>
            <div className="my-profile">
                <h2>Md Mehedi Hasan</h2>
                <h4><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>Dhaka, Bangladesh</h4>
                <p>Email: hasantonmoy550@gmail.com</p>
                <p>Age: 27</p>
                <p>Hobbies: Music, Movies, Story Books</p>
                <div>
                    <h3>Add a break</h3>
                    <div className="button-container">
                        <button onClick={() => handleAddBreak(5)}>5m</button>
                        <button onClick={() => handleAddBreak(10)}>10m</button>
                        <button onClick={() => handleAddBreak(15)}>15m</button>
                        <button onClick={() => handleAddBreak(20)}>20m</button>
                        <button onClick={() => handleAddBreak(30)}>30m</button>
                    </div>
                </div>
                <div>
                    <h3>Excercise Details</h3>
                    <p className="activity-time"><span>Activity Time</span><span> {time} minutes</span></p>
                    <p className="activity-time"><span>Break Time</span><span> {breaks} minutes</span></p>
                </div>
                <button onClick={toastMessage} className="toast">Complete Activity</button>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default Activities;