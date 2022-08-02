import React from 'react'

import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'
import NavHoverBox from './NavHoverBox';

export default function NavItem({navSize, title,icon, active, description }) {
    return(
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center": "flex-start"}
        >
            <Menu placement="right">
                <Link
                backgroundColor={active && "#AEC8CA"}//#AEC8CA  color de fondo de las etiquetas
                p={3}
                borderRadius={8}
                _hover={{textDecor:'none', backgroundColor:'#05E736'}}//color hover
                w={navSize =="large" && "100%"}
                >
                    <MenuButton w="100%" /*color iconos*/>
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active? "#000": "gray.500" }/> 
                                <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}
                                </Text>
                        </Flex>
                    </MenuButton>
                </Link>
                    <MenuList
                        py={0}
                        border="none"
                        w={200}
                        h={200}
                        ml={5}
                    >
                        <NavHoverBox title={title} icon={icon} description={description}/>
                    </MenuList>

            </Menu>
        </Flex>
    )
}