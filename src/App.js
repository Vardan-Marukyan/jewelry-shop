import './App.css';
import { CatalogContents } from './catalogPage/components/catalogContents';
import {Contents} from './home/components/contents'
import { Route, Routes } from 'react-router-dom'
import { Product } from './product/product';
import { Contacts } from './ourcontacts/contacts';
import { Main } from './main/main';
import { SingIn } from './singIn/singIn';
import { SingUp } from './singUp/singUp';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Main/>}>
        <Route path='/' element={<Contents/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/catalog' element={<CatalogContents/>}/>
      </Route>
      <Route path='/in' element={<SingIn/>}/>
      <Route path='/up' element={<SingUp/>}/>
    </Routes>
    </>
  );
}

export default App;
