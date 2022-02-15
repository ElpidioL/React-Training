//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPages from './pages/Favorites';
import Layout from "./components/Layouts/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage/>} exact />
        <Route path="/NewMeetUp" element={<NewMeetupsPage/>} exact />
        <Route path="/Favorites" element={<FavoritesPages/>} exact />
      </Routes>
    </Layout> 
  );
}

export default App;

