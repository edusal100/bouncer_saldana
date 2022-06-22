import React, { useState } from 'react'
import {Button, Flex} from '@chakra-ui/react'


export default function ItemCount({stock}) {

const [initial, setInitial] = useState(0);
const [cart, setCart] = useState(0);

const handleIncrement = () => {
    if(initial < stock){
    setInitial(prevInitial => prevInitial + 1);
  };
}

  const handleDecrement = () => {
    if(initial >0){
    setInitial(prevInitial => prevInitial - 1);
    }
  };

  const onAdd = () => {
   setCart(initial);
  }

  return (

    <div>
        <p>Stock: {stock}</p>
        <Flex gap='6' align='center' justify='center'>
        <Button onClick={handleIncrement} colorScheme='gray'>+</Button>
        <h3>{initial}</h3>
        <Button onClick={handleDecrement} colorScheme='gray'>-</Button>
        </Flex>        
        <Button onClick={onAdd} colorScheme='blue'>Add to Cart</Button>
        <p>In cart: {cart}</p>
    </div>
    
  )
}
