import { useContext,createContext, ReactNode} from 'react'
import ListCoffe from '../json/coffesTypes.json'
import { useEffect, useState } from 'react'



export interface Order {
   id:number;
   type:string;
   qtd:number;
   photo:string;
   price:number;
 }
 
 export interface ListCoffeProps {
   id:number;
   type: string;
   price: string;
   photo:string;
   sub:string[];
   description:string;
   qtd:number;
 }

 export interface OrderAdress {
  adress:string;
  number:string;
  bairro:string;
  uf:string;
  city:string;
  complemento?:string;
  payType?:string
 }

 
 export type OrderContextType = {
   orders: Order[],
   listCoffe: ListCoffeProps[],
   addqtd: (id:number) =>void,
   removeqtd: (id:number) =>void,
   removeItn: (id:number) =>void,
   handleNewOrder:(data:ListCoffeProps) => void,
   removeqtdItn: (id:number) => void,
   addqtdItn: (id:number) => void,
   updateAllPrices: (orders:Order[]) =>void,
   sumTotal: (orders:Order[]) => void,
   total:number;
   clickPayType:(active:string) => void,
   payType:string,
   clickFinishedOrder:(data:OrderAdress,payType:string) => void,
   finishedOrder?:OrderAdress

 }
 export const OrderContext = createContext<OrderContextType>({} as OrderContextType)


 interface OrderContextProps {
   children: ReactNode
 }

 export function OrderContextProps({children}: OrderContextProps){
   const [orders, setOrders] =  useState<Order[]>([])


   const [ finishedOrder,setFinishedOrder] = useState<OrderAdress>()

   const [ total, setTotal] = useState<number>(0)

   const [payType,setPayType] = useState<string>('')

   const [listCoffe, setListCoffe] = useState<ListCoffeProps[]>(() => {
    return [...ListCoffe.types]
 });

  useEffect(() => {

      sumTotal(orders)

  },[orders,finishedOrder])

  
 function addqtd(id:number) {
    let item = listCoffe[id]
   
    if(item && item.qtd >= 0) {
       item.qtd = item.qtd + 1
       let newlist = listCoffe
       newlist[id] = item 
       setListCoffe([...newlist])
    }      

    
 }

 function addqtdItn(id:number) {

  let indice = orders.findIndex( i => i.id === id)
  let updateitn = orders[indice]

  if(updateitn && updateitn.qtd >= 0) {

    updateitn.qtd += 1;

    let newOrder = orders
    newOrder[indice] = updateitn
    setOrders([...newOrder])
    updatePrice(id)
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
    updatePrice(id)
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
     photo:data.photo,
     
  }

  setOrders((state) => [...state,newOrder])


 }

 function updatePrice(id:number){

   let idList = listCoffe.findIndex(i => i.id === id)
   let idOrders = orders.findIndex( i => i.id === id)
   
   let basePrice = listCoffe[idList]
   
   if(basePrice){
      let price = parseFloat(basePrice.price.replace(',','.'))

      let teste = (price * orders[idOrders].qtd).toFixed(2)

      orders[idOrders].price = parseFloat(teste)

      setOrders([...orders])
   } 


 } 

 function updateAllPrices(orders:Order[]){

   if(orders.length){
      orders.forEach( order => updatePrice(order.id))
   }
   sumTotal(orders)
 }

  function sumTotal(orders:Order[]){

   let counter = 0

   orders.forEach( e => counter += e.price)

   let countupdate = parseFloat(counter.toFixed(2))
      
   setTotal(countupdate)
 }

 function clickPayType(active:string){
    setPayType(active)
 }

 function clickFinishedOrder(data:OrderAdress,payType:string) {

  if(payType !== '' ) {
    let newOrder = {
        adress:data.adress,
        bairro:data.bairro,
        city:data.city,
        number:data.number,
        uf:data.uf,
        payType:payType
    }
       setFinishedOrder(newOrder)
            
  }
  else {
    console.log('selecione uma forma de pagamento')
  }
 }


 return(
   <OrderContext.Provider 
      value={{
         orders,
         addqtd,
         removeqtd,
         removeItn,
         listCoffe,
         handleNewOrder,
         addqtdItn,
         removeqtdItn,
         updateAllPrices,
         sumTotal,
         total,
         clickPayType,
         payType,
         clickFinishedOrder,
         finishedOrder
      }}>

      {children}
     </OrderContext.Provider>
 )
 }