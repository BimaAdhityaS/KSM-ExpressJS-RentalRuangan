import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import AdminRooms from "./pages/admin/AdminRooms";
import AdminAddRoom from "./pages/admin/AdminAddRoom";
import AdminEditRoom from "./pages/admin/AdminEditRoom";
import AdminDetailRoom from "./pages/admin/AdminDetailRoom";
import UserRooms from "./pages/user-rooms/UserRooms";
import Homepage from "./pages/Homepage";
import DetailedRoom from "./pages/user-rooms/DetailedRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/dashboard" element={<Admin />} />
        <Route path="/admin/rooms" element={<AdminRooms />} />
        <Route path="/admin/rooms/addroom" element={<AdminAddRoom />} />
        <Route path="/admin/rooms/:id" element={<AdminEditRoom />} />
        <Route
          path="/admin/rooms/detailroom/:id"
          element={<AdminDetailRoom />}
        />

        {/* USER ROUTES */}
        <Route path="/" element={<Homepage />} />
        <Route path="/rooms" element={<UserRooms />} />
        <Route path="/rooms/detail" element={<DetailedRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
