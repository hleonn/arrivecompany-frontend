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

const InfoSecurity= () =>{
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
                        }}>Security
                    </Box>
                        </Heading>
                    </Box>
                </Center>
            </div>
        {/*2 Data Users */}
        <div>
            <form>
            <Stack m={[10,10]} >
                <InputGroup>
                    <InputLeftElement 
                    pointerEvents='none'
                    fontSize='2em'
                    children={<AiOutlineUser w={8} h={8} color='red.500'
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
            <Select placeholder='Select option'>
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

        {/*5 Button variants */}
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
export default InfoSecurity;
//1. El app.js debe acceder a este archivo (export)
//2. Mi App.css lo va a requerir (import InfoCustomers from './pages/InfoCustomers';)

