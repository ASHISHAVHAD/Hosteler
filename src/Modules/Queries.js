import styles from './Dashboard.module.css';
import $ from 'jquery';

const Queries = () => {
    return (
        <div className = {styles.dashboardTitleBlock} >
                <h1 className = {styles.dashboardTitle} >DASHBOARD</h1>
        </div>
    )
}

export default Queries;