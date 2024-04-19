import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import logo from './hostel.png';
import twitter from './twitter.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';

const Home = () => {

    function toInfo() {
        document.getElementById("whyPanel").scrollIntoView({behavior: 'smooth'});
    }

    function toRegister() {
        document.getElementById("whyPanel").scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className = {styles.body}>
            <div className = {styles.navbar}>
                <img src = {logo} className = {styles.logo}/>
                <h1 className = {styles.logoText}>HosteLife</h1>
                <p className = {styles.why} onClick={toInfo}>Why HosteLife?</p>
                <Link to = "/nav/login" className = {styles.login}>Login</Link>
                <h1 className = {styles.register} onClick = {toRegister}>Get Started</h1>
            </div>

            <div className = {styles.welcomeBox}>
                <div className = {styles.welcomeText}>
                    <h1>Find The Perfect Hostel</h1>
                    <p className = {styles.welcomePara}>Learn all about how to implement font using the API CSS code. A web font is any font used in a website’s design that isn’t installed by default on the end user’s device—a counterpart to a system font. Check out the articles below for more guidance:</p>
                </div>
                <img />
            </div>

            <div className = {styles.info} id = "whyPanel">
                <div className = {styles.forStudents}>
                    <h1 className = {styles.infoTitle}>Students</h1>
                    <h2 className = {styles.infoSubTitle}>Discover</h2>
                    <p className = {styles.infoText}>Find hostels near to you.</p>
                    <h2 className = {styles.infoSubTitle}>Pricing & Accomodation</h2>
                    <p className = {styles.infoText}>Check out rent costs and rooms at home.</p>
                    <h2 className = {styles.infoSubTitle}>Trusted</h2>
                    <p className = {styles.infoText}>Only verified hostels are listed.</p>
                    <Link to = "/nav/register" className = {styles.infoButton}>Register as Student</Link>
                </div>
                <div className = {styles.forStudents}>
                <h1 className = {styles.infoTitle}>Hostels</h1>
                    <h2 className = {styles.infoSubTitle}>Become Visible</h2>
                    <p className = {styles.infoText}>Get noticed by potential customers to increase reach.</p>
                    <h2 className = {styles.infoSubTitle}>Showcase</h2>
                    <p className = {styles.infoText}>An amazing platform to showcase your facilities.</p>
                    <h2 className = {styles.infoSubTitle}>Uniformity</h2>
                    <p className = {styles.infoText}>Compare your pricing with cometition for keeping it uniform.</p>
                    <Link to = "/nav/register" className = {styles.infoButton}>Register as Hostel</Link>
                </div>
            </div>

            <footer className = {styles.footer}>
                <div className ={styles.footerContent}>
                    <h3 className = {styles.footerTitle}>Socials</h3>
                    <ul className = {styles.footerLinks}>
                        <li>
                            <a href="http://twitter.com">
                                <img src = {twitter} className = {styles.socialImages}/>
                            </a>
                        </li>
                        <li>
                            <a href="http://instagram.com">
                                <img src = {instagram} className = {styles.socialImages}/>
                            </a>
                        </li>
                        <li>
                            <a href="http://linkedin.com">
                                <img src = {linkedin} className = {styles.socialImages}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Home;
