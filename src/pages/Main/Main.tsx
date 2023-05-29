
import HeaderComponent from '../../components/Header/Header';
import UserList from '../../components/UserList/UserListComponent';


import './style.css';


const IndexPage: React.FC = () => {

  

  return (
    <main className='page'>
      <HeaderComponent />
      <section className='page__body'>
        <UserList />
      </section>
      
    </main>
  )
}

export default IndexPage;