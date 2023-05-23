import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Font from '../src/font/stylesheet.css';
import Header from "./components/link/header";


function App() {
  return (
      <BrowserRouter>
          <Header/>
        <AppRouter />
      </BrowserRouter>
  )
}

export default App;
