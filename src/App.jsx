import Login from "./pages/Login";
import Home from "./pages/Home";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

const App = () => {

  const user = false;

    return (
        <BrowserRouter>
        <Routes>
          if (user) {
            <Route path="/" element={<Home/>}/>
          }else{
            <Route path="/" element={<Navigate to ="/login"/>}/>
          }
          <Route path="login" element={user ? <Navigate to="/"/> : <Login/>}/>
        </Routes>
      </BrowserRouter>
    ) 
};

export default App;