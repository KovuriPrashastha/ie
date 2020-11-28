import './App.css';
import Top from './Top.js';
import Header from './Header';
import Board from './Board.js';
import Slideshow from './Slideshow.js';

function App() {
  return (
    <div className='App'>
      <Top />
      <Header />
      <Slideshow />
      <Board />
    </div>
  );
}

export default App;
