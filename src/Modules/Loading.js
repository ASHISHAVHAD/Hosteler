import styles from './Loading.module.css';

const Loading = () => {
    function reload() {
        window.location.reload();
    }

    return (
        <div className = {styles.body}>
            <div className = {styles.loader}>
                
            </div>
            Taking Too Long? Click <u onClick = {reload} className = {styles.text}>here</u> to reload.
        </div>
    )
}

export default Loading;
