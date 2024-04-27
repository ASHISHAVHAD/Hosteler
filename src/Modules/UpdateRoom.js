import styles from './Profile.module.css';
import $ from 'jquery';
import { useState } from 'react';
import { useRef } from 'react';

const UpdateRoom = (props) => {

    const [imageData, setImageData] = useState('');

    const roomFloor1 = useRef();
    const roomno1 = useRef();
    const rent1 = useRef();
    const capacity1 = useRef();
    const occupied1 = useRef();
    const roomImage1 = useRef();

    $.ajax({
        url: 'roomImage.php',
        type: 'POST',
        data: { 'roomid' : props.arr[5] },
        success: function (response) {
            setImageData(response);
        },
        error: function (xhr, status, error) {
            console.error('Error retrieving image:', error);
            alert('Error retrieving image');
        }
    });

    function updateRoom() {
        let roomFloor = roomFloor1.current;
        let roomno = roomno1.current;
        let rent = rent1.current;
        let capacity = capacity1.current;
        let occupied = occupied1.current;
        let roomImage = roomImage1.current;
        const formData = new FormData();
        formData.append('type', 'updateRoom');
        formData.append('roomFloor', roomFloor.value);
        formData.append('roomno', roomno.value);
        formData.append('rent', rent.value);
        formData.append('occupied', occupied.value);
        formData.append('capacity', capacity.value);
        if(roomImage.files.length == 0) {
            formData.append('image', 'false');
        }
        else {
            formData.append('image', roomImage.files[0]);
        }
        formData.append('email', localStorage.getItem('token'));
        formData.append('roomid', props.arr[5]);

        $.ajax({
            type : 'POST',
            url : 'dashboard.php',
            data : formData,
            contentType: false,
            processData: false,
            success (data) {
                console.log(data);
                var x = window.confirm("Updated successfully")
                if(x) {
                    window.location.reload();
                }
            }
        })
    }
    
    return (
        <div className = {styles.updateRoomForm}>
            <h1 className = {styles.addRoomTitle}>Room ID: {props.arr[5]}</h1>
            <label className = {styles.inputLabel}>Floor Number</label>
            <input type = "text" className = {styles.inputField} id = "roomFloor" ref = {roomFloor1} defaultValue = {props.arr[1]}/>
            <label className = {styles.inputLabel}>Room Number</label>
            <input type = "text" className = {styles.inputField} id = "roomNo" ref = {roomno1} defaultValue = {props.arr[0]}/>
            <label className = {styles.inputLabel}>Total Rent</label>
            <input type = "text" className = {styles.inputField} id = "rent" ref = {rent1} defaultValue = {props.arr[2]}/>
            <label className = {styles.inputLabel}>Capacity&#40;Total persons that can stay&#41;</label>
            <input type = "text" className = {styles.inputField} id = "capacity" ref = {capacity1} defaultValue = {props.arr[3]}/>
            <label className = {styles.inputLabel}>Currently Occupied&#40;Persons currently staying&#41;</label>
            <input type = "text" className = {styles.inputField} id = "occupied" ref = {occupied1} defaultValue = {props.arr[4]}/>
            <label className = {styles.inputLabel}>Image</label>
            <input type = "file" accept='image/*' className = {styles.inputField} id = "roomImage" ref = {roomImage1}/>
            <div className = {styles.roomImage} >
                <img src = {`data:image/jpeg;base64,${imageData}`} className = {styles.image} />
            </div>
            <button className = {styles.addRoomButton} onClick={updateRoom}>Update</button>
        </div>
    ) 
    
}

export default UpdateRoom;