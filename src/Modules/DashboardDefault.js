import styles from './DashboardDefault.module.css';

const DashboardDefault = () => {
    const user = localStorage.getItem('token');

    return (
        <div className = {styles.body} >
            <h1 className = {styles.title}>Welcome Back, {user}</h1>
            <h2 className = {styles.subtitle}>Take a look at profile overview!</h2>
            <div className = {styles.grid}>
                <div className = {styles.newlyAdded}>
                    <h1 className = {styles.cardTitlewhite}>Latest Transactions</h1>
                    <table className = {styles.table}>
                        <header>
                            <th className = {styles.cellwhite}>Name</th>
                            <th className = {styles.cellwhite}>Amount</th>
                            <th className = {styles.cellwhite}>Floor</th>
                            <th className = {styles.cellwhite}>Room</th>
                            <th className = {styles.cellwhite}>Status</th>
                        </header>
                    </table>
                </div>
                <div className = {styles.hostelOverview}>
                    <h1 className = {styles.cardTitle}>Hostel Overview</h1>
                    <table className = {styles.table}>
                        <header>
                            <th className = {styles.cell}>Floor</th>
                            <th className = {styles.cell}>Room</th>
                            <th className = {styles.cell}>Rent</th>
                            <th className = {styles.cell}>Capacity</th>
                            <th className = {styles.cell}>Occupied</th>
                        </header>
                    </table>
                </div>
                <div className = {styles.areasOfInterest}>
                    <h1 className = {styles.cardTitlewhite}>Urgent Queries</h1>
                </div>
            </div>
        </div>
    )
}

export default DashboardDefault;