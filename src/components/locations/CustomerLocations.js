import { useState, useEffect } from "react";
import "./Locations.css"


export const CustomerLocationsList = () => {
    const [userLocations, setUserLocations] = useState([]);
    const localMiratUser = localStorage.getItem("mirat_user")
    const miratUserObject = JSON.parse(localMiratUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=location&userId=${miratUserObject.id}`)
                .then(response => response.json())
                .then((userLocationsArray) => {
                    setUserLocations(userLocationsArray)
                })
        },
        []
    )

    return <>
        <h3>Currently Overseeing The Following Locations</h3>
        <article className="locations">
            {
                userLocations.map(
                    (userLocation) => {
                        return <section className="location" key={`location--${userLocation.id}`}>
                            <div className="location__text">
                                <header>Location Name: {userLocation?.location?.locationName}</header>
                                <footer>Address: {userLocation?.location?.address}</footer>
                            </div>
                        </section>
                    },
                )
            }
        </article>

        <div className="mid_section">
            <div >
                <img className="tasting_image" src="./tasting_image.jpg"/>
            </div>
            <div className="text_mid_section">
                <h2>Who are we?</h2>
                <h3>We're a couple of Nashville Native rum lovers who wanted something more approachable, shootable, and drinkable.</h3>
                <h3>We’re not saying it’s the best... but we are thinking it.</h3>
                <img className="badge_image" src="./badgeLogo.jpg"/>
            </div>
        </div>

        <div className="footer">
                <h2 className="footer_text">Want to share your favorite Mirat moment?</h2>
                <h2 className="footer_text">Tag us on Instagram! @miratrum</h2>
                <h2 className="footer_text">#MIRATCREW</h2>
        </div>
    </>
}