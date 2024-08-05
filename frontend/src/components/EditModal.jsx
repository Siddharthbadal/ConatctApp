import { Flex,  Button, Input,Modal , ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, useDisclosure, Textarea,  ModalFooter, IconButton} from "@chakra-ui/react"
import { BiEditAlt } from "react-icons/bi"


export const EditModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    
    <IconButton
				onClick={onOpen}
				variant='ghost'
				colorScheme='blue'
				aria-label='See menu'
				size={"sm"}
				icon={<BiEditAlt size={20} />}
			/>

    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >

        <ModalOverlay />

          <ModalContent>  
            <ModalHeader>
                  Edit Contact ✔
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
