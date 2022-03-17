
import './App.css';
import Cake from './components/Cake/Cake.js';
import {cakes} from './data';

function App() {
  const cakeData = cakes.map(item => {
    return (
      <Cake
        key={item.id}
        title={item.title}
        imgSrc={item.imgSrc}
        category={item.category}
        alt={item.alt}
      />
    )
  })
  return (
    <div className="App">
      <h2 className="main-title" >What's the Occassion?</h2>
      <div className="cake-container">


        {cakeData}


      </div>


    </div>
  );
}

export default App;
