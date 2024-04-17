import React, { useState } from 'react';
import $ from 'jquery';
import { set } from 'react-hook-form';

function ImageRetriever() {
    const [id, setId] = useState('');
    const [imageData, setImageData] = useState('');
    const [longitude, setLongitude] = useState('25.3076008');
    const [latitude, setLatitude] = useState('51.4803216');
    const [link, setLink] = useState("http://maps.google.com/maps?q=20.008674,73.787420&z=16&output=embed");

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handleRetrieve = () => {
        $.ajax({
        url: 'http://localhost/wt/imageGet.php',
        type: 'POST',
        data: { id: id },
        success: function (response) {
            setImageData(response);
        },
        error: function (xhr, status, error) {
            console.error('Error retrieving image:', error);
            alert('Error retrieving image');
        }
        });
    };

    function changeMap () {
        setLatitude(document.getElementById('latitude').value);
        setLongitude(document.getElementById('longitude').value);
        setLink("http://maps.google.com/maps?q=" + longitude + "," + latitude + "&z=16&output=embed");
        console.log(longitude);
        console.log(latitude);
        console.log(link);
    }

    return (
        <div>
        <input type="text" value={id} onChange={handleIdChange} placeholder="Enter ID" />
        <button onClick={handleRetrieve}>Retrieve Image</button>
        {imageData && <img src={`data:image/jpeg;base64,${imageData}`} alt="Retrieved Image" />}
        <input type = "text" id = "longitude" />
        <input type = "text" id = "latitude" />
        <iframe src={link} height="450" width="600"></iframe>
        <iframe src="http://maps.google.com/maps?q=20.008674,73.787420&z=16&output=embed" height="450" width="600"></iframe>
        <button onClick={changeMap}>Change Map</button>
        </div>
    );
}

export default ImageRetriever;
