import React from 'react';
import Card from "./Card"

const card = [
    {
        nom: "For Patient", 
        def: "Find a doctor, book a visit and solve any health-related doubt",
        select: [ "ARGENTINA", "AUSTRALIA", "BRASIL",
            "COLOMBIA", "CSECH", "FRANCE", "ITALIE", "MEXICO", "PERU", "POLAND", "SPAIN", "CHILE"],
        lien: "https://www.docplanner.com/img/screen-marketplace@2x.png"
    },

    {
        nom: "For Doctors", 
        def: "Save time managing visits and cut no-shows by half",
        lien: "https://www.docplanner.com/img/screen-saas@2x.png"
    }
]

const Liste = (props) => {
    return (
        <div className="row">
            <div className="col">
                <Card data={card} />
            </div>
        </div>
    )
}
export default Liste