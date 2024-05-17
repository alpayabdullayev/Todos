import {
    BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/home";



const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
            <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
