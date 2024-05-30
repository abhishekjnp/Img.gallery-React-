import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './ImageGallery.css';

const images = [
  /*'https://via.placeholder.com/150/0000FF',
  'https://via.placeholder.com/150/FF0000',
  'https://via.placeholder.com/150/00FF00',
  'https://via.placeholder.com/150/FFFF00',
  'https://via.placeholder.com/150/FF00FF',
  'https://via.placeholder.com/150/00FFFF',*/
  'https://picsum.photos/id/77/450/300',
  'https://picsum.photos/seed/picsum/450/300',
  'https://picsum.photos/450/300?grayscale',
  'https://picsum.photos/id/8/450/300?grayscale&blur=2',
  'https://picsum.photos/450/300/?blur',
  'https://picsum.photos/450/300/?blur=2',
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <ImageItem key={index} src={image} onClick={() => handleImageClick(image)} />
      ))}
      {selectedImage && <Modal src={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};

export default ImageGallery;
