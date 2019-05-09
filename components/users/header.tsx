import '../../styles/global-styles.css';
const styles = require('./header.css');

export const Header = () => (
  <tr>
    <th className="blue-box">Avatar</th>
    <th className={styles.purpleBox}>Id</th>
    <th>Name</th>
  </tr>
)