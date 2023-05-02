import { useState, useEffect } from "react";
import "./Locations.css"


export const AdminLocationsList = () => {
    const [managedLocations, setManagedLocations] = useState([])
    const [currentAdmin, setCurrentAdmin] = useState({})
    const localMiratUser = localStorage.getItem("mirat_user")
    const miratUserObject = JSON.parse(localMiratUser)

    useEffect(
        () =>{
            fetch(`http://localhost:8088/admins`)
            .then(response => response.json())
            .then((adminArray) => {
                let user = adminArray.find((admin) => admin.userId === miratUserObject.id)
                setCurrentAdmin(user)
            })
            
        },
        []
        )
        
        useEffect(
            () =>{
            fetch(`http://localhost:8088/managedLocations?_expand=location&adminId=${currentAdmin.id}`)
            .then(response => response.json())
            .then((managedLocationsArray) => {
                setManagedLocations(managedLocationsArray)
            })
        
        },
        [currentAdmin]
    )

    return <>
        <h3>Currently Overseeing The Following Locations</h3>
        <article className="locations">
            {
                managedLocations.map(
                    (managedLocation) => {
                        return <section className="location" key={`location--${managedLocation.id}`}>
                            <header>Location Name: {managedLocation?.location?.locationName}</header>
                            <footer>Address: {managedLocation?.location?.address}</footer>
                        </section>
                    }
                )
            }
        </article>
    </>
}