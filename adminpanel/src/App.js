import './App.css';
import Signup from './Components/Pages/Signup/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/Pages/Login/Login';
import RedirectBlankPage from './Components/Pages/Common/RedirectBlankPage';
import ViewUser from './Components/Pages/ViewUser/ViewUser';
import EditModelProduct from './Components/Pages/EditModelProduct/EditModelProduct';
import TopBar from './Components/TopBar/TopBar';
import TopNav from './Components/TopNav/TopNav';
import Home from './Components/Pages/Home/Home';
import UserDatatable from './Components/Pages/UserDatatable/UserDatatable'
import ProductDatatable from './Components/Pages/ProductDatatable/ProductDatatable'
import Chat from './Components/Pages/Chat/Chat';
import AddNewProduct from './Components/Pages/AddNewProduct/AddNewProduct';

function App() {
  const getFlow = () => {

    

    if (!localStorage.getItem("isLogin", false)) {
      return (
        <>
          
            <Routes>
              <Route path="*" element={<RedirectBlankPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Login/>} />
            </Routes>
            
        </>
      )
    }
    else {
      return (
        <>
           <TopBar />
           <TopNav />
            <Routes>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/userdatatable' element={<UserDatatable />}></Route>
              <Route path="/singleuser/:id" element={<ViewUser />}></Route>
              <Route path='/editmodelproduct/:id' element={<EditModelProduct />}></Route>
              <Route path='/productdatatable' element={<ProductDatatable />}></Route>
              <Route path='/chat' element={<Chat />}></Route>
              <Route path='/addnewproduct' element={<AddNewProduct />}></Route>
            </Routes>
           
        </>
      )
    }
  }

  return (
    <>
      {getFlow()}
    </>
  );
}

export default App;
