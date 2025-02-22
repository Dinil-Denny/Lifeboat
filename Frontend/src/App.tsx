import './App.css';
import UserHeader from './components/userComponents/UserHeader';
import Home from './screens/userScreens/Home';
import Footer from './components/userComponents/Footer';
import ResetPassword from './screens/userScreens/ResetPassword';

function App() {

  return (
    <>
      <UserHeader/>
      <ResetPassword/>
      {/* <Home/> */}
      {/* <Footer/> */}
    </>
  )
}

export default App;
