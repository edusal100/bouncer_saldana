import { Center } from '@chakra-ui/react'
import React from 'react'
import Item from './Item'

export default function ItemList({items}) {
  return (
    <div>
        <Center>
        {items.map((item)=>(
         <Item item={item}/>
         ))}
         </Center>
         </div>
  )
}
