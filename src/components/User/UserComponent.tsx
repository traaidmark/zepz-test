
import './style.css';

import { UserModel } from '../../shared/models/UserModel';

import { useActions } from '../../hooks/useActions';

const UserComponent: React.FC<UserModel> = (props) => {

  const {blockUser} = useActions();

  const blockedClass = props.isBlocked ? 'feature-user--blocked' : '';

  return (
    <article className={`feature-user ${blockedClass}`}>
      <header>
        <img src={props.imgUrl} alt={props.name} />
      </header>
      <div>
        <h4>{props.name}</h4>
        <small>{props.reputation}</small>
        <small>{props.isBlocked}</small>
      </div>
      <footer>
        <button>Follow</button>
        <button onClick={() => blockUser(props.account_id)}>Block</button>
      </footer>
    </article>
  )
}

export default UserComponent;