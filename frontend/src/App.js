import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import AdminRooms from "./pages/admin/AdminRooms";
import AdminAddRoom from "./pages/admin/AdminAddRoom";
import AdminEditRoom from "./pages/admin/AdminEditRoom";
import AdminDetailRoom from "./pages/admin/AdminDetailRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/dashboard" element={<Admin/>}/>
        <Route path="/admin/rooms" element={<AdminRooms/>}/>
        <Route path="/admin/rooms/addroom" element={<AdminAddRoom/>}/>
        <Route path="/admin/rooms/:id" element={<AdminEditRoom/>}/>
        <Route path="/admin/rooms/detailroom/:id" element={<AdminDetailRoom/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
