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
    Divider,
    Center,
    Flex
} from '@chakra-ui/react'
import { SunIcon, TimeIcon, CheckIcon } from '@chakra-ui/icons'
import {AiOutlineUser} from 'react-icons/ai'

//importa los elementos que necesites de chakra
//import { Input } from '@chakra-ui/react'
//Define tu componente y exportalo
//indicale a App.js que lo vas a usar, llevate este codigo 
//import InfoCustomers from '../components/App'

const InfoServices = () => {
    const [customerName, setCustomerName] = useState('');
    const [DateTime, setDateTime] = useState('');
    const actualizarCustomer = (e) => { setCustomerName(e.target.value); };
    const actualizarDate = (e) => { setDateTime(e.target.value); };
    return (
        //1 Title & Styles
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
                            Other
                    <Box
                        as='span'
                        color='black.500'//before red.500
                        sx={{
                        '.my-box:hover &': {
                        color: '#05e736',//before green.500
                        },
                        }}>Services
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
                                children={<AiOutlineUser w={8} h={8} color='blue.500'
                                />}
                            />
                            <Input type='tel' placeholder=' Customer Name' fontSize='1em' pt={5} pb={5} pl={10} />
                        </InputGroup>


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
                    <Select placeholder='Choose supplier'>
                        <option value='Electricity'>Electricity</option>
                        <option value='Gas'>Gas</option>
                        <option value='Criogenic'>Criogenic</option>
                        <option value='Vigilancy'>Vigilancy</option>

                    </Select>

                    <Divider orientation='vertical' pl={2} pr={2} />

                    <Select placeholder='Area to Visit'>
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

            {/*5 Button variants */}
            <div>
                <Center height='50px' pt={10} pb={10}>
                    <Stack direction='row' spacing={4} align='center'>
                        <Button rounded={'full'} colorScheme='teal' variant='solid'>
                            Save 👍
                </Button>
                        <Divider orientation='vertical' />
                        <Button rounded={'full'} colorScheme='teal' variant='outline'>
                            Cancel 👎
                </Button>

                    </Stack>
                </Center>
            </div>


            {/*6 Carrousel */}

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
export default InfoServices;
//1. El app.js debe acceder a este archivo (export)
//2. Mi App.css lo va a requerir (import InfoCustomers from './pages/InfoCustomers';)

