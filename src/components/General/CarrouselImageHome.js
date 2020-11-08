import React, { useEffect, useState } from "react";
import Carousel from './Carrousel';
import { SLIDE_INFO } from '../../constant/contstants';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slide from '@material-ui/core/Slide';

function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

    return <div className='col-sm' onClick={clickFunction}>{icon}</div>;
}
function CarrouselImageHome() {
    const [index, setIndex] = useState(0);
    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;

    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 500);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 39) {
                onArrowClick('right');
            }
            if (e.keyCode === 37) {
                onArrowClick('left');
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });
    return (
        <div class="container">

            <div className='row'>
                <div >
                    <Arrow
                        direction='left'
                        clickFunction={() => onArrowClick('left')}
                    />
                </div >
                <div className='col-sm'>
                    <Slide in={slideIn} direction={slideDirection}>
                        <div>
                            <Carousel content={content} />
                        </div>
                    </Slide>
                </div>
                <div className='col-sm'>
                    <Arrow
                        direction='right'
                        clickFunction={() => onArrowClick('right')}
                    />
                </div>
            </div>
        </div>
    );
}


export default CarrouselImageHome;