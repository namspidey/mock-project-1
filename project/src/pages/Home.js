import React from 'react';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />

            <div className='home-page'>
                <div className='banner '>
                    <div className="container ">
                        <h1 className="logo-font">conduit</h1>
                        <p>A place to share your knowledge.</p>
                    </div>
                </div>
                
                <div className='container-page'></div>
            </div>
        </div>
    );
};

export default Home;