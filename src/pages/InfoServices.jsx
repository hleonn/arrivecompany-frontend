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
    Center
} from '@chakra-ui/react'
import { SunIcon, TimeIcon, CheckIcon } from '@chakra-ui/icons'


//importa los elementos que necesites de chakra
//import { Input } from '@chakra-ui/react'
//Define tu componente y exportalo
//indicale a App.js que lo vas a usar, llevate este codigo 
//import InfoCustomers from '../components/App'

const InfoServices= () =>{
    return (
        //1 Title
        <>
        <div>
            <Box m={[10,10]} borderRadius='full' px='2' borderWidth={4} borderColor='blue.500' p={5} className='my-box'>
                <Heading size='xl'>
                    Arrive-
                    <Box 
                    as='span'  
                    color='black.500'//before red.500
                    sx={{'.my-box:hover &': {
                    color: '#05e736',//before green.500
                        },
                        }}>Services
                    </Box>
                </Heading>
            </Box>
        </div>
        {/*2 Data Users */}
        <div>
            <form>
            <Stack m={[10,10]} >
                <InputGroup>
                    <InputLeftElement 
                    pointerEvents='none'
                    fontSize='1em'
                    children={<SunIcon w={8} h={8} color='blue.500'
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
        <Center height='50px'>
        <Select placeholder='Choose your supplier company'>
                <option value='option1'>Uber Eats</option>
                <option value='option2'>Domino's</option>
                <option value='option3'>Hello Fresh</option>
                <option value='option4'>Pizza hut</option>
                
            </Select>
        
            <Divider orientation='vertical' pl={2} pr={2} />
        
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
