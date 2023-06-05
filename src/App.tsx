import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import WishlistTable from "./components/Wishlist/WishlistTable/WishlistTable";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<WishlistTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
