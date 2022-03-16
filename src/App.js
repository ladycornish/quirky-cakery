
import './App.css';
import Cake from './components/Cake/Cake.js';
import data from './data';

function App() {
  const cakeData = data.map(item => {
    return (
      <Cake
        key={item.id}
        title={item.title}
        imgSrc={item.imgSrc}
        description={item.description}
        alt={item.alt}


      />
    )
  })
  return (
    <div className="App">
      <h2 className="main-title" >Meet the Cakes!</h2>
      <div className="cake-container">


        {cakeData}


      </div>


    </div>
  );
}

export default App;
