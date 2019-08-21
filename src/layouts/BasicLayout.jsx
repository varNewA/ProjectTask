import styles from './index.css';
import Sider from '../components/Sider'

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      <div className={styles.cont}>
      <Sider/>
      <div className={styles.context}>
       {props.children}
      </div>

      </div>
      
    </div>
  );
}

export default BasicLayout;