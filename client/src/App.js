import './App.css';
import Post from './post';
import Header from './Header'; 

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Post />
        <Post />
        <Post />
      </main>
    </div>
  );
}

export default App;
