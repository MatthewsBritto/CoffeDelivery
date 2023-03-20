import { Routes , Route} from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout';
import {Pay} from './components/Pay/'
import { Home } from './components/Home/';
import { PayAProved } from './components/Aproved/';
export function Router(){
   return (

      <Routes>
         <Route path="/" element={<DefaultLayout/>} >
            <Route path="/" element={<Home />}/>
            <Route path="pay" element ={<Pay/>} />
            <Route path="pay/aproved" element={<PayAProved/>}/>
         </Route>
      </Routes>


   );
}