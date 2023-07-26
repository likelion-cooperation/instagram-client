import './App.css';
import Profile from './Profile/Profile';
import ProfileEdit from './Header/ProfileEdit'
import SignUp from './SignUp/SignUp'
import { Route, Routes } from 'react-router-dom';
import Feed from './Pages/Feed/Feed';
import Login from './Login/login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ProfileEdit" element={<ProfileEdit />} />
        <Route path="/Feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
