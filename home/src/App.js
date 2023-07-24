import './App.css';
//import Login from './Pages/Login/login'
import ProfileContainer from './Pages/Feed/ProfileContainer'
import InstagramFeed from './Pages/Feed/MainFeed/index';

function App() {
  return (
    <div className="App">
      <ProfileContainer />
      <InstagramFeed />
    </div>
  );
}

export default App;
