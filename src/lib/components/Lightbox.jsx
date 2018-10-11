import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import BodyPortal from './BodyPortal';
import './Lightbox.css'

export default class Lightbox extends React.Component {

    render() {

        let container;
        if (this.props.gallery.show)
            container = (
                <BodyPortal>
                    <Container
                        {...this.props}
                        toggleLightbox={this.props.toggleLightboxAction}
                        selectedImage={this.props.gallery.selectedImage}
                    />
                </BodyPortal>
            )

        return (
            <div className='lightbox-container'>
                {container}
            </div>
        )
    }
}

Lightbox.defaultProps = {
    showImageModifiers: true
}


Lightbox.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string,
        description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        thumbnail: PropTypes.string
    })).isRequired,
    showImageModifiers: PropTypes.bool,
    renderDescriptionFunc: PropTypes.func
}
