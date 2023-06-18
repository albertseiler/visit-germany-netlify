import { otherplaces } from "../assets/data";
import BackToTopButton from "./BackToTopButton";



const OtherPlaces = () => {

    const scrollToCity = (id) => {
        const element = document.getElementById(`place-${id}`);
        element.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <section className="otherplaces-positioning">
            <div className="more-places">
                <div className="more-places-title">
                    <h1>More beautiful places to visit</h1>
                </div>
                <div className="more-places-cities">
                    {otherplaces.map((city) => {
                        return (
                            <>
                                <p key={city.id} onClick={() => scrollToCity(city.id)} >{city.title}</p>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="colored-underline"></div>
            {otherplaces.map((place) => {
                return (
                    <>
                        <div id={`place-${place.id}`} key={place.id} className="otherplaces-container">
                            <div className="otherplaces-image" >
                                <img src={place.image} alt={place.title} />
                            </div>
                            <div className="otherplaces-text">
                                <h2 className="otherplaces-title">{place.title}</h2>
                                <p>{place.text}</p>
                            </div>
                        </div>
                    </>
                )
            })}
            <BackToTopButton />
        </section>
    )
}
export default OtherPlaces