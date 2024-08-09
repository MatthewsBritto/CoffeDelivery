import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/header";
import { LayoutContainer } from "./styles";
import Footer from "../components/Footer";

export function DefaultLayout() {

   return (
      <LayoutContainer>
         <Header />
         <Outlet />
         <Footer />
      </LayoutContainer>
      
   )
}