import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Registers from './pages/Registers/Registers'


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import DemoUseState from './pages/Hook/demoUseState/DemoUseState';
import DemoUseEffect from './pages/Hook/DemoUseEffect/DemoUseEffect';
import DemoUseCallBack from './pages/Hook/DemoUseCallback/DemoUseCallBack';
import DemoUseMemo from './pages/Hook/DemoUseMemo/DemoUseMemo';
import DemoUseRef from './pages/Hook/DemoUseRef/DemoUseRef';
import TangGiamFS from './pages/Hook/ReduxHook/TangGiamFS';
import FacebookApp from './pages/Hook/ReduxHook/FacebookApp';
import ShoesShopAPI from './pages/API/ShoesShopAPI';



function App() {
  return (
    <BrowserRouter>
      <Header/>
    
      <Switch>
        {/* C1: Route = component */}
        {/* FIXME: Take note keyword 'exact' */}
        
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registers" component={Registers} />

        <Route exact path="/use-state" component={DemoUseState} />
        <Route exact path="/use-effect" component={DemoUseEffect} />
        <Route exact path="/use-call-back" component={DemoUseCallBack} />
        <Route exact path="/use-memo" component={DemoUseMemo} />
        <Route exact path="/use-ref" component={DemoUseRef} />

        <Route exact path="/tang-giam-fs" component={TangGiamFS} />
        <Route exact path="/facebook-app" component={FacebookApp} />

        <Route exact path="/shoes-shop-api" component={ShoesShopAPI} />

        {/* default route cuoi cung */}
        {/* <Route exact path="/" component={Home} /> */}

        {/* C2: Route => render
        !!!! TODO: Hoc chuyen sau o template
         */}
        <Route exact path="/" render={() => {
          // trả về UI mới có chứa component muốn hiển thị!
          return <div className='container'>
            <Home/>
          </div>
        }} />

      </Switch>
      
    </BrowserRouter>

  );
}

export default App;
