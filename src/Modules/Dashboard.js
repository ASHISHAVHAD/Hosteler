import styles from './Dashboard.module.css';
import { useState } from 'react';
import $ from 'jquery';

const Dashboard = () => {

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

    function addRoom() {
        let roomFloor = document.getElementById('roomFloor');
        let roomno = document.getElementById('roomNo');
        let rent = document.getElementById('rent');
        let capacity = document.getElementById('capacity');
        let occupied = document.getElementById('occupied');
        let roomImage = document.getElementById('roomImage');
        const formData = new FormData();
        formData.append('type', 'addRoom');
        formData.append('roomFloor', roomFloor.value);
        formData.append('roomno', roomno.value);
        formData.append('rent', rent.value);
        formData.append('occupied', occupied.value);
        formData.append('capacity', capacity.value);
        formData.append('image', roomImage.files[0]);
        formData.append('email', localStorage.getItem('token'));

        $.ajax({
            type : 'POST',
            url : 'http://localhost/wt/dashboard.php',
            data : formData,
            contentType: false,
            processData: false,
            success (data) {
                var x = window.confirm("Added successfully")
                if(x) {
                    window.location.reload();
                }
            }
        })
    }


    return (
        <div class = {styles.body}>
            <div className = {styles.dashboardTitleBlock} >
                <h1 className = {styles.dashboardTitle} >DASHBOARD</h1>
            </div>
            <div>
                <div className = {styles.addRoomForm}>
                    <h1 className = {styles.addRoomTitle}>Queries</h1>
                </div>
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
                    <label className = {styles.inputLabel}>Location</label>
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

                <div className = {styles.addRoomForm}>
                    <h1 className = {styles.addRoomTitle}>Add Room</h1>
                    <label className = {styles.inputLabel}>Floor Number</label>
                    <input type = "text" className = {styles.inputField} id = "roomFloor"/>
                    <label className = {styles.inputLabel}>Room Number</label>
                    <input type = "text" className = {styles.inputField} id = "roomNo"/>
                    <label className = {styles.inputLabel}>Total Rent</label>
                    <input type = "text" className = {styles.inputField} id = "rent"/>
                    <label className = {styles.inputLabel}>Capacity&#40;Total persons that can stay&#41;</label>
                    <input type = "text" className = {styles.inputField} id = "capacity"/>
                    <label className = {styles.inputLabel}>Currently Occupied&#40;Persons currently staying&#41;</label>
                    <input type = "text" className = {styles.inputField} id = "occupied"/>
                    <label className = {styles.inputLabel}>Image</label>
                    <input type = "file" accept='image/*' className = {styles.inputField} id = "roomImage"/>
                    <button className = {styles.addRoomButton} onClick={addRoom}>Confirm & Add</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;