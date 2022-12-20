import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Login from './components/Login/Login';
import Home from './pages/Home/Home';
import SearchMoviesList from './pages/searchMoviesListPage/SearchMoviesList';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/searchMovies",
    element: <SearchMoviesList />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
