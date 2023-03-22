import './App.css';
import Post from './post';
import Header from './Header';
import { Routes, Route } from "react-router-dom"
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={
          <Post />
        } />
        <Route path={"/login"} element={
          <div>Login page</div>
        } />
      </Route>
    </Routes>
  );
}

export default App;
