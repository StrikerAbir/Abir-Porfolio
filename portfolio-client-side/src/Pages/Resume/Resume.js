import React from 'react';
import resume from '../../assets/files/Abir Resume MERN Dev candidate.pdf'
const Resume = () => {
    return (
        <div className='h-screen'>
            <object data={resume} type="application/pdf" width="100%" height="100%">
            </object>
        </div>
    );
};

export default Resume;