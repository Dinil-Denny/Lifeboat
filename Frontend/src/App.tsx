import './App.css';
import UserHeader from './components/userComponents/UserHeader';
import Home from './screens/userScreens/Home';
import AdminLogin from './screens/adminScreens/AdminLogin';
import Login from './screens/userScreens/Login';
import Register from './screens/userScreens/Register';

function App() {

  return (
    <>
      <UserHeader/>
      {/* <Home/> */}
      <Register/>
    </>
  )
}

export default App;
