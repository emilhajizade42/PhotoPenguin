import { MyContext } from "./context";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./Routes/index";
import "./Assets/sass/index.css"
function App() {
  const [count, setCount] = useState(0);
  const [mobSidebarVisible, setMobSidebarVisible] = useState(false);
  const [photoStorage, setPhotoStorage] = useState([]);
  const data = {
    count,
    setCount,
    mobSidebarVisible,
    setMobSidebarVisible,
    photoStorage,
    setPhotoStorage
  };
  return (
    <MyContext.Provider value={data}>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.id}
              exact
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
