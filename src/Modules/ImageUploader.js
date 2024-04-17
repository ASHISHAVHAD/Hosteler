import React, { useState } from 'react';
import $ from 'jquery';

    function ImageUpload() {

    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };

    const handleUpload = () => {
      const formData = new FormData();
      formData.append('image', image);

      $.ajax({
        url: 'http://localhost/wt/imageStore.php',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {
          alert('Image uploaded successfully');
        },
        error: function (xhr, status, error) {
          console.error('Error uploading image:', error);
          alert('Error uploading image');
        }
      });
    };

    return (
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    );
}

export default ImageUpload;