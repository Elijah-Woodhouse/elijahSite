import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, useRouteMatch, useNavigate } from 'react-router-dom';
import BoulderImage from "../data/nat_pic_boulders_and_tree.jpeg";
import FenceImage from "../data/nat_pic_fence.jpeg";
import GrassField from '../data/nat_pic_grass.jpeg';
import { useInView } from 'react-intersection-observer';


export default function HomePage() {
    const navigate = useNavigate();
    const fadeInOutStyles = "break-fadeInOut";
    const hiding = "item-not-in-view";

    const { ref: firstRef, inView: firstBreakIsVisibile} = useInView();
    const { ref: secondRef, inView: secondBreakIsVisibile} = useInView();
    const { ref: thirdRef, inView: thirdBreakIsVisibile} = useInView();
    const { ref: fourthRef, inView: fourthBreakIsVisibile} = useInView();
    const { ref: fifthRef, inView: fifthBreakIsVisibile} = useInView();

    useEffect(() => {
        console.log(firstBreakIsVisibile, secondBreakIsVisibile);
    }, [firstBreakIsVisibile, secondBreakIsVisibile])

        return (
            <div>
                <h1 className={firstBreakIsVisibile ? `${fadeInOutStyles}` :`${hiding}`}>Welcome Home</h1>
                <h1 className={secondBreakIsVisibile ? `${fadeInOutStyles}` :`${hiding}`}>My name is Elijah</h1>
                <h1 className={thirdBreakIsVisibile ? `${fadeInOutStyles}` :`${hiding}`}>I am a software developer and website designer</h1>
                <h1 className={fourthBreakIsVisibile ? `${fadeInOutStyles}` :`${hiding}`}>I mostly work with Python and React.js</h1>
                <h1 className={fifthBreakIsVisibile ? `${fadeInOutStyles}` :`${hiding}`}>Lorem Ipsum Solare Di Elite Commodo Pariatur</h1>
                <div className='nav-links'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="first-break" ref={firstRef}>stop point</div>
                <div className="second-break" ref={secondRef}>stop point</div>
                <div className="third-break" ref={thirdRef}>stop point</div>
                <div className="fourth-break" ref={fourthRef}>stop point</div>
                <div className="fifth-break" ref={fifthRef}>stop point</div>
                <div className="HP-paragraph-one">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="HP-paragraph-two">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Faucibus a pellentesque sit amet porttitor eget 
                        dolor morbi non. Donec adipiscing tristique risus nec feugiat 
                        in. Iaculis at erat pellentesque adipiscing commodo elit at 
                        imperdiet dui. Ut eu sem integer vitae justo eget magna. 
                        Morbi non arcu risus quis varius quam quisque. Nunc faucibus 
                        a pellentesque sit amet porttitor eget dolor. Dignissim 
                        sodales ut eu sem. Urna et pharetra pharetra massa massa. 
                        Sapien nec sagittis aliquam malesuada bibendum arcu vitae. 
                        Elementum pulvinar etiam non quam lacus. Vitae tortor 
                        condimentum lacinia quis vel eros donec. Enim nunc faucibus a 
                        pellentesque sit amet. Justo eget magna fermentum iaculis eu non. 
                        Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc.</p>
                </div>
            </div>
        )
    }
