import React, { useState } from 'react'
import {Button, Flex} from '@chakra-ui/react'


export default function ItemCount({stock, initial}) {

const [auxInitial, setAuxInitial] = useState(initial);
const [cart, setCart] = useState(0);

const handleIncrement = () => {
    if(auxInitial < stock){
    setAuxInitial(auxInitial + 1);
  };
}

  const handleDecrement = () => {
    if(auxInitial >0){
    setAuxInitial(auxInitial - 1);
    }
  };

  const onAdd = () => {
   setCart(auxInitial);
  }

  return (

    <div>
        <p>Stock: {stock}</p>
        <Flex gap='6' align='center' justify='center'>
        <Button onClick={handleIncrement} colorScheme='gray'>+</Button>
        <h3>{auxInitial}</h3>
        <Button onClick={handleDecrement} colorScheme='gray'>-</Button>
        </Flex>        
        <Button onClick={onAdd} colorScheme='blue'>Add to Cart</Button>
        <p>In cart: {cart}</p>
    </div>
    
  )
}
