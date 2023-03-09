import { Routes , Route} from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout';
import {Pay} from './components/Pay/'
import { Home } from './components/Home/';
export function Router(){
   return (

      <Routes>
         <Route path="/" element={<DefaultLayout/>} >
            <Route path="/" element={<Home />}/>
            <Route path="/pay" element ={<Pay/>} />
         </Route>
      </Routes>


   );
}