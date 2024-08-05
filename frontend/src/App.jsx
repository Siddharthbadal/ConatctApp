import { useState } from 'react'
import { Stack, Container, Text } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import UserGrid from './components/UserGrid'



function App() {
 

  return (
    <Stack minH={"100vh"}>
        
       <Navbar/>
        <Container maxH={"1200px"} my={4}>
          <Text
            fontSize={{"base":"3xl", md:"50"}}
            fontWeight={"bold"}
            letterSpacing={"2px"}
            textTransform={"uppercase"}
            textAlign={"center"}
            mb={0}

          >
            <Text as={"span"}>
              My Contacts 📢
            </Text>

          </Text>
          </Container>

          <UserGrid/>
    
    
    </Stack>
  )
}

export default App
