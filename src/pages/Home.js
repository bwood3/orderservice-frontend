import React from 'react';
import backgroundImage from '../images/background.jpg';


const Home = () => {
    const homeStyle = {
        minHeight: '100vh',
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    };

    return (
        <div style={homeStyle}>
            <h1>Welcome to the Order Service</h1>
        </div>
    );
};

export default Home;
