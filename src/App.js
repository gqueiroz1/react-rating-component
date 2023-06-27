import { useState } from 'react';
import './App.css';
import Rating from './Rating';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [externalRating, setExternalRating] = useState(0)

  return (
    <div className="App" style={{ backgroundColor: '#f2f2f2', padding: '30px', maxWidth: '50%', margin: 'auto' }}>
      <h1>Rating Component</h1>
      <p>Fully customizable Rating Component to rate all your projects!</p>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <Rating maxRating={5} inactiveIcon={faStar} activeIcon={faStarSolid} color="#b5af01" size="lg" onRated={setExternalRating}/>
      </div>
      <div style={{ marginTop: '12px', fontSize: '12px' }}>The External Rating is {externalRating}</div>
    </div>
  );
}

export default App;
