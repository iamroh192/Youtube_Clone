import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './config/appStore';


function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <Outlet />
      </div>
    </Provider>
  );
}



export default App;

/**
 *Head
 Body
  sideBar
    Menu
  MainBar
  Header
   Buttonlist
   Video Container
    videoCard
 */
