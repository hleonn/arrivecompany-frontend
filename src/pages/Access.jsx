import React, { useState, useEffect } from "react";
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
} from '@chakra-ui/react'
import { SunIcon, TimeIcon, CheckIcon } from '@chakra-ui/icons'
import { useParams } from 'react-router-dom';
import QRCode from "react-qr-code";

//importa los elementos que necesites de chakra
//import { Input } from '@chakra-ui/react'
//Define tu componente y exportalo
//indicale a App.js que lo vas a usar, llevate este codigo 
//import InfoCustomers from '../components/App'


const download = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.download = "QRCode";
        downloadLink.href = `${pngFile}`;
        downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
};

const Access = ({ }) => {
    const [customer, setCustomer] = useState(null);
    // const actualizarCustomer = (e) => { setCustomerName(e.target.value); };
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5005/api/customers/${id}`)
            .then(response => response.json())
            .then(result => {
                setCustomer(result)
            })
            .catch(error => console.log('error', error));

    }, [])


    return (
        //1 Title
        <>
            <div>
                <p>{JSON.stringify(customer)}</p>
                <Box m={[10, 10]} borderRadius='full' px='2' borderWidth={4} borderColor='cyan.500' p={5} className='my-box'>
                    <Heading size='xl'>
                        Arrive-
                    <Box
                            as='span'
                            color='black.500'//before red.500
                            sx={{
                                '.my-box:hover &': {
                                    color: '#05e736',//before green.500
                                },
                            }}>Access
                    </Box>
                    </Heading>
                </Box>
            </div>
            {/*2 Data Users */}
            <div>
                <form>
                    <Stack m={[10, 10]} >
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                fontSize='2em'
                                children={<SunIcon w={8} h={8} color='green.500'
                                />}
                            />
                            <Input type='tel' placeholder='access permission and qr generator ' fontSize='1em' pt={5} pb={5} pl={10} />
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
                        Print Free Access
                </Button>
                    <Button rounded={'full'} colorScheme='teal' variant='outline'>
                        Denie Access
                </Button>
                    <Button rounded={'full'} colorScheme='teal' variant='ghost'>
                        Authorized Time
                </Button>
                    <QRCode
                        id="QRCode"
                        value={customer != null ? JSON.stringify(customer) : ''}
                    />
                    <Button rounded={'full'} colorScheme='teal' variant='ghost' onClick={download}>
                        download
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
export default Access;
//1. El app.js debe acceder a este archivo (export)
//2. Mi App.css lo va a requerir (import InfoCustomers from './pages/InfoCustomers';)

