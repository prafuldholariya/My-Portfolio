import React, { useEffect, useState } from 'react'
import bootstrap_img from '../../img/Bootstrap logo.png'
import css_img from '../../img/CSS logo.png'
import react_img from '../../img/React_logo.png'
import docker_img from '../../img/docker logo.png'
import html_img from '../../img/html logo.png'
import js_img from '../../img/javascript logo.png'
import mongo_img from '../../img/mongodb logo.png'
import python_img from '../../img/python-logo.png'
import sql_img from '../../img/sql logo.png'
import './Background.css'

// function loadImg () {

// }
const Background = ({isDarkMode}) => {
    const [images, setImages] = useState([
        react_img,
        mongo_img,
        bootstrap_img,
        python_img,
        sql_img,
        docker_img,
        css_img,
        react_img,
        js_img,
        html_img,
    ]);
    useEffect(() => {
        const rotateImages = () => {
            setImages((prevImages) => {
                const lastImage = prevImages[prevImages.length - 1];
                const remainingImages = prevImages.slice(0, -1);
                return [lastImage, ...remainingImages]; // Move last element to the front
            });
        };

        const intervalId = setInterval(rotateImages, 5000); // Rotate every 5 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="background" data-theme = {isDarkMode ? "dark" : "light"}>
            <div className="background-layer"></div>
            <div className="background-container">
                {images.map((image, index) => (
                    <div key={index} className={`delay${index + 1}`}>
                        <img src={image} alt={`Logo ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

//     return (
//         <background>
//             <div className='background-layer'></div>
//             <div className='backgraound-container'>
//                 <div className='delay1'>
//                     <img src={images[0]}></img>
//                 </div>
//                 <div className='delay2'>
//                     <img src={images[1]}></img>
//                 </div>
//                 <div className='delay3'>
//                     <img src={images[2]}></img>
//                 </div>
//                 <div className='delay4'>
//                     <img src={images[3]}></img>
//                 </div>
//                 <div className='delay5'>
//                     <img src={images[4]}></img>
//                 </div>
//                 <div className='delay6'>
//                     <img src={images[5]}></img>
//                 </div>
//                 <div className='delay7'>
//                     <img src={images[6]}></img>
//                 </div>
//                 <div className='delay8'>
//                     <img src={images[7]}></img>
//                 </div>
//             </div>
//         </background>
//     )
// }

export default Background;