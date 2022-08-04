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
    Center,
    Divider
} from '@chakra-ui/react'
import { SunIcon, TimeIcon, CheckIcon } from '@chakra-ui/icons'
import { useParams } from 'react-router-dom';
import QRCode from "react-qr-code";
import moment from 'moment';

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
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/customers/${id}`)
            .then(response => response.json())
            .then(result => {
                setCustomer(result)
            })
            .catch(error => console.log('error', error));

    }, [])

    //*Here we go! *//
    const deleteCustomer = (event) => {
        event.preventDefault();
        // const datosBorrar = {
        //     CustomerName: customerName,
        //     DateTime: DateTime,
        //     CompanyVisit: companyVisit,
        //     Area: area,
        // };
        // console.log(datosBorrar)

        var requestOptions = {
            method: 'DELETE',
        };

        fetch(`${process.env.REACT_APP_SERVER_URL}/customers/${id}`, requestOptions)
            .then(response => response.json())
            .then(() => navigate('/customers'))
            .catch(error => console.log('error', error));
    }
    //*Here we go! *//
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

            <div style={{ padding: "50px", height: "50vh", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <Stack direction='row' spacing={4} align='center'>

                    <div>
                        <Center style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                            {/*Here*/}
                            <Box
                                w='500px' //COOL
                                align='center'
                                direction='row' spacing={2} align='center'
                                borderRadius='15px'
                                background='white'
                                borderWidth={4}
                                borderColor='black'
                                p={25}
                                mb={15}
                                className='my-box'>

                                <Box
                                    as='span'
                                    color='black.500'//before red.500
                                    background='white'
                                    sx={{
                                        '.my-box:hover &': {
                                            color: '#05e736',//before green.500
                                        },
                                    }}>
                                    <Text color={'black'} fontSize='28px' fontWeight='bold'>
                                        VISITANT ✌️
                                    </Text>

                                    <br></br>
                                </Box>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <QRCode
                                        id="QRCode"
                                        value={customer != null ? JSON.stringify(customer) : ''}
                                    />
                                    {customer ? (
                                        //style:margin-left
                                        <div >
                                            <Text color={'black'} fontSize='22px' fontWeight='bold'>
                                                <p>{customer.CustomerName || null}</p>
                                            </Text>

                                            <Text color={'black'} fontSize='20px' fontWeight='bold'>
                                                <p>{customer.CompanyVisit || null}</p>
                                            </Text>

                                            <Text color={'black'} fontSize='20px' fontWeight='bold'>
                                                <p>{customer.Area || null}</p>
                                            </Text>

                                            <Text color={'red.500'} fontSize='28px' fontWeight='bold'>
                                                <p>{moment(customer.DateTime).format("D-M-YY ") || null}</p>

                                            </Text>
                                            <Text color={'red'} fontSize='28px' fontWeight='bold'>
                                                <p>{moment(customer.DateTime).format("HH:mm a ") || null}</p>
                                            </Text>
                                        </div>
                                        //D/M/YY
                                    ) : null}
                                </div>
                            </Box>

                            <div>
                                
                                <Button ml={5} mr={5} rounded={'full'} colorScheme='teal' variant='solid' onClick={download}>
                                    Download
                                </Button>
                                
                                <Button ml={5} mr={5} rounded={'full'} colorScheme='whatsapp' variant='solid'>
                                    Deny 
                                </Button>
                                <Button ml={5} mr={5} rounded={'full'} colorScheme='whatsapp' variant='solid' onClick={deleteCustomer}>
                                    Delete
                                </Button>
                            </div>
                        </Center>

                        {/*<p>{JSON.stringify(customer)}</p>*/}




                    </div>

                    {/*<Button rounded={'full'} colorScheme='teal' variant='ghost' onClick={download}>
                        Download Register </Button>*/}

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

