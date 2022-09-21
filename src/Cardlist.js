import React from "react";
import Card from "./Card";

const Cardlist = ({ robots })=> {
    const cardcomponent = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return(
        <div>
            {/* <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} /> 
            <Card id={robots[4].id} name={robots[4].name} email={robots[4].email} />  */}
            {cardcomponent}
            {
                robots.map((user, i) => {
                    return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} />
                    );
                })
            }
        </div>
    );  
}

export default Cardlist;