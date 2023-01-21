import Navbar from "../../components/navbar";
import "./index.css";

const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
