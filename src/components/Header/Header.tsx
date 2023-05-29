import './style.css';
const HeaderComponent: React.FC = () => {
  return (
    <header className='feature-header'>
      <div>
        <img src="/favicon.png" alt="dot" />
        <h1>Hello, <strong>Zepz</strong>!</h1>
        <p>These are the top 20 users from Stack overflow! It works through React & Redux and was a fun thing to build</p>
      </div>
    </header>
  )
};

export default HeaderComponent;