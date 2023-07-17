import './App.css';
import Profile from './Profile/Profile';
import ProfileEdit from './Header/ProfileEdit'
import Feed from '../src/Feed/Feed'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/ProfileEdit" element={<ProfileEdit />} />
        <Route path="/Feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
