import React from 'react';
import './../assets/Location.css'; 

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.2032523225439!2d-74.08434317083643!3d4.62742599978991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzcnMzguNyJOIDc0wrAwNScwMS43Ilc!5e0!3m2!1ses!2sco!4v1560310597380!5m2!1ses!2sco" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Nuestra ubicación</div>
            </div>

        </div>
    );
};

export default Location;