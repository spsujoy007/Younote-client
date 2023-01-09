import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { routes } from './Router/Routes';

function App() {
  return (
    <div data-theme='noteTheme'>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
