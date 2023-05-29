
import HeaderComponent from '../../components/Header/Header';
import UserList from '../../components/UserList/UserListComponent';
import NetworkErrorComponent from '../../components/NetworkError/NetworkErrorComponent';
import {useConnection} from '../../hooks/useConnection';

import './style.css';


const IndexPage: React.FC = () => {

  const {isConnected} = useConnection();

  return (
    <main className='page'>
      <HeaderComponent />
      <section className='page__body'>
        { isConnected ? <UserList /> : <NetworkErrorComponent />}
      </section>
      
    </main>
  )
}

export default IndexPage;