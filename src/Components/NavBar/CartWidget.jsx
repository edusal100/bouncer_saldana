
import React from 'react'
import { Image } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    Button,
  } from '@chakra-ui/react';

export default function CartWidget() {
  return (
    <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Image borderRadius='full'
  boxSize='40px'
  src='https://iili.io/hkDTTF.md.png'/>
              </MenuButton>
            </Menu>
    
  )
}
