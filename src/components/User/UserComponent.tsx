import { NoSymbolIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import './style.css';

import { UserModel } from '../../shared/models/UserModel';

import { useActions } from '../../hooks/useActions';

const UserComponent: React.FC<UserModel> = (props) => {

  const [drawerActive, setDrawer] = useState(false);

  const {blockUser, toggleFollow} = useActions();

  const handleDrawer = () => {
    if(props.isBlocked) {
      return setDrawer(false);
    }
    return drawerActive ? setDrawer(false) : setDrawer(true);
  }

  const blockedClass = props.isBlocked ? 'feature-user--blocked' : '';
  const followedClass = props.isFollowed ? 'feature-user--followed' : '';
  const drawerClass = drawerActive ? 'feature-user--active-drawer' : '';

  return (
    <article className={`feature-user ${drawerClass} ${blockedClass} ${followedClass}`} onClick={() => handleDrawer()}>
      
      <header className='feature-user__header'>
        <h4>{props.name}</h4>
        <small>{props.reputation}</small>
      </header>
      <div className='feature-user__info'>
        <img src={props.imgUrl} alt={props.name} />
        {
          (props.isBlocked || props.isFollowed) && (
            <figure className="feature-user__flag">
              {props.isBlocked && <NoSymbolIcon /> }
              {props.isFollowed && <HeartIcon /> }
            </figure>
          )
        }
        <nav className='feature-user__nav'>
          {!props.isBlocked ? (
            <button onClick={() => toggleFollow(props.account_id)}>
              <HeartIcon />
              {props.isFollowed ? 'Unfollow' : 'Follow'}
            </button>
          ) : <span></span> }
          <button onClick={() => blockUser(props.account_id)}>
          <NoSymbolIcon />
          {props.isBlocked ? 'Unblock' : 'Block'}
          </button>
        </nav>
      </div>
      
    </article>
  )
}

export default UserComponent;