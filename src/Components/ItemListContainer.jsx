import React, {useState, useEffect} from 'react'
import ItemList from './ItemList';

export default function ItemListContainer() {

  const [items, setItems] = useState([]);

  useEffect (() => {

    const arrayItems = [
    {id: 1, brand: 'Michael Thonet', model:'Era Chair', stock: 20, price: 100},
    {id: 2, brand: 'Eileen Gray', model:'Transat', stock: 10, price: 80},
    {id: 3, brand: 'Marcel Breuer', model:'Cesca Chair', stock: 5, price: 170},
  ]

  const awaitTimeout = delay =>
  new Promise(resolve => setTimeout(resolve, delay));
  
  awaitTimeout(2000).then(()=> setItems(arrayItems)); 

  }, []);


  return (
    <div>
      <ItemList items={items}/>
      </div>
  )
}
