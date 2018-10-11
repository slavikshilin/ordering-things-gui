
import React from 'react';
import Lightbox from '../../lib/index'; 

const Slider = (props) => {

    const { gallery, toggleLightboxAction } = props;

    return (
        <div className="slider">
            <Lightbox gallery={gallery} toggleLightboxAction={toggleLightboxAction} images={ [
            {
                src: 'https://firebasestorage.googleapis.com/v0/b/ordering-things-api.appspot.com/o/images%2F1.jpg?alt=media&token=52df0fff-48ae-4f94-9c1c-d247207ee4b0',
                title: 'На улице',
                description: 'Вика с Иринкой на улице'
            },
            {
                src: 'https://firebasestorage.googleapis.com/v0/b/ordering-things-api.appspot.com/o/images%2F2.jpg?alt=media&token=eb82a8d5-dafb-4f9d-947c-f7f8f4c50b14',
                title: 'Дома',
                description: 'Иринка в кровати'
            },
            {
                src: 'https://firebasestorage.googleapis.com/v0/b/ordering-things-api.appspot.com/o/images%2F3.jpg?alt=media&token=5ec736fd-0e1d-41e9-8753-7e78b5a6a150',
                title: 'Лира',
                description: 'Иринка на занятиях'
            }
            ] }/> 
        </div>
    );

}

export default Slider  