/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Switch,
  Text,
  Icon,
  DarkMode,
} from "@chakra-ui/react";

// Icons
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
// Custom Components
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";

// Assets
import signUpImage from "assets/img/signUpImage.png";
import { useRef } from "react";

function SignUp() {
  const titleColor = "white";
  const textColor = "gray.400";
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const addedUser = {
      email: enteredEmail,
      password: enteredPassword,
    };

    console.log("add user log", addedUser);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addedUser),
    };
    fetch("https://reqres.in/api/register", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log("Data print", data));
  };

  return (
    <Flex position="relative" overflow={{ lg: "hidden" }}>
      <Flex
        flexDirection="column"
        h={{ sm: "initial", md: "unset" }}
        w={{ base: "90%" }}
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        pt={{ sm: "100px", md: "0px" }}
        me={{ base: "auto", lg: "50px", xl: "auto" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          flexDirection="column"
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb="50px"
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction="column"
            textAlign="center"
            justifyContent="center"
            align="center"
            mt={{ base: "60px", md: "140px", lg: "200px" }}
            mb="50px"
          >
            <Text
              fontSize="4xl"
              lineHeight="39px"
              color="white"
              fontWeight="bold"
            >
              Welcome!
            </Text>
          </Flex>
          <GradientBorder p="2px" me={{ base: "none", lg: "30px", xl: "none" }}>
            <Flex
              background="transparent"
              borderRadius="30px"
              direction="column"
              p="40px"
              minW={{ base: "unset", md: "430px", xl: "450px" }}
              w="100%"
              mx={{ base: "0px" }}
              bg={{
                base: "rgb(19,21,56)",
              }}
            >
              <Text
                fontSize="xl"
                color={textColor}
                fontWeight="bold"
                textAlign="center"
                mb="22px"
              >
                Register With Us
              </Text>

              <FormControl>
                <FormLabel
                  color={titleColor}
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                >
                  Email
                </FormLabel>
                <GradientBorder
                  mb="24px"
                  h="50px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)",
                    }}
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="46px"
                    type="email"
                    placeholder="Your email address"
                    ref={emailInputRef}
                  />
                </GradientBorder>
                <FormLabel
                  color={titleColor}
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                >
                  Password
                </FormLabel>
                <GradientBorder
                  mb="24px"
                  h="50px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)",
                    }}
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="46px"
                    type="password"
                    placeholder="Your password"
                    ref={passwordInputRef}
                  />
                </GradientBorder>
                <Button
                  variant="brand"
                  fontSize="10px"
                  type="submit"
                  w="100%"
                  maxW="350px"
                  h="45"
                  mb="20px"
                  mt="20px"
                  onClick={submitHandler}
                >
                  SIGN UP
                </Button>
              </FormControl>
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                maxW="100%"
                mt="0px"
              >
                <Text color={textColor} fontWeight="medium">
                  Already have an account?
                  <Link
                    color={titleColor}
                    as="span"
                    ms="5px"
                    href="#"
                    fontWeight="bold"
                  >
                    Sign In
                  </Link>
                </Text>
              </Flex>
            </Flex>
          </GradientBorder>
        </Flex>
        <Box
          w={{ base: "335px", md: "450px" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb="90px"
        >
          <AuthFooter />
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          overflowX="hidden"
          h="1300px"
          maxW={{ md: "50vw", lg: "48vw" }}
          w="960px"
          position="absolute"
          left="0px"
        >
          <Box
            bgImage={signUpImage}
            w="100%"
            h="1300px"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="absolute"
          >
            <Text
              textAlign="center"
              color="white"
              letterSpacing="8px"
              fontSize="20px"
              fontWeight="500"
            >
              INSPIRED BY THE FUTURE:
            </Text>
            <Text
              textAlign="center"
              color="transparent"
              letterSpacing="8px"
              fontSize="36px"
              fontWeight="bold"
              bgClip="text !important"
              bg="linear-gradient(94.56deg, #FFFFFF 79.99%, #21242F 102.65%)"
            >
              THE VISION UI DASHBOARD
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignUp;
