import { Flex,  Button, Input,Modal , ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, useDisclosure, Textarea, RadioGroup, Radio, ModalFooter} from "@chakra-ui/react"
import { BiAddToQueue } from "react-icons/bi"


export const CreateUserModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    
    <button onClick={onOpen}>  
      <BiAddToQueue size={20}/>

    </button>

    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >

        <ModalOverlay />

          <ModalContent>  
            <ModalHeader>
                  Add Contact ✔
            </ModalHeader>
            <ModalCloseButton/>

            <ModalBody pd={6}>
                <flex 
                  alignItems={"center"}
                  gap={4}
                >

                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Ren Day"/>
                </FormControl>

                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input placeholder="Prime Minister"/>
                </FormControl>

                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="ak.1@email.com"/>
                </FormControl>

                </flex>

                <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                  resize={"none"}
                  overflow={"hidden"}  
                  placeholder="about.. "/>
                </FormControl>

                <RadioGroup mt={4}>
                    <Flex gap={5}>
                        <Radio value = "male">Male</Radio>
                        <Radio value = "female">Female</Radio>
                    </Flex>                    
                </RadioGroup>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3}>
                    Add
                  </Button>
                  <Button onClick={onClose}>
                    Leave
                  </Button>
                </ModalFooter>

            </ModalBody>
          </ModalContent>       
    </Modal>
    </>
  )
}
