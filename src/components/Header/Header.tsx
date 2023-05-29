import './style.css';
const HeaderComponent: React.FC = () => {
  return (
    <aside className='feature-sidebar'>
      <header>
        <img src="/favicon.png" alt="dot" />
        <h2>Hello, <strong>Zepz</strong>!</h2>
        <p>These are the top 20 users from Stack overflow!</p>
      </header>
    </aside>
  )
};

export default HeaderComponent;