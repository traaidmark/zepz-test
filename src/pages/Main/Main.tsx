import {useEffect} from 'react';


import { useActions } from '../../hooks/useActions';
import { useSelector } from '../../hooks/useSelector';


import UserList from '../../components/UserList/UserListComponent';
import Loader from '../../components/Loader/LoaderComponent';


import './style.css';


const IndexPage: React.FC = () => {

  const {data, error, loading} = useSelector((state) => state.repositories);
  const {fetchUsers} = useActions();

  useEffect(() => {
    if (data.length === 0 && !loading && !error) {
      console.log('no data, has to fetch!');
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
    <main className='page'>
      <h1>hello world</h1>
      <button onClick={fetchUsers}>fetch users</button>
      {data.map(i => <p>{i.name}</p>)}
    </main>
  )
}

export default IndexPage;