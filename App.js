import "./App.css";
import { Outlet } from "react-router-dom";
import Hednavbar from "./component/navbar";

function App() {
  return (
    <>
      <div className="d-flex align-items-center ms-3">
        <img
          src="https://images.shiksha.com/mediadata/images/1653286178phpXPRlva.jpeg"
          width={60}
          height={60}
        ></img>
        <h2 className="ms-2">Darshan University</h2>
      </div>
      <div className="position-sticky sticky-top">
        <Hednavbar />
      </div>
      <div className="mt-3 mx-5">
        <Outlet />
      </div>
    </>
  );
}

export default App;
