import React, {useState} from 'react';
import Header from './component/header';
import Main from './component/main';
import './App.css';
import Container from '@material-ui/core/Container';
import CityContext from './component/context/cityContext';

function App() {

  const [cityIdState, setCityIdState] = useState('')

  const handleCityId = (id) => {
    setCityIdState(id)
  }

  // console.log(cityIdState);
  
  return (
    <>
      <CityContext.Provider value={cityIdState}>
        <Header cityId={handleCityId}/>
        <main>
          <Container maxWidth="xl">
            <Main cityId={cityIdState}/>
          </Container>
        </main>
      </CityContext.Provider>
    </>
   
    
  );
}

export default App;
