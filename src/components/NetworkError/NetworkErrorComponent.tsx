import { WifiIcon } from '@heroicons/react/24/outline';
import './style.css';
const NetworkErrorComponent: React.FC = () => {
  return (
    <aside className='feature-message'>
      <WifiIcon />
      <div>
        <h3>Oh No!</h3>
        <p>You are not currently connected to the internet. Please do so in order to behold the magic of this little application.</p>
      </div>
    </aside>
  )
}

export default NetworkErrorComponent;