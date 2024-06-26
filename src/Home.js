import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import logo from './hostel.png';
import twitter from './twitter.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import arrow from './right-arrow.png';

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
                <Link to = "/nav/userLogin" className = {styles.login}>Login</Link>
                <h1 className = {styles.register} onClick = {toRegister}>Get Started</h1>
            </div>

            <div className = {styles.welcomeBox}>
                <div className = {styles.welcomeText}>
                    <h1 className = {styles.title}>Find The Perfect Hostel</h1>
                    <Link to = "/nav/hostels" className = {styles.welcomePara}>
                        Explore
                        <img src = {arrow} className = {styles.arrow} />
                    </Link>
                </div>
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
                    <Link to = "/nav/userRegister" className = {styles.infoButton}>Register as Student</Link>
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
                    <a href="http://twitter.com">
                        <img src = {twitter} className = {styles.socialImages}/>
                    </a>

                    <a href="http://instagram.com">
                        <img src = {instagram} className = {styles.socialImages}/>
                    </a>

                    <a href="http://linkedin.com">
                        <img src = {linkedin} className = {styles.socialImages}/>
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Home;
