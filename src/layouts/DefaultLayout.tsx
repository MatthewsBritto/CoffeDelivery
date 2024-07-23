import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/header";

export function DefaultLayout(){
   return (
      <div style={{width:1400, margin:'auto'}}>
         <Header />
         <Outlet />
      </div>
      
   )
}