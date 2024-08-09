import React from 'react';

export const WorkoutLog = () => {
    return (
        <>
            <input type="text" placeholder="what was your workout?" />
            <input type="text" placeholder="duration?" />
            <input type="text" placeholder="distance?" />
            <input type="text" placeholder="any notes?" />
            <button>Log it</button>
        </>
    )
}