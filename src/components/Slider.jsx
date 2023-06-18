import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { places } from "../assets/data";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 3000,
            arrows: false,
        };
        return (
            <section>
                <Slider {...settings} className="slider">
                    {places.map((place) => {
                        const { id, image, title, where } = place;
                        return (
                            <article key={id}>
                                <img src={image} alt={title} className="slider-image" />
                                <div className="slider-title">
                                    <h1 >{title}</h1>
                                    <h4>{where}</h4>
                                </div>
                            </article>
                        );
                    })}
                </Slider>
            </section>
        );
    }
}
