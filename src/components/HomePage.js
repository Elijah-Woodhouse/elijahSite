import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import BoulderImage from "../data/nat_pic_boulders_and_tree.jpeg";
import FenceImage from "../data/nat_pic_fence.jpeg";
import GrassField from '../data/nat_pic_grass.jpeg';
import { Controller, Scene } from 'react-scrollmagic';


export default function HomePage() {


        return (
            <div>
                <h1 className="main-intro-header">Welcome Home</h1>
                <div className="myImage"> 
                    <img className="home-page-image" src={GrassField}/>
                </div>
                <div className='nav-links'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
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
