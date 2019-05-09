import * as Next from 'next';
import { User } from '../../model/user';
import Link from 'next/link';

interface Props {
  user: User;
}

export const Row: Next.NextFunctionComponent<Props> = (props) => (
  <tr>
    <td>
      <img src={props.user.avatar_url} style={{ maxWidth: '10rem' }} />
    </td>
    <td>
      <span>{props.user.id}</span>
    </td>
    <td>
      <Link href={`/user-info?login=${props.user.login}`}
       as={`/user-info/login/${props.user.login}`}>
      <a>{props.user.login}</a>
      </Link>
    </td>
  </tr>
)
