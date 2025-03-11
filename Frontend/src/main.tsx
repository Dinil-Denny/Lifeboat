import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import { Provider } from 'react-redux';
import store,{persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react';

// user pages
import Home from './screens/userScreens/Home';
import Login from './screens/userScreens/Login';
import Register from './screens/userScreens/Register';

// admin pages
import AdminLogin from './screens/adminScreens/AdminLogin';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      {/* every child routes of route '/' comes here */}
      {/* home screen or index screen, that's why we give index={true} */}
      <Route index={true} path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

      {/* ------admin routes------ */}
      <Route path='/admin/login' element={<AdminLogin/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <PersistGate loading = {null} persistor={persistor}>
        <RouterProvider router={router}/>
      </PersistGate>
    </StrictMode>
  </Provider> 
)
