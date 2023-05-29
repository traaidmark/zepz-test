
import './style.css';

import { UserModel } from '../../shared/models/UserModel';

import { useActions } from '../../hooks/useActions';

const UserComponent: React.FC<UserModel> = (props) => {

  const {blockUser, toggleFollow} = useActions();

  const blockedClass = props.isBlocked ? 'feature-user--blocked' : '';
  const followedClass = props.isFollowed ? 'feature-user--followed' : '';

  return (
    <article className={`feature-user ${blockedClass} ${followedClass}`}>
      <header>
        <img src={props.imgUrl} alt={props.name} />
      </header>
      <div>
        <h4>{props.name}</h4>
        <small>{props.reputation}</small>
      </div>
      <footer>
        <button onClick={() => toggleFollow(props.account_id)}>
          {props.isFollowed ? 'Unfollow' : 'Follow'}
        </button>
        <button onClick={() => blockUser(props.account_id)}>
        {props.isBlocked ? 'Unblock' : 'Block'}
        </button>
      </footer>
    </article>
  )
}

export default UserComponent;