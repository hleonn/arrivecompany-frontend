import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from '@chakra-ui/react'
import { FaUserAlt, FaLock } from '@chakra-ui/icons'//"react-icons/fa";

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.CUSTOMERS);
    });
  }

  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.700" />
          <Heading color="Green">Welcome</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>

            <div>

              <form onSubmit={handleFormSubmission} className="auth__form"> {/*Check class */}
                <Stack
                  spacing={4}
                  p="1rem"
                  backgroundColor="whiteAlpha.900"
                  boxShadow="md"
                >
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                      // children={<CFaUserAlt color="gray.300" />}
                      />
                      <Input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={username}
                        onChange={handleInputChange}
                        required
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                      // children={<CFaUserAlt color="gray.300" />}
                      />
                      <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleInputChange}
                        required
                        minLength="8"
                      />
                    </InputGroup>
                  </FormControl>

                  {error && (
                    <div className="error-block">
                      <p>There was an ERROR submiting the form:</p>
                      <p>{error.message}</p>
                    </div>
                  )}
                  <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="whatsapp"
                  width="full"
                  >
                  Signup
                </Button> {/* Change button */}
                </Stack>
              </form>
              <Box>
                  New to us?{" "}
                  <Link color='teal.900' href="#"> {/*'teal.500'*/}
                    Sign Up
                  </Link>
                </Box>
            </div>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
