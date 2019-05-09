import {withRouter} from 'next/router';

const UserInfo = withRouter((props) => (
  <div>
    <h2>User info page</h2>
    <h3>{props.router.query.login}</h3>
  </div>
));

export default UserInfo;