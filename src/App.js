import { BrowserRouter } from "react-router-dom";
import HeaderComponent from "./Components/Header/Admin/HeaderComponent";
import TesterHeaderComponent from "./Components/Header/Tester/TesterHeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import Signin from './Components/SignInForm/Signin';

function App() {
  const token = localStorage.getItem('accessToken');
  let isAdmin = localStorage.getItem('role');
  
  if (!token) {
    return <Signin />
  }
  return (
    <BrowserRouter>
        { isAdmin === '1' ? <HeaderComponent /> : <TesterHeaderComponent />}
        <FooterComponent />
    </BrowserRouter>
  );
}

export default App;