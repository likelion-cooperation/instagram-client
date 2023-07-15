import './App.css';
import Profile from './Profile/Profile';
import ProfileEdit from './Header/ProfileEdit'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/ProfileEdit" element={<ProfileEdit />} />
      </Routes>
    </div>
  );
}

export default App;
