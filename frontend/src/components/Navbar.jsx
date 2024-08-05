import { Box, Container, Flex, useColorMode, Button, Text } from "@chakra-ui/react"
import { IoMoonSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { CreateUserModel } from "./CreateUserModel";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxH={"900px"} >

            <Box
                px={4}
                my={4}
                borderRadius={5}
                bg={"gray.700"}
            >
                <Flex h="16"
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    
                    <Flex 
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        gap={3}
                        display={{base:"none", sm:"flex"}}
                    >
                        <img src="/img.png" alt="img" width={50} height={50} />


                    </Flex>


                {/* right navbar */}
                    <Flex 
                        gap={3}
                        alignItems={"center"}
                    >
                    <Text 
                            fontSize={"lg"} 
                            fontWeight={500} 
                            display={{ base: "none", md:"block"}}
                    >
                            🧭
                    </Text>

                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <p> 🌜</p> : <p>🌞</p> }
                    </Button>

                    <CreateUserModel    />

                        
                    </Flex>


                </Flex>
            </Box>
    </Container>
  )
};

export default Navbar;