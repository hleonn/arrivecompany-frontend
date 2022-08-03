import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as PATHS from "../utils/paths";
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
import { SunIcon, TimeIcon, Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/icons'
import QRCode from "react-qr-code";
import {AiOutlineUser} from 'react-icons/ai'



const InfoCustomers = () => {
    const [save, setSave] = useState(true);
    const [cancel, setCancel] = useState(true);
    const [customerName, setCustomerName] = useState('');
    const [DateTime, setDateTime] = useState('');
    const [companyVisit, setcompanyVisit] = useState('');
    const [area, setArea] = useState('');

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
        };
        console.log(datosEnviar)
        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datosEnviar),
        };

        fetch("http://localhost:5005/api/customers", requestOptions)
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
                        }}>Customers
                    </Box>
                        </Heading>
                    </Box>
                </Center>
            </div>
            <Divider orientation='horizontal' />

            {/******* 1 DATA USER ******/}
            <form onSubmit={enviarDatos}>
                <div>
                    {/*<form onSubmit={enviarDatos}>*/}
                    <Stack m={[10, 10]} >
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
                                type="text" placeholder=' Customer Name' fontSize='2em' pt={5} pb={5} pl={10}
                            />
                        </InputGroup>

                    </Stack>
                    {/*</form>*/}
                </div>

                {/*******2 DATE AND TIME*******/}

                <div>
                    <Input
                        onChange={(e) => setDateTime(e.target.value)}
                        value={DateTime}
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local" //Number
                    />
                </div>
                <Divider orientation='horizontal' p={5} />

                {/*******3 DropDown/Select *******/}

                <div>
                    <Center height='50px'>
                        <Select
                            onChange={(e) => setcompanyVisit(e.target.value)}
                            value={companyVisit}
                            type="text"
                            placeholder='Select Company to Visit'>
                            <option value='Umbrella corp'>Umbrella corp</option>
                            <option value='Monsanto'>Monsanto </option>
                            <option value='Bayer'>Bayer </option>
                            <option value='Illumina corp'>Illumina corp</option>
                            <option value='Astra Zeneca'>Astra Zeneca</option>
                            <option value='Theranos'>Theranos</option>

                        </Select>
                        <Divider orientation='vertical' pl={2} pr={2} />
                        {/*<Divider orientation='horizontal' p={5}/>*/}

                        <Select
                            onChange={(e) => setArea(e.target.value)}
                            value={area}
                            type="text"
                            placeholder='Area to Visit'>
                            <option value='Computing Services'>Computing Services</option>
                            <option value='Design'>Design</option>
                            <option value='Exports'>Exports</option>
                            <option value='Maintenance'>Maintenance</option>
                            <option value='Marketing'>Marketing</option>
                            <option value='Planning'>Planning</option>
                            <option value='Production'>Production</option>
                            <option value='Reception'>Reception</option>
                            <option value='Human Resources'>Human Resources</option>
                            <option value='Sales'>Sales</option>
                        </Select>
                    </Center>
                </div>
                <Divider orientation='horizontal' p={5} />



                {/*4 Button variants */}
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
        </>
    );
}
export default InfoCustomers;


