import styles from './RoomTemplate.module.css';
import image1 from '../hostelThumbnail.jpg';
import bookmark from './bookmark.png';
import add from './add.png';
import { useState, useRef, createElement } from 'react';
import $, { data } from 'jquery';

const RoomTemplate = (props) => {

    const [imageData, setImageData] = useState('');
    const textArea = useRef();
    const query = useRef();
    const cancel = useRef();
    const send = useRef();
    const saveButton = useRef();

    $.ajax({
        url: 'roomImage.php',
        type: 'POST',
        data: { 'roomid' : props.arr[5] },
        success: function (response) {
            setImageData(response);
        },
        error: function (xhr, status, error) {
            
        }
    });

    function sendQuery() {
        if(localStorage.getItem('user') == null) {
            window.location.href = "/nav/userLogin";
        }
        textArea.current.style.display = 'inline-flex';
        query.current.style.display = 'none';
        send.current.style.display = 'inline-flex';
        cancel.current.style.display = 'inline-flex';
    } 

    function cancelFunction() {
        textArea.current.style.display = 'none';
        query.current.style.display = 'inline-flex';
        cancel.current.style.display = 'none';
        send.current.style.display = 'none';
    }

    function sendMessage() {
        const reciever = window.location.href.split('/')[5];

        $.ajax({
            url : 'handleQuery.php',
            type : 'POST',
            data : {
                'type' : 'send',
                'sender' : localStorage.getItem('user'),
                'reciever' : reciever,
                'roomno' : props.arr[0],
                'floor' : props.arr[1],
                'message' : textArea.current.value
            },
            success (data) {
                console.log(data);
                textArea.current.style.display = 'none';
                query.current.style.display = 'inline-flex';
                cancel.current.style.display = 'none';
                send.current.style.display = 'none';
                query.current.innerText = 'Sent';
            }
        });
    }

    function save() {
        if(localStorage.getItem('user') == null) {
            window.location.href = "/nav/userLogin";
        }
        
        $.ajax({
            url: 'handleQuery.php',
            type: 'POST',
            data: { 
                'type' : 'save',
                'email' : localStorage.getItem('user'),
                'roomid' : props.arr[5] 
            },
            success: function (response) {
                if(response == 'true') {
                    saveButton.current.innerText = 'Saved';
                }
            },
            error: function (xhr, status, error) {
            }
        });
    }

    return (
        <div className = {styles.outbox}>
            <div className = {styles.imagediv} >
                <img src = {`data:image/jpeg;base64,${imageData}`} className = {styles.image} />
            </div>
            <div className = {styles.infoBlock} >
                <h3 className = {styles.title}>Rent Rs. {props.arr[2]}</h3>
                <p className = {styles.subtitle}>Room No. <strong>{props.arr[0]}</strong></p>
                <p className = {styles.subtitle}>Floor No. <strong>{props.arr[1]}</strong></p>
                <p className = {styles.subtitle}>Capacity <strong>{props.arr[3]}</strong></p>
                <p className = {styles.subtitle}>Available <strong>{parseInt(props.arr[3]) - (props.arr[4])}</strong></p>
            </div>
            <div className = {styles.buttonBlock} >
                <button className = {styles.button} onClick = {save} ref = {saveButton}>
                    <img src = {bookmark} className = {styles.bookmark}/>
                    Save
                </button>
                <button className = {styles.button} ref = {query} onClick={sendQuery}>
                    <img src = {add} className = {styles.bookmark}/>
                    Raise Query
                </button>
                <button className = {styles.button} ref = {send} onClick={sendMessage} style = {{display: 'none'}}>
                    Send
                </button>
                <button className = {styles.button} ref = {cancel} onClick={cancelFunction} style = {{display: 'none'}}>
                    Cancel
                </button>
                <textarea className = {styles.textarea} ref = {textArea}/>
            </div>
        </div>
    )
}

export default RoomTemplate;