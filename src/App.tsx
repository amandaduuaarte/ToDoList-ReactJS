import {GlobalStyle} from './style/globalStyle';
import {Header} from './components/Header/index';
import {Buttons} from './components/Buttons/index';
import {Task} from './components/Taks/index';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Buttons/>
    <Task/>
    </>
  );
}

export default App;
