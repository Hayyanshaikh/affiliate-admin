import React from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = ({ onImageDrop }) => {
  const onDrop = (acceptedFiles) => {
    onImageDrop(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*', // Allow only images
  });

  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      <p>Drag & drop images here, or click to select files</p>
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '40px 20px',
  textAlign: 'center',
  marginBottom: "20px",
  cursor: 'pointer',
};

export default Dropzone;
