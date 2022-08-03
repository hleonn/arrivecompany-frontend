import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Stack,
    Text,
    Box,
    Input,
    Select,
    Button,
    Heading,
    InputLeftElement,
    InputGroup,
    InputRightElement,
    Center
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
                                background='white'
                                sx={{
                                    '.my-box:hover &': {
                                        color: '#05e736',//before green.500
                                    },
                                }}>Access
                    </Box>
                        </Heading>
                    </Box>
                </Center>
            </div>

            {/*2 Data Users */}
            <div>
                
            </div>

            
            {/*4 DropDown/Select */}
            
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

                    <div>
                        <Heading>Arrive-Access</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            Welcome! ✌️
                            </Text>
                        <br></br>
                        
                        <QRCode
                            id="QRCode"
                            value={customer != null ? JSON.stringify(customer) : ''}
                        />
                        
                        <h2>
                            Hello
                        </h2>
                        <p>
                            Bon Jour
                        </p>
                        <p>{JSON.stringify(customer)}</p>
                        <br></br>
                    </div>

                    <Button rounded={'full'} colorScheme='teal' variant='ghost' onClick={download}>
                        Download Register
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

