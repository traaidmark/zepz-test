import {useEffect} from 'react';


import { useActions } from '../../hooks/useActions';
import { useSelector } from '../../hooks/useSelector';


import User from '../../components/User/UserComponent';
import Loader from '../../components/Loader/LoaderComponent';

import './style.css';

const UserList: React.FC = () => {
  
  const {data, error, loading} = useSelector((state) => state.repositories);
  const {fetchUsers} = useActions();

  useEffect(() => {
    if (data.length === 0 && !loading && !error) {
      fetchUsers();
    }
  }, [data,loading,error]);


  if(loading) {
    return <p>I am loading!</p>;
  }

  if(error) {
    return <p>Something isn't right sir!</p>;
  }

  return (
    <div className='feature-user-list'>
      {
        data.map((i) => (
          <User 
            name={i.name}
            imgUrl={i.imgUrl}
            reputation={i.reputation} 
            isBlocked={i.isBlocked}
            isFollowed={i.isFollowed} 
          />
        ))
      }
    </div>
  );
}

export default UserList;