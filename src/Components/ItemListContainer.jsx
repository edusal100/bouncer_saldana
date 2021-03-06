import React, {useState, useEffect} from 'react'
import ItemList from './ItemList';

export default function ItemListContainer() {

  const [items, setItems] = useState([]);
  

  useEffect (() => {

    const arrayItems = [
    {id: 1, brand: 'Michael Thonet', model:'Era Chair', stock: 20, price: 100, image:'https://source.unsplash.com/fr0J5-GIVyg'},
    {id: 2, brand: 'Eileen Gray', model:'Transat', stock: 10, price: 80, image:'https://source.unsplash.com/kvmdsTrGOBM'},
    {id: 3, brand: 'Marcel Breuer', model:'Cesca Chair', stock: 5, price: 170, image: 'https://source.unsplash.com/4kTbAMRAHtQ'},
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
