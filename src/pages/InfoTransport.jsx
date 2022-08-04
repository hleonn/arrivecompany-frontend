import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    Center,
    Flex,
    Divider
} from '@chakra-ui/react'
import { SunIcon, TimeIcon, CheckIcon } from '@chakra-ui/icons'
import { AiOutlineUser, AiFillCar } from 'react-icons/ai'

//importa los elementos que necesites de chakra
//import { Input } from '@chakra-ui/react'
//Define tu componente y exportalo
//indicale a App.js que lo vas a usar, llevate este codigo 
//import InfoCustomers from '../components/App'


const InfoTransport = () => {
    const [customerName, setCustomerName] = useState('');
    const [DateTime, setDateTime] = useState('');
    const [supply, setSupply] = useState('');
    const [area, setArea] = useState('');
    const [vehicle, setVehicles]= useState('');
    const [plates, setPlates]= useState('');
    const [save, setSave] = useState(true);
    const [cancel, setCancel] = useState(true);
    
    
    const actualizarCustomer = (e) => { setCustomerName(e.target.value); };
    const actualizarDate = (e) => { setDateTime(e.target.value); };
    const navigate = useNavigate();
    
    const toggleSave = (event) => {
        event.preventDefault();
        const datosEnviar = {
            CustomerName: customerName,
            DateTime: DateTime,
            Supply: supply,
            Area: area,
            Vehicles:vehicle,
            Plates:plates,
        };
        console.log(datosEnviar)
        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datosEnviar),
        };

        fetch("http://localhost:5005/api/transport", requestOptions)
            .then(response => response.json())
            .then(result => navigate(`/access/${result._id}`))
            .catch(error => console.log('error', error));
    }
    const toggleCancel = () => {
        console.log("Toggle cancel")
        setCancel(!cancel)
    }
    return (
        //1 Title
        <>
            <div>
                <Center height='50px' pt={10} pb={10}>

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
                        <Heading size='xl'>
                            Arrive-
                    <Box
                                as='span'
                                color='black.500'//before red.500
                                sx={{
                                    '.my-box:hover &': {
                                        color: '#05e736',//before green.500
                                    },
                                }}>Transport
                    </Box>
                        </Heading>
                    </Box>
                </Center>
            </div>

            {/*2 Data Users */}

            <div>
                <Center height='50px' pt={10} pb={10}>
                    <form>
                        <Stack
                            w='500px' //COOL
                            background='white'
                            align='center'
                            direction='row' spacing={2} align='center'
                            borderRadius='15px'
                            borderWidth={4}
                            borderColor='black'
                            p={2}
                            className='my-box' >
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    fontSize='2em'
                                    children={<AiOutlineUser w={8} h={8} color='yellow.500'
                                    />}
                                />
                                <Input 
                                onChange={(e) => setCustomerName(e.target.value)}
                                value={customerName}
                                type='tel' placeholder=' Customer Name' fontSize='1em' pt={5} pb={5} pl={10} />
                            </InputGroup>


                            />}
                    </Stack>
                    </form>
                </Center>
            </div>

            {/*3 Date and Time Picker */}
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
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local" //Number
                        />
                    </Stack>
                </Center>
            </div>

            {/*4 DropDown/Select */}
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
                            <option value='Pizza hut'>Pizza hut</option>

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
            <Divider orientation='horizontal' p={5} />
            {/*6 Button variants */}
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



        </>
    );

}


// function InfoCustomers()
// {   const [url,setUrl] = useState("");
//     return (
//         <div>
//             <h1>Info Customers</h1>
//             <img src={url} className="principal" alt =""></img>
//             <form>
//                 <button>

//                 </button>
//             </form>
//         </div>
//             );
// };
export default InfoTransport;
//1. El app.js debe acceder a este archivo (export)
//2. Mi App.css lo va a requerir (import InfoCustomers from './pages/InfoCustomers';)

