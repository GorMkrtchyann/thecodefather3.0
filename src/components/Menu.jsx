import React from "react";

const Menu = () =>{
    return(
        <nav className="menu">
            <div className="container">
                <ul>
                    <li><a href="#"><img src="images/icons/home.svg" alt="" /> Գլխավոր</a></li>
                    <li><a href="#"><img src="images/icons/information.png" alt="" /> Մեր Մասին</a></li>
                    <li><a href="#"><img src="images/icons/layout.png" alt="" /> Կոնտենտ</a></li>
                    <li><a href="#"><img src="images/icons/phone-call.png" alt="" /> Կոնտակտ</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu