import { BrowserRouter } from "react-router-dom";

const Provider = ({ children }:any) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

export default Provider;