import styles from './Register.module.css';
import ContactImage from './ContactImage.jpg';

const Contact = () => {
    return (
        <div className = {styles.body}>
            <img src = {ContactImage} className = {styles.RegisterImage}/>
            <div className = {styles.outbox}>
                <h1 className = {styles.title}>Contact</h1>
                <label className = {styles.labels}>Name</label>
                <input type = "text" className = {styles.inputField} />
                <label className = {styles.labels}>Mobile Number</label>
                <input type = "text" className = {styles.inputField} />
                <label className = {styles.labels}>Email</label>
                <input type = "email" className = {styles.inputField} />
                <label className = {styles.labels}>Message / Query</label>
                <textarea className = {styles.inputField}/>
                <button className = {styles.send}>Send Message</button>
            </div>
        </div>
    )
}

export default Contact;