import { Box, Center, useColorModeValue, Heading, Text, Stack, Image } from '@chakra-ui/react'
import React from 'react'
import ItemCount from './ItemCount'


export default function Item({item}) {

const IMAGE = 'https://images.unsplash.como/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMxwaG90by1wYWd1fHx8fGVufDB8fDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

  return (
   <Center py={12}>
        <Box role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2x1'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
                <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'230px'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: 'url(${IMAGE})',
                    filter: 'blur(15px)',
                    zIndex: -1,
                }}
                _groupHover={{
                    _after: {
                        filter: 'blur(20px)',
                    },
                }}>
                    <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE}/>
                </Box>
                <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>{item.brand}</Text>
                <Heading fontSize={'2x1'} fontFamily={'body'} fontWeight={500}>{item.model}</Heading>
                <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={'800'} fontSize={'x1'}>${item.price}</Text>
                    
                    
                </Stack>
                <ItemCount stock = {item.stock} initial={1}></ItemCount>
                </Stack>    
        </Box>
   </Center>
  );
}
