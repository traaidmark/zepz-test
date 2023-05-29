
import './style.css';

import { UserModel } from '../../shared/models/UserModel';

const UserComponent: React.FC<UserModel> = (props) => {

  return (
    <article className='feature-user'>
      <header>
        <img src={props.imgUrl} alt={props.name} />
      </header>
      <div>
        <h4>{props.name}</h4>
        <small>{props.reputation}</small>
      </div>
      <footer>
        <button>Follow</button>
        <button>Block</button>
      </footer>
    </article>
  )
}

export default UserComponent;