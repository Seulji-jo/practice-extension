import {goTo} from 'react-chrome-extension-router';
import About from './About';

function Home () {
  return(
    <div>
      <h1>Home</h1>
      <button onClick={() => goTo(About)}>Go to About</button>
    </div>
  )
}

export default Home