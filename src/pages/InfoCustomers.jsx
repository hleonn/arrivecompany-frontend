import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as PATHS from "../utils/paths";
//import ReactDOM from 'react-dom'
//import moment from 'moment'
import {
    Stack,
    Box,
    Input,
    Select,
    Button,
    Heading,
    InputLeftElement,
    InputGroup,
    InputRightElement,
    Divider,
    Center,
    Flex,
    Tabs,
    TabPanels,
    TabPanel,
    TabList,
    Tab,
    Image

} from '@chakra-ui/react'
import { SunIcon, TimeIcon, Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/icons'
import QRCode from "react-qr-code";
import { AiOutlineUser, AiFillCar } from 'react-icons/ai'



const InfoCustomers = () => {
    const [save, setSave] = useState(true);
    const [cancel, setCancel] = useState(true);
    const [customerName, setCustomerName] = useState('');
    const [DateTime, setDateTime] = useState('');
    const [companyVisit, setcompanyVisit] = useState('');
    const [area, setArea] = useState('');
    // NEW CHANGES WITH TABS
    const [supply, setSupply] = useState('');
    const [vehicle, setVehicles] = useState('');
    const [plates, setPlates] = useState('');
    //
    const navigate = useNavigate();

    const actualizarCustomer = (e) => { setCustomerName(e.target.value); };
    const actualizarDate = (e) => { setDateTime(e.target.value); };

    const actualizarcompany = (e) => { setcompanyVisit(e.target.value); };

    const actualizararea = (e) => { setArea(e.target.value); };

    const enviarDatos = (e) => {
        e.preventDefault()
        console.log("enviarDatos")
    };

    const toggleSave = (event) => {
        event.preventDefault();
        const datosEnviar = {
            CustomerName: customerName,
            DateTime: DateTime,
            CompanyVisit: companyVisit,
            Area: area,
            // CHANGES WITH TABS
            Supply: supply,
            Vehicles: vehicle,
            Plates: plates,
        };
        console.log(datosEnviar)
        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datosEnviar),
        };

        fetch(`${process.env.REACT_APP_SERVER_URL}/customers`, requestOptions)
            .then(response => response.json())
            .then(result => navigate(`/access/${result._id}`))
            .catch(error => console.log('error', error));
    }

    const toggleCancel = () => {
        console.log("Toggle cancel")
        setCancel(!cancel)
    }

    return (
        //0 TITLE 
        <>
            <div>
                <Center height='50px' pt={10} pb={10} >
                    <Box
                        w='500px' //COOL
                        align='center'
                        direction='row' spacing={2} align='center'
                        borderRadius='15px'
                        background='white'
                        borderWidth={4}
                        borderColor='#05e736'
                        p={2}
                        className='my-box'>

                        <Heading size='xl'>Arrive-
                    <Box
                                as='span'
                                color='black.500'//before red.500
                                sx={{
                                    '.my-box:hover &': {
                                        color: '#05e736',//before green.500
                                    },
                                }}>Customers
                    </Box>
                        </Heading>
                    </Box>
                </Center>
            </div>
            <Divider orientation='horizontal' />
            {/******* 1 CHANGES WITH TABS ......PERSONAL OR SERVICES ******/}
            {/* <div>
                <Center height='50px' pt={10} pb={10}>
                    <Stack
                        w='500px' //COOL
                        background='white'
                        align='center'
                        direction='row' spacing={2} align='center'
                        borderRadius='15px'
                        borderWidth={4}
                        borderColor='black'
                        p={2}
                        className='my-box'
                    >
                        <Tabs defaultIndex={1}>

                            <TabList>
                                <Tab>Personal or Work</Tab>
                                <Tab>Services</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Image
                                        boxSize='200px'
                                        fit='cover'
                                        src='https://resizing.flixster.com/wTgvsiM8vNLhCcCH-6ovV8n5z5U=/300x300/v1.bjsyMDkxMzI5O2o7MTgyMDQ7MTIwMDsxMjAwOzkwMA'
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <Image
                                        boxSize='200px'
                                        fit='cover'
                                        src='https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest?cb=20170716092103'
                                    />
                                </TabPanel>
                            </TabPanels>


                        </Tabs>
                    </Stack>
                </Center>
            </div> */}

            {/******* 1 CHANGES WITH TABS ......PERSONAL OR SERVICES ******/}




            {/******* 2 DATA USER ******/}

            <Center pt={10} pb={10}>
                <form onSubmit={enviarDatos}>

                    <div>
                        <Center height='50px' pt={10} pb={10}>
                            {/*<form onSubmit={enviarDatos}>*/}
                            <Stack
                                w='500px' //COOL
                                background='white'
                                align='center'
                                direction='row' spacing={2} align='center'
                                borderRadius='15px'
                                borderWidth={4}
                                borderColor='black'
                                p={2}
                                className='my-box'
                            >
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        fontSize='2em'
                                        children={
                                            <AiOutlineUser w={8} h={8} color='red.500' />
                                        }
                                    />
                                    <Input
                                        onChange={(e) => setCustomerName(e.target.value)}
                                        value={customerName}
                                        type="text" placeholder='Customer Name' fontSize='1em' pt={5} pb={5} pl={10}
                                    />
                                </InputGroup>

                            </Stack>
                            {/*</form>*/}
                        </Center>
                    </div>

                    {/*******3 DATE AND TIME*******/}

                    <div>
                        <Center height='50px' pt={10} pb={10}>
                            <Stack
                                w='500px' //COOL
                                background='white'
                                align='center'
                                direction='row' spacing={2} align='center'
                                borderRadius='15px'
                                borderWidth={4}
                                borderColor='black'
                                p={2}
                                className='my-box'
                            >
                                <Input
                                    onChange={(e) => setDateTime(e.target.value)}
                                    value={DateTime}
                                    placeholder="Choose Date & Time"
                                    size="md"
                                    type="datetime-local" //Number
                                />
                            </Stack>
                        </Center>
                    </div>
                    <Divider orientation='horizontal' p={0.5} />

                    {/*******4 DropDown/Select *******/}

                    <div>

                        <Center height='50px' pt={10} pb={10}>
                            <Stack
                                w='500px' //COOL
                                background='white'
                                align='center'
                                direction='row' spacing={2} align='center'
                                borderRadius='15px'
                                borderWidth={4}
                                borderColor='black'
                                p={2}
                                className='my-box'
                            >
                                <Select
                                    onChange={(e) => setcompanyVisit(e.target.value)}
                                    value={companyVisit}
                                    type="text"
                                    placeholder='Company to Visit'>
                                    <option value='Umbrella'>Umbrella</option>
                                    <option value='Monsanto'>Monsanto </option>
                                    <option value='Bayer'>Bayer </option>
                                    <option value='Illumina'>Illumina</option>
                                    <option value='Astra Zeneca'>Astra Zeneca</option>
                                    <option value='Theranos'>Theranos</option>

                                </Select>
                                <Divider orientation='vertical' pl={1} pr={1} />
                                {/*<Divider orientation='horizontal' p={5}/>*/}

                                <Select
                                    onChange={(e) => setArea(e.target.value)}
                                    value={area}
                                    type="text"
                                    placeholder='Area to Visit'>
                                    <option value='Informatics'>Informatics</option>
                                    <option value='Genoma Design'>Genoma Design</option>
                                    <option value='Clonation'>Clonation</option>
                                    <option value='Transgenic Test'>Transgenic Test</option>
                                    <option value='Marketing'>Marketing</option>
                                    <option value='Planning'>Planning</option>
                                    <option value='Production'>Production</option>
                                    <option value='Robotic Labs'>Robotic Labs</option>
                                    <option value='Human Capital'>Human Capital</option>
                                    <option value='Sales'>Sales</option>
                                </Select>
                            </Stack>
                        </Center>
                    </div>

                    <Tabs defaultIndex={1}>
                        <TabList>
                            <Tab>Personal or Work</Tab>
                            <Tab>Services</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                {/*  */}

                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <Center height='50px' pt={10} pb={10}>
                                        <Stack
                                            w='500px' //COOL
                                            background='white'
                                            align='center'
                                            direction='row' spacing={2} align='center'
                                            borderRadius='15px'
                                            borderWidth={4}
                                            borderColor='black'
                                            p={2}
                                            className='my-box'
                                        >
                                            <Select
                                                onChange={(e) => setSupply(e.target.value)}
                                                value={supply}
                                                type="text"
                                                placeholder='Choose supplier'>
                                                <option value='Uber Eats'>Uber Eats</option>
                                                <option value='Dominos'>Domino's</option>
                                                <option value='Hello Fresh'>Hello Fresh</option>
                                                <option value='Pizza hut'>Pizza hut</option>git add
                    
                        </Select>

                                            <Divider orientation='vertical' pl={1} pr={1} />

                                            <Select
                                                onChange={(e) => setArea(e.target.value)}
                                                value={area}
                                                type="text"
                                                placeholder='Area to Visit'>
                                                <option value='Informatics'>Informatics</option>
                                                <option value='Genoma Design'>Genoma Design</option>
                                                <option value='Clonation'>Clonation</option>
                                                <option value='Transgenic Test'>Transgenic Test</option>
                                                <option value='Marketing'>Marketing</option>
                                                <option value='Planning'>Planning</option>
                                                <option value='Production'>Production</option>
                                                <option value='Robotic Labs '>Robotic Labs </option>
                                                <option value='Human Capital'>Human Capital</option>
                                                <option value='Sales'>Sales</option>
                                            </Select>
                                        </Stack>
                                    </Center>
                                </div>
                                <Divider orientation='vertical' pt={1} pb={1} pl={1} pr={1} />
                                {/*5 Data Users */}
                                <div>
                                    <Center height='50px' pt={10} pb={10}>
                                        <Stack
                                            w='500px' //COOL
                                            background='white'
                                            align='center'
                                            direction='row' spacing={2} align='center'
                                            borderRadius='15px'
                                            borderWidth={4}
                                            borderColor='black'
                                            p={2}
                                            className='my-box'
                                        >
                                            <Select
                                                onChange={(e) => setVehicles(e.target.value)}
                                                value={vehicle}
                                                type="text"
                                                placeholder='Vehicle Type'>
                                                <option value='Vehicle'>Vehicle</option>
                                                <option value='Truck'>Truck</option>
                                                <option value='Van'>Van</option>
                                                <option value='Motorcycle'>Motorcycle</option>
                                                <option value='Scooter'>Scooter</option>
                                            </Select>

                                            <Divider orientation='vertical' pl={1} pr={1} />

                                            <form>

                                                <Stack m={[1, 1]} >

                                                    <InputGroup>
                                                        <InputLeftElement
                                                            pointerEvents='none'
                                                            fontSize='1em'
                                                            children={<AiFillCar w={8} h={8} color='black.500'
                                                            />}

                                                        />
                                                        <Input
                                                            onChange={(e) => setPlates(e.target.value)}
                                                            value={plates}
                                                            type='tel'
                                                            placeholder=' Plates'
                                                            fontSize='1em'
                                                            pt={5}
                                                            pb={5}
                                                            pl={10} />

                                                    </InputGroup>
                                                </Stack>
                                            </form>
                                        </Stack>
                                    </Center>
                                </div>
                            </TabPanel>
                        </TabPanels>


                    </Tabs>


                    <Divider orientation='horizontal' p={5} />

                    {/*5 Button variants */}
                    <div>
                        <Center height='50px' pt={10} pb={10}>
                            <Stack direction='row' spacing={4} align='center'>

                                <Button rounded={'full'} colorScheme='teal' variant='solid' onClick={toggleSave}>
                                    Save 👍
                </Button>

                                <Divider orientation='vertical' />
                                <Button rounded={'full'} colorScheme='teal' variant='outline' onClick={toggleCancel}>
                                    Cancel 👎
                </Button>

                            </Stack>
                        </Center>
                    </div>

                </form>
            </Center>
        </>
    );
}
export default InfoCustomers;


