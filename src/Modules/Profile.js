import styles from './Profile.module.css';
import $ from 'jquery';
import { useState } from 'react';

const Profile = () => {

    const [imageData, setImageData] = useState('');

    $.ajax({
        url: 'http://localhost/wt/imageGet.php',
        type: 'POST',
        data: { 'id' : localStorage.getItem('token') },
        success: function (response) {
            setImageData(response);
        },
        error: function (xhr, status, error) {
            console.error('Error retrieving image:', error);
            alert('Error retrieving image');
        }
    });

    $.ajax({
        url : "http://localhost/wt/dashboard.php",
        type : 'POST',
        data : {
            'type' : 'profile',
            'email' : localStorage.getItem('token'),
        },
        success(data) {
            console.log(data);
            const returned = JSON.parse(data);
            document.getElementById('hostelName').value = returned["hostelName"];
            document.getElementById('address').value = returned["address"];
            document.getElementById('email').value = localStorage.getItem('token');
            document.getElementById('mobile').value = returned["mobile"];
            document.getElementById('latitude').value = returned["latitude"];
            document.getElementById('longitude').value = returned["longitude"];
        }
    })

    function updateProfile() {
        $.ajax({
            url : "http://localhost/wt/dashboard.php",
            type : 'POST',
            data : {
                'type' : 'profileUpdate',
                'email' : localStorage.getItem('token'),
                'hostelName' : document.getElementById('hostelName').value,
                'address' : document.getElementById('address').value,
                'mobile' : document.getElementById('mobile').value,
                'latitude' : document.getElementById('latitude').value,
                'longitude' : document.getElementById('longitude').value
            },
            success(data) {
                console.log(data);
            }
        })
    }

    function changeImage() {

        const formData = new FormData();
        formData.append('image', document.getElementById('newImage').files[0]);
        formData.append('type', 'imageUpdate');
        formData.append('email', localStorage.getItem('token'));
        $.ajax({
            type : 'POST',
            url : 'http://localhost/wt/dashboard.php',
            data : formData,
            contentType: false,
            processData: false,
            success (data) {
                console.log(data);
                if(data == 'true') {
                    window.location.reload();
                }
            }
        })
    }

    return (
        <div className = {styles.body}>
            <h1 className = {styles.title}>Edit Profile</h1>
            <div className = {styles.grid}>
                <div className = {styles.addRoomForm}>
                    <h1 className = {styles.addRoomTitle}>Profile</h1>
                    <label className = {styles.inputLabel}>Hostel Name</label>
                    <input type = "text" className = {styles.inputField} id = "hostelName"/>
                    <label className = {styles.inputLabel}>Address</label>
                    <input type = "text" className = {styles.inputField} id = "address"/>
                    <label className = {styles.inputLabel}>Mobile Number</label>
                    <input type = "text" className = {styles.inputField} id = "mobile"/>
                    <label className = {styles.inputLabel}>Email</label>
                    <input type = "text" className = {styles.inputField} id = "email" disabled/>
                    <label className = {styles.inputLabel}><strong>Location</strong></label>
                    <label className = {styles.inputLabel}>Latitude</label>
                    <input type = "text" className = {styles.inputField} id = "latitude"/>
                    <label className = {styles.inputLabel}>Longitude</label>
                    <input type = "text" className = {styles.inputField} id = "longitude"/>
                    <button className = {styles.addRoomButton} onClick = {updateProfile}>Update Information</button>
                </div>
                    
                <div className = {styles.addRoomForm} >
                    <h1 className = {styles.addRoomTitle}>Hostel Image</h1>
                    <img src={`data:image/jpeg;base64,${imageData}`} class = {styles.image}/>
                    <input type = "file" accept='image/*' className = {styles.inputField} id = "newImage"/>
                    <button className = {styles.addRoomButton} onClick = {changeImage}>Change Image</button>
                </div>
            </div>
            
        </div>
    )
}

export default Profile;