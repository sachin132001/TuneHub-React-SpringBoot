import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CustomerHome from "./pages/CustomerHome"
import AdminHome from "./pages/AdminHome";
import AddSongs from "./pages/AddSongs";
import ViewSongs from "./pages/ViewSongs";
import CreatePlaylist from "./pages/CreatePlaylist";
import ViewPlaylists from "./pages/ViewPlaylists";
import Payment from "./pages/Payment"
import DisplaySongs from "./pages/DisplaySongs";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/map-register" element={<Register />}/>
            <Route path="/map-login" element={<Login />}/>
            <Route path="/customer" element={<CustomerHome />}/>
            <Route path="/admin" element={<AdminHome />}/>

            <Route path="/map-songs" element={<AddSongs />}/>
            <Route path="/map-viewsongs" element={<ViewSongs/>}/>
            <Route path="/createplaylist" element={<CreatePlaylist/>}/>
            <Route path="/viewPlaylists" element={<ViewPlaylists />}/>

            <Route path="/exploreSongs/:email" element={<Payment/>}/>
            <Route path="/explore" element={<Payment/>}/>
            <Route path="/displaySongs" element={<DisplaySongs />}/>



        </Routes>
    </BrowserRouter>
  );
}

export default App;
