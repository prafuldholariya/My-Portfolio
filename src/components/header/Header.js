import 'boxicons/css/boxicons.min.css';
import { useState } from "react";
import white_bright_icon from '../../img/brightness-low (1).png';
import black_bright_icon from '../../img/brightness-low.png';
import black_dark_icon from '../../img/moon (1).png';
import white_dark_icon from '../../img/moon.png';
import "./Header.css";

function Header({ isDarkMode, toggleTheme }) {

    const [ToggleCircle, setToggleCircle] = useState("toggle_right");
    const [toggle_left_img, setToggleLeftImg] = useState(black_bright_icon);
    const [toggle_right_img, setToggleRightImg] = useState(white_dark_icon);

    const toggle_btn = () => {
        if (ToggleCircle === "toggle_right") {
            setToggleCircle("toggle_left");
            setToggleLeftImg(white_bright_icon); // Change left icon for light mode
            setToggleRightImg(black_dark_icon); // Change right icon for light mode
        } else {
            setToggleCircle("toggle_right");
            setToggleLeftImg(black_bright_icon); // Change left icon for dark mode
            setToggleRightImg(white_dark_icon); // Change right icon for dark mode
        }
    };

    const [slider_class, setSliderclass] = useState("slide-close");
    const [blur_screen, setBlurScreen] = useState("")
    const toggle_header_slider = () => {
            setSliderclass("slide-open");
            setBlurScreen("blur-screen");
    }
    
    const slide_bar_close = () => {
        setSliderclass("slide-close");
        setBlurScreen("");
    }

    return (
        <header>
            <div id="header-container" class="flex-space-between" data-theme={isDarkMode}>
                <div id="left">
                    <a href="#front-container" class="text-deco-none" aria-label='D'><p><span class="red">Praful</span> Dholariya</p></a>
                </div>
                <div class='toggle-btn-container'>
                    <button className="bright-dark-mode-btn" onClick={() => { toggleTheme(); toggle_btn(); }}>
                        <div className={`circle-container`}>
                            <div className={`circle ${ToggleCircle}`}></div>
                        </div>
                        <div className="icon-container">
                            <div className="bright-mode flex-both-center">
                                <img src={toggle_left_img} alt="image1" />
                            </div>
                            <div className="dark-mode flex-both-center">
                                <img src={toggle_right_img} alt="image2" />
                            </div>
                        </div>
                    </button>
                </div>
                <div id="right">
                    <div className={`${blur_screen}`} onClick={slide_bar_close}></div>
                    <ul class={`${slider_class} flex-both-center list-style-none`} id="header-ul">
                        <li><a href="#about-container" aria-label='About'>About</a></li>
                        <li><a href="#experience" onClick={(e) => e.preventDefault()} aria-label='Experience'><span class="grey">Experience</span></a></li>
                        <li><a href="#project-container" aria-label='Project'>Projects</a></li>
                        <li><a href="#contact-container" aria-label='Contact'>Contact</a></li>
                    </ul>
                    <i class='bx bx-list-ul' onClick={toggle_header_slider}></i>
                </div>
            </div>
        </header>
    );
}

export default Header;