import React, { useState, useEffect } from 'react';
import './DotCircleSpinner.css';

const DotCircleSpinner = () => {
    const [dots, setDots] = useState(['', '', '']);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots(prevDots => {
                const updatedDots = prevDots.map((dot, index) => (index === prevDots.length - 1 ? '' : dot));
                return [...updatedDots, ''];
            });
        }, 300);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="dot-circle-spinner">
            {dots.map((dot, index) => (
                <div key={index} className="dot"></div>
            ))}
        </div>
    );
};

export default DotCircleSpinner;
