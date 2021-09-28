import Sidenavbar from "./Sidenavbar";
import {Route} from 'react-router-dom';
import Topbar from "./Topbar";
import Body from './Body';
import Management from './Management';

function App() {
  return (
    <div className="App">
      <Sidenavbar/>
      <Route path="/Access-Control" exact>
        <Topbar/>
        <Body/>
      </Route>
      <Route path="/Access-Control/Management-Team" exact>
        <Topbar/>
        <Management/>
      </Route>

    </div>
  );
}

export default App;
