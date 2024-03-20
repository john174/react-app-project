import './App.css';
import Footer from './comps/Footer';
import MyRouter from './MyRouter';




function App() {
  return (
    <div className="component-background">
        <div className="App">
          <MyRouter/>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
