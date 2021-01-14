import React from 'react';
import Sidebar from './Sidebar';

const Dashbord = ({id}) => {
    return (
        <div className="d-flex" style={{ height: '100vh'}}>
            <Sidebar id={id}/>
        </div>
    )
}

export default Dashbord
