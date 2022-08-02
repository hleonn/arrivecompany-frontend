import React, { useState } from 'react'

import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
// import {
//     FiMenu,
//     FiHome,
//     FiCalendar,
//     FiUser,
//     FiDollarSign,
//     FiBriefcase,
//     FiSettings
// } from 'react-icons/fi'
// import { IoPawOutline } 'react-icons/io5'
import NavItem from './NavItem'

const FiMenu = () => null;
const FiHome = () => null;

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky" //Un elemento con posicionamiento sticky es tratado como un elemento posicionado relativamente hasta que cruza un umbral especificado
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0,0,0,0.05"
            borderRadius={navSize == "small" ? "15px": "30px"}
            w={navSize == "small" ? "75px": "200px"}
            flexDir="column"
            justifyContent="space-between"
            as="nav"
        >
            <Flex
                p="5%"
                flexDir="column"
                alignItems="flex-start"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="Customer Name" description="Please introduce your First and Second Name... This is a input box "/>
                <NavItem navSize={navSize} icon={FiHome} title="Expected Arrival Time" description="Please register Schedule... This is a calendar box "/>
                <NavItem navSize={navSize} icon={FiHome} title="Company to Visit" description="Please Choose Company to visit...This is a dropdown"/>
                <NavItem navSize={navSize} icon={FiHome} title="Area-Company" description="Please Choose area of Company to visit...This is a dropdown"/>
                <NavItem navSize={navSize} icon={FiHome} title="Customer Type" description="Please Choose the type of customer you are...This is a dropdown"/>
                <NavItem navSize={navSize} icon={FiHome} title="Additional Comments" description="Please add comments if you wish...This is a input box"/>
                <NavItem navSize={navSize} icon={FiHome} title="Frecuent Customers" description="Choose frecuent customer...This is a carrousel"/>
                <NavItem navSize={navSize} icon={FiHome} title="Registers" description="Only admin...This is a pdf report of visits"/>
            </Flex>
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center": "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none": "flex"}/>
                <Flex mt={4} align="center">
                    <Avatar size="sm" src=""></Avatar>
                    <Flex flexDir="column" ml={4}>
                        <Heading as="h3" size="sm">Horacio Leon</Heading>
                        <Text>Admin</Text>
                    </Flex>

                </Flex>
            </Flex>
        </Flex>

    );
}
