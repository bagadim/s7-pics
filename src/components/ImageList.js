import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

export default function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageCard image={image} key={image.id} />;
    });

    return <div className="image-list">{renderedImages}</div>;
}
