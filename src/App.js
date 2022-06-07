import React from 'react';
import './sass/style.scss';
import ComponentNav from './components/ComponentNav';
import ComponentCard from './components/ComponentCard';
import Container from 'react-bootstrap/esm/Container';
import ComponentBox from './components/ComponentBox';
import ComponentFooter from './components/ComponentFooter';


function App() {
  return (
    <div>
      <header>
          <ComponentNav />
      </header>
      <main>
        <Container id="work" fluid="lg" className="pt-md-5 pt-4 px-0">
            <ComponentBox />
        </Container>
        <Container id="about" className="pt-6 mt-4 px-0">
            <ComponentCard header="About me"
                           contentShort="At the age of thirty i decided i needed a change of careers. Always having my hands on anything 
                           creative or swamped up in any kind of puzzle,
                           working with web development was a natural choice for me."
                           border="fullborder border-gray deg0"
                           border3="bigborder border-primary deg-7"
                           border4="biggerborder border-black deg-18"/>
        </Container>
      </main>
      <ComponentFooter></ComponentFooter>
    </div>
  );
}

export default App;
