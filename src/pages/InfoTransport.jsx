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
    Flex
} from '@chakra-ui/react'
import { SunIcon, TimeIcon, CheckIcon } from '@chakra-ui/icons'
import {AiOutlineUser} from 'react-icons/ai'

//importa los elementos que necesites de chakra
//import { Input } from '@chakra-ui/react'
//Define tu componente y exportalo
//indicale a App.js que lo vas a usar, llevate este codigo 
//import InfoCustomers from '../components/App'

const InfoTransport = () => {
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
                <form>
                    <Stack m={[10, 10]} >
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                fontSize='2em'
                                children={<AiOutlineUser w={8} h={8} color='yellow.500'
                                />}
                            />
                            <Input type='tel' placeholder=' Customer Name' fontSize='2em' pt={5} pb={5} pl={10} />
                        </InputGroup>


                    </Stack>
                </form>
            </div>

            {/*3 Date and Time Picker */}
            <div>
                <Input
                    placeHolder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                />
            </div>

            {/*4 DropDown/Select */}
            <div>
                <Select placeholder='Choose your supplier company'>
                    <option value='option1'>Uber Eats</option>
                    <option value='option2'>Domino's</option>
                    <option value='option3'>Hello Fresh</option>
                    <option value='option4'>Pizza hut</option>

                </Select>
            </div>
            <div>
                <Select placeholder='Area to Visit'>
                    <option value='option1'>Computing Services</option>
                    <option value='option2'>Design</option>
                    <option value='option3'>Exports</option>
                    <option value='option4'>Maintenance</option>
                    <option value='option5'>Marketing</option>
                    <option value='option6'>Planning</option>
                    <option value='option7'>Production</option>
                    <option value='option8'>Reception</option>
                    <option value='option9'>Human Resources</option>
                    <option value='option10'>Sales</option>
                </Select>
            </div>


            {/*5 Data Users */}
            <div>

                <Select placeholder='Vehicle Type'>
                    <option value='option1'>Vehicle</option>
                    <option value='option2'>Truck</option>
                    <option value='option3'>Motorcycle</option>
                    <option value='option3'>Scooter</option>

                </Select>
                <form>
                    <Stack m={[10, 10]} >

                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                fontSize='1em'
                                children={<SunIcon color='black.500'
                                />}
                            />
                            <Input type='tel' placeholder=' Plates' fontSize='2em' p={10} />
                        </InputGroup>

                    </Stack>
                </form>
            </div>
            {/*6 Button variants */}
            <div>
                <Stack direction='row' spacing={4} align='center'>
                    <Button rounded={'full'} colorScheme='teal' variant='solid'>
                        Save 👍
                </Button>
                    <Button rounded={'full'} colorScheme='teal' variant='outline'>
                        Cancel 👎
                </Button>

                </Stack>
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

