import React from 'react';
import { Footer, Posts } from './style';
import img1 from '../../assest/image1.jpg'
import img2 from '../../assest/image2.jpg'
import img3 from '../../assest/image3.jpg'
import img4 from '../../assest/image4.jpg'
import img5 from '../../assest/image5.jpg'
import img7 from '../../assest/image7.png'
import img8 from '../../assest/image8.png'
import img9 from '../../assest/image9.png'


function Postss() {
    return (
        <>
            <Posts id='post'>
                <p className="logo">
                    featured posts
                </p>
                <div className="hr">

                </div>
                <div className="card-wraper">
                    <div className="card" style={{ backgroundImage: `url(${img1})` }}>
                        <p className="title">
                            The Road Ahead
                        </p>
                        <p className="about">
                            The road ahead might be paved - it might not be.
                        </p>
                        <div className="d-flex">
                            <p className="name">Mat Vogels</p>
                            <p className="date">september 26, 2021</p>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundImage: `url(${img2})` }}>
                        <p className="title">
                            From Top Down
                        </p>
                        <p className="about">
                            Once a year, go someplace you’ve never been before.
                        </p>
                        <div className="d-flex">
                            <p className="name">William Wong</p>
                            <p className="date">september 26, 2021</p>
                        </div>
                    </div>
                </div>
                <p className="logo">
                    most recent
                </p>
                <div className="hr">

                </div>
                <div className="cards-wrapper">
                    <div className="cards">
                        <img src={img3} style={{ height: "150px", width: "100%" }} alt="" />
                        <p className="logos">Still Standing Tall</p>
                        <p className="detail">Life begins at the end of your comfort zone and day.</p>
                        <div className='hrr'></div>
                        <div className="time">
                            <p className="names">
                                William Wong
                            </p>
                            <p className="dates">9/25/2015</p>
                        </div>
                    </div>
                    <div className="cards">
                        <img src={img4} style={{ height: "150px", width: "100%" }} alt="" />
                        <p className="logos">Sunny Side Up</p>
                        <p className="detail">No place is ever as bad as they tell you it’s going to be.</p>
                        <div className='hrr'></div>
                        <div className="time">
                            <p className="names">
                                Mat Vogels
                            </p>
                            <p className="dates">9/25/2015</p>
                        </div>
                    </div>
                    <div className="cards">
                        <img src={img5} style={{ height: "150px", width: "100%" }} alt="" />
                        <p className="logos">Water Falls</p>
                        <p className="detail">We travel not to escape life, but for life not to escape us.</p>
                        <div className='hrr'></div>
                        <div className="time">
                            <p className="names">
                                Mat Vogels
                            </p>
                            <p className="dates">9/25/2015</p>
                        </div>
                    </div>
                    <div className="cards">
                        <img src={img7} style={{ height: "150px", width: "100%" }} alt="" />
                        <p className="logos">Through the Mist</p>
                        <p className="detail">Travel makes you see what a tiny place you occupy in the world.</p>
                        <div className='hrr'></div>
                        <div className="time">
                            <p className="names">
                                William Wong
                            </p>
                            <p className="dates">9/25/2015</p>
                        </div>
                    </div>
                    <div className="cards">
                        <img src={img8} style={{ height: "150px", width: "100%" }} alt="" />
                        <p className="logos">Awaken Early</p>
                        <p className="detail">Not all those who wander are lost and end up find.</p>
                        <div className='hrr'></div>
                        <div className="time">
                            <p className="names">
                                Mat Vogels
                            </p>
                            <p className="dates">9/25/2015</p>
                        </div>
                    </div>
                    <div className="cards">
                        <img src={img9} style={{ height: "150px", width: "100%" }} alt="" />
                        <p className="logos">Try it Always</p>
                        <p className="detail">The world is a book, and those who do not travel read only one page.</p>
                        <div className='hrr'></div>
                        <div className="time">
                            <p className="names">
                                Mat Vogels
                            </p>
                            <p className="dates">9/25/2015</p>
                        </div>
                    </div>
                </div>
            </Posts>
            <Footer id='contact'>
                <p className="logo-s">Stay in Touch</p>
                <div className="hr">

                </div>
                <div className="input">
                    <input type="email" placeholder='Enter your email address' name="email" className='email'
                     id="email" />
                     <input type="submit" id='submit'
                     className='submit'
                      value="Submit" />
                </div>
            </Footer>
        </>
    )
}

export default Postss;