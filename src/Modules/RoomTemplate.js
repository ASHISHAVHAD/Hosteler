import styles from './RoomTemplate.module.css';
import image1 from '../hostelThumbnail.jpg';
import bookmark from './bookmark.png';
import add from './add.png';

const RoomTemplate = (props) => {

    return (
        <div className = {styles.outbox}>
            <div className = {styles.imagediv} >
                <img src = {image1} className = {styles.image} />
            </div>
            <div className = {styles.infoBlock} >
                <h3 className = {styles.title}>Rent Rs. {props.arr[2]}</h3>
                <p className = {styles.subtitle}>Room No. <strong>{props.arr[0]}</strong></p>
                <p className = {styles.subtitle}>Floor No. <strong>{props.arr[1]}</strong></p>
                <p className = {styles.subtitle}>Capacity <strong>{props.arr[3]}</strong></p>
                <p className = {styles.subtitle}>Available <strong>{parseInt(props.arr[3]) - (props.arr[4])}</strong></p>
            </div>
            <div className = {styles.buttonBlock} >
                <button className = {styles.button}>
                    <img src = {bookmark} className = {styles.bookmark}/>
                    Save
                </button>
                <button className = {styles.button}>
                    <img src = {add} className = {styles.bookmark}/>
                    Raise Query
                </button>
            </div>
        </div>
    )
}

export default RoomTemplate;