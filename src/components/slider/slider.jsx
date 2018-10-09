
import React from 'react';
import ImageGallery from 'react-image-gallery';

const Slider = (props) => {

    const images = [
        {
            original: 'https://firebasestorage.googleapis.com/v0/b/ordering-things-api.appspot.com/o/images%2F2.jpg?alt=media&token=eb82a8d5-dafb-4f9d-947c-f7f8f4c50b14',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/ordering-things-api.appspot.com/o/images%2F2.jpg?alt=media&token=eb82a8d5-dafb-4f9d-947c-f7f8f4c50b14',
        },
        {
            original: 'https://firebasestorage.googleapis.com/v0/b/ordering-things-api.appspot.com/o/images%2F2.jpg?alt=media&token=eb82a8d5-dafb-4f9d-947c-f7f8f4c50b14',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/ordering-things-api.appspot.com/o/images%2F2.jpg?alt=media&token=eb82a8d5-dafb-4f9d-947c-f7f8f4c50b14'
        },
        {
            original: 'https://firebasestorage.googleapis.com/v0/b/ordering-things-api.appspot.com/o/images%2F2.jpg?alt=media&token=eb82a8d5-dafb-4f9d-947c-f7f8f4c50b14',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/ordering-things-api.appspot.com/o/images%2F2.jpg?alt=media&token=eb82a8d5-dafb-4f9d-947c-f7f8f4c50b14'
        }
    ]

    return (
        <ImageGallery items={images} showPlayButton={false} showBullets={true} showThumbnails={false} />
    );

}

export default Slider  