import React,{useContext} from 'react';
import './App.css';
import Content from '../component/Layout/Content';
import WeatherPage from '../page/WeatherPage';
import WeatherContext from '../context/context';
import LoadingPage from '../page/LoadingPage'
import SearchPage from '../page/SearchPage';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

function App() {
  const { weather, location, time, loading} = useContext(WeatherContext);

  return (
    <div className="App">
      <Router>
      {(weather && location && time && !loading) ?
          <>
            <Routes>
            <Route path="/" element={<WeatherPage/>} />
            <Route path="/search" element={<SearchPage/>}/>
          </Routes>
          <Content />
          </>
         :  
        <LoadingPage />
      }
      </Router>
    </div>
  );
}

export default App;




