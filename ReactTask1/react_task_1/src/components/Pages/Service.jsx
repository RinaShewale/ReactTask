import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Service = () => {
    const { serviceId } = useParams();
  
    console.log(serviceId);
    return (
        <div>
            <section id="services">
                <h2>{serviceId}</h2>
                <ul>
                    <li><NavLink to="/service/personaltrainee">Personal Training</NavLink></li>
                    <li><NavLink to="/service/fitnessclasses">Fitness Classes</NavLink></li>
                    <li><NavLink to="/service/conditioningprograms">Strength & Conditioning Programs</NavLink></li>
                    <li><NavLink to="/service/nutritionguide">Nutrition Guide</NavLink></li>
                    <li><NavLink to="/service/onlinecoaching">Online Coaching & Workout Plans</NavLink></li>
                </ul>
            </section>

        </div>
    )
}

export default Service
