import React from 'react';
import background from '../../assest/background.jpg'
import { Homes } from './styles'
function Home() {
    return (
        <>
            <Homes style={{
                backgroundImage: `url(${background})`,
                height: "500px"
            }}>
                <div className="text">
                    <p className="logo">Let's do it together.</p>
                    <p className="dtl">We travel the world in search of stories. Come along for the ride.</p>
                    <button className='post'>view latest post</button>
                </div>
                <nav className="category">
                    <li>nature</li>
                    <li>Photography</li>
                    <li>Relaxation</li>
                    <li>Vacation</li>
                    <li>Travel</li>
                    <li>Adventure</li>
                </nav>
            </Homes>

        </>
    );
}

export default Home;
