import React from 'react';
import './ImageList.css';

export default function ImageList({ images }) {
    const renderImages = () => {
        return images.map((url) => {
            return <img alt="" key={url} src={url}></img>;
        });
    };

    return <div className="images-list">{renderImages()}</div>;
}
