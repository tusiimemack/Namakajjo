import React from "react";

function Footer(){
    let cDate= new Date().getFullYear();
    return(
        <div className="footer">
            &copy; New Life Church @ {cDate}
        </div>
    )
}

export default Footer;