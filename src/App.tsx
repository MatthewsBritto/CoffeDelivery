import {ThemeProvider} from 'styled-components'
import { useEffect, useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import ListCoffe from './json/coffesTypes.json'
import { defaultTheme } from './syles/themes/default'
import { GlobalStyle } from './syles/global'
import { Router } from './Router'
import { useContext,createContext} from 'react'


export interface Order {
  id:number;
  type:string;
  qtd:number;
  price:number;
  Photo:string;
}

export interface ListCoffeProps {
  id:number;
  type: string;
  price: string;
  Photo:string;
  sub:string[];
  description:string;
  qtd:number;

}

export type OrderContextType = {
  orders: Order[],
  listCoffe: ListCoffeProps[],
  addqtd: (id:number) =>void,
  removeqtd: (id:number) =>void,
  removeItn: (id:number) =>void,
  handleNewOrder:(data:ListCoffeProps) => void,
  removeqtdItn: (id:number) => void,
  addqtdItn: (id:number) => void
}
export const OrderContext = createContext<OrderContextType>({} as OrderContextType)


export function App() {
  const [orders, setOrders] =  useState<Order[]>([])

  const [listCoffe, setListCoffe] = useState<ListCoffeProps[]>(()=> {
    return [...ListCoffe.types]
 });

  useEffect(() => {

    localStorage.setItem('order', JSON.stringify(orders))

  },[orders])

  
  function addqtd(id:number){
    let item = listCoffe[id]
   
    if(item && item.qtd >= 0) {
       item.qtd = item.qtd + 1
       let newlist = listCoffe
       newlist[id] = item 
       setListCoffe([...newlist])
    }      

    
 }
 function addqtdItn(id:number){

  let indice = orders.findIndex( i => i.id === id)
  let updateitn = orders[indice]

  if(updateitn && updateitn.qtd >= 0){

    updateitn.qtd += 1;

    let newOrder = orders
    newOrder[indice] = updateitn
    setOrders([...newOrder])
  }
 }

 function removeqtd(id:number){
    let item = listCoffe[id]

    if(item && item.qtd > 0 ) {

      item.qtd = item.qtd - 1;

      let newlist = listCoffe
      newlist[id] = item 
      setListCoffe([...newlist])
    }
   
 }

 function removeqtdItn(id:number){
  
  let indice = orders.findIndex( i => i.id === id)
  let updateitn = orders[indice]
  
  if(updateitn && updateitn.qtd > 0){

    updateitn.qtd -= 1 ;

    let newOrder = orders
    newOrder[indice] = updateitn
    setOrders([...newOrder])
  }      
 }

 function removeItn(id:number) {
   let item = orders.filter(item => item.id !== id)

   setOrders([...item])
 }

 function handleNewOrder(data:ListCoffeProps){
  const newOrder: Order = {
     id:data.id,
     type:data.type,
     qtd: data.qtd,
     price:parseFloat(data.price.replace(',', '.')),
     Photo:data.Photo
  }

  setOrders((state) => [...state,newOrder])

  

}
 

  return (
    <OrderContext.Provider 
      value={{orders,addqtd,removeqtd,removeItn,
      listCoffe,handleNewOrder,addqtdItn,removeqtdItn
      }}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <GlobalStyle/>
          <Router/>
        </BrowserRouter>
      </ThemeProvider>  
    </OrderContext.Provider>
  )
}

