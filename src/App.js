import Main from "./page/Main";
// import Login from "./page/Login";
import './style/globalStyle.css';
import Header from './components/Header';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
