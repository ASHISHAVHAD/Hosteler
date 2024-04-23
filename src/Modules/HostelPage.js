import styles from './HostelPage.module.css';
import image1 from '../hostelThumbnail.jpg';
import $ from 'jquery';
import { useState } from 'react';
import RoomTemplate from './RoomTemplate';
import RoomList from './RoomList';

function HostelPage(props) {

    const [longitude, setLongitude] = useState('25.3076008');
    const [latitude, setLatitude] = useState('51.4803216');
    const [link, setLink] = useState("http://maps.google.com/maps?q=20.008674,73.787420&z=16&output=embed");
    const user = window.location.href.split('/')[5];
    const [imageData, setImageData] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    $.ajax({
        url: 'http://localhost/wt/imageGet.php',
        type: 'POST',
        data: { 'id' : user },
        success: function (response) {
            setImageData(response);
        },
        error: function (xhr, status, error) {
            console.error('Error retrieving image:', error);
            alert('Error retrieving image');
        }
    });

    $.ajax ({
        url : "http://localhost/wt/hostelInfo.php",
        type : 'POST',
        data : {
            'email' : user,
        },
        success(data) {
            const temp = JSON.parse(data);
            document.getElementById("name").innerText = temp['hostelName'];
            document.getElementById("address").innerText = temp['address'];
            document.getElementById("mobile").innerText = temp['mobile'];
            document.getElementById("email").innerText = temp['email'];
            setLatitude(temp['latitude']);
            setLongitude(temp['longitude']);
            setLink("http://maps.google.com/maps?q=" + latitude + "," + longitude + "&z=16&output=embed");
            setIsLoading(false);
        }
    });

    return (
        <div className = {styles.body}>
            <div className = {styles.infoBlock}>
                <div className = {styles.info}>
                    <h1 id = "name" className = {styles.title}>Name</h1>
                    <h2 id = "address" className = {styles.address}>Location</h2>
                    <p id = "mobile" className = {styles.mobile}>Mobile</p>
                    <p id = "email" className = {styles.mobile}>Email</p>
                </div>
                <div className = {styles.hostelImage} >
                    <img src={`data:image/jpeg;base64,${imageData}`} class = {styles.image}/>
                </div>
                <iframe src={link} ></iframe>
            </div>
            <RoomList />
        </div> 
    )
    
}

export default HostelPage;