import React from 'react'
import {
    Flex,
    Heading,
    Text,
    Icon,
    Button
}
 from '@chakra-ui/react'
 export default function NavHoverBox({icon,title,description }) {
      
     return(
         <>

         <Flex
             pos="absolute"
             mt="calc(100px-7.5px"
             ml="-10px"
             width={0}
             height={0}
             borderTop="10px solid transparent"
             borderTop="10px solid transparent"
             borderTop="10px solid #82AAAD"// #82AAAD
         />
         <Flex
            h={200}
            w={200}
            w="100%"
            flexDir="column"
            alignItems="center"
            justify="center"
            backgroundcolor="#82AAAD" //#82AAAD
            borderRadius="10px"
            color="#000" //Color del texto Negro
            textAlign="center"

            >
            <Icon as={icon} fontSize="3xl" mb={4}/>
            <Heading size="md" fontWeight="normal">{title}</Heading>/>
            <Text>{description}</Text>/>
            <Button onClick="" colorScheme='whatsapp' variant='solid'>click me</Button>

         </Flex>    
         </>
     )
 }
    