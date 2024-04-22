import styles from './Profile.module.css';
import $ from 'jquery';

const addRoom = () => {

    function addRoom1() {
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
                console.log(data);
                var x = window.confirm("Added successfully")
                if(x) {
                    window.location.reload();
                }
            }
        })
    }

    return (
        <div className = {styles.body}>
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
                <button className = {styles.addRoomButton} onClick={addRoom1}>Confirm & Add</button>
            </div>
        </div>
        
    )
}

export default addRoom;