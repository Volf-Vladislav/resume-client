import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { flipState } from '../../states/UI/UISlice'

export default function ImageSlider({ slides, initialIndex }: any) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)

    const dispatch = useDispatch()

    const goPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    };
    const goNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

    const close = () => {
        dispatch(flipState({ type: 'slider' }))
    }

    return (
        <div className="imageSlider">
            <div className="overlay" onClick={close}></div>

            <div className="container">
                <div className="images">
                    <img src={slides[currentIndex]} alt="" />
                </div>

                <div className="dots">
                    {slides.map((slide: number, slideIndex: number) => (
                        <div
                            key={slide}
                            onClick={() => goToSlide(slideIndex)}
                        >
                            <div className="dot" id={slideIndex == currentIndex ? 'current' : ''}></div>
                        </div>
                    ))}

                </div>

                <div className="controls">
                    <div className="leftButton" onClick={goPrevious}>
                        <p>PREV</p>
                    </div>

                    <div className="rightButton" onClick={goNext}>
                        <p>NEXT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
