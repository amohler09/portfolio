import React from 'react';
import { Route, Switch } from 'react-router-dom'

import MainPage from './components/MainPage'
import Projects from './components/Projects'
import Resume from './components/Resume'

import styled  from 'styled-components'

const MainDiv = styled.div`
  margin: auto;
`;

function App() {
  
  return (
   <MainDiv>
    <Switch>
    <Route path='/projects' component={Projects}/>
    <Route path='/resume' component={Resume} />
    <Route path='/' component={MainPage} />
    <Route component={MainPage} />
    </Switch>
   </MainDiv>
  );
}

export default App;
