import './App.css';
import newJeans from '../src/assets/newjeans_21.jpg'
function App() {
  return (
    
    <div>
      <header>
        <p>
          NewJeans Fanpage
        </p>
        <p>
          Members
        </p>
        <p>
          Mascot
        </p>
        <p>
          Discography
        </p>

      </header>
      <div>
      <img src = {newJeans} />
      </div>
    </div>


  );
}

export default App;
