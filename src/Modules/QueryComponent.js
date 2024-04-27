import styles from './Queries.module.css';
import { useRef } from 'react';
import $ from 'jquery';

const QueryModule = (props) => {
    const replyMessage = useRef();
    const replyButton = useRef();
    const message = useRef();
    const messageLabel = useRef();
    const cancelButton = useRef();
    const deleteButton = useRef();

    function cancel () {
        replyMessage.current.style.display = 'none';
        replyButton.current.innerText = 'Reply';
        message.current.style.display = 'inline-flex';
        messageLabel.current.innerText = 'Message'
        cancelButton.current.style.display = 'none';
        deleteButton.current.style.display = 'inline-flex';
    }

    function reply () {
        if(replyButton.current.innerText == 'Send') {
            sendMessage();
            return;
        }
        else {
            replyMessage.current.style.display = 'inline flex';
            replyButton.current.innerText = 'Send';
            message.current.style.display = 'none';
            messageLabel.current.innerText = 'Reply';
            cancelButton.current.style.display = 'inline-flex';
            deleteButton.current.style.display = 'none';
        } 
    }

    function sendMessage() {

        $.ajax({
            url : 'handleQuery.php',
            type : 'POST',
            data : {
                'type' : 'send',
                'sender' : localStorage.getItem('token'),
                'reciever' : props.arr[0],
                'roomno' : props.arr[2],
                'floor' : props.arr[3],
                'message' : replyMessage.current.value
            },
            success (data) {
                console.log(data);
                message.current.style.display = 'inline-flex';
                cancelButton.current.style.display = 'none';
                replyMessage.current.style.display = 'none';
                replyButton.current.innerText = 'Sent';
                deleteButton.current.style.display = 'inline-flex';
            }
        });
    }

    function deleteFunction () {
        $.ajax({
            url : 'handleQuery.php',
            type : 'POST',
            data : {
                'type' : 'delete',
                'queryid' : props.arr[5]
            },
            success (data) {
                console.log(data);
                alert("Deleted successfully.");
                window.location.reload();
            }
        });
    }

    return (
        <div className = {styles.outbox}>
            <label className = {styles.labels}><strong>From: </strong>{props.arr[0]}</label>
            <label className = {styles.labels}><strong>Floor No. </strong>{props.arr[3]}</label>
            <label className = {styles.labels}><strong>Room No. </strong>{props.arr[2]}</label>
            <label className = {styles.labels} ref = {messageLabel}><strong>Message</strong></label>
            <p className = {styles.message} ref = {message}>{props.arr[4]}</p>
            <textarea className = {styles.textarea} ref = {replyMessage}/>
            <button className = {styles.reply} onClick = {reply} ref = {replyButton}>Reply</button>
            <button className = {styles.reply} onClick = {cancel} ref = {cancelButton} style = {{display : 'none'}}>Cancel</button>
            <button className = {styles.reply} onClick = {deleteFunction} ref = {deleteButton}>Delete</button>
        </div>
    )
}

export default QueryModule;