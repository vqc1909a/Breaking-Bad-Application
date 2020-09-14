import React, {Fragment} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Characters from './components/Characters';
function App() {
  return (
    <Fragment>
      <Header title="Breaking Bad"></Header>
      <main>
        <Hero></Hero>
        <Characters title="Personajes"></Characters>
      </main>
    </Fragment>
  );
}

export default App;
