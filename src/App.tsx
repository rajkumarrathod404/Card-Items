import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Card from "./Card";
function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              Latest News
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  News Categories
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="One">
                    One
                  </Link>

                  <Link className="dropdown-item" to="Two">
                    Two
                  </Link>

                  <Link className="dropdown-item" to="Three">
                    Three
                  </Link>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <Routes>
          <Route path="/"></Route>
          <Route path="one" element={<One />}></Route>
          <Route path="two" element={<Two />}></Route>
          <Route path="Three" element={<Three />}></Route>
        </Routes>
      </Router>
      {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
      <div className="container my-4">
        <div className="row mx-5">
          {/* <div className="col-md-4"> */}
            <Card />
          {/* </div> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
