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
        <h2></h2>
        <article className="locations">
            {
                userLocations.map(
                    (userLocation) => {
                        return <section className="location" key={`location--${userLocation.id}`}>
                            <header>Location Name: {userLocation?.location?.locationName}</header>
                            <footer>Address: {userLocation?.location?.address}</footer>
                        </section>
                    },
                )
            }
        </article>
    </>
}