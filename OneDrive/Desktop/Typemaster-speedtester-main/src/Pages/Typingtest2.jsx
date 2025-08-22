import { Box, Image, Text, Button, Heading, useDisclosure } from '@chakra-ui/react';
import {
    Table, Thead, Tbody, Tr, Th, Td, TableContainer,
} from '@chakra-ui/react';
import {
    AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader,
    AlertDialogContent, AlertDialogOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { GrCertificate } from "react-icons/gr";
import { SlSpeedometer } from "react-icons/sl";
import { GiOnTarget } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { VscDebugStart } from "react-icons/vsc";


function HindiTest() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const handleStartHindiTest = () => {
        navigate("/test/hindi");
    };
    

    return (
        <Box w={{ base: 'auto', lg: '100%' }} h='auto'>
            <Box bg='#577b87' h={{ base: '130vh', sm: '98vh', md: "80vh", lg: '80vh', xl: '70vh' }} p={{ base: '1rem', md: '0rem' }}>
                <Box w={{ base: 'auto', sm: '70%' }} m='auto' display={{ base: 'grid', sm: 'flex', md: 'flex' }} flexDirection='row' gap={10}>
                    <Box>
                        <Image w='auto' borderRadius={20} src='https://i.pinimg.com/originals/3f/82/40/3f8240fa1d16d0de6d4e7510b43b37ba.gif' />
                    </Box>
                    <Box m='auto' flexDirection='column'>
                        <Heading textAlign='start' color='white'>हिंदी टाइपिंग टेस्ट</Heading>
                        <Text textAlign='start' p='1.65rem 0' color='white' fontSize={18}>
                            आप यहाँ हिंदी टाइपिंग गति (WPM) का परीक्षण कर सकते हैं और प्रमाणपत्र प्राप्त कर सकते हैं। 
                            अपनी टाइपिंग गति जाँचें, सुधारें और प्रमाणपत्र के साथ अपने मित्रों या नियोक्ताओं को प्रभावित करें।
                        </Text>
                        <Button bg='#e7b75f' p={{ base: '10px', md: '2rem' }} _hover={{ bg: "yellow.300", color: 'brown' }} fontSize='20px' onClick={handleStartHindiTest}>
                            मुफ्त हिंदी टाइपिंग टेस्ट शुरू करें
                        </Button>

                        <AlertDialog isOpen={isOpen} onClose={onClose} isCentered size={{ base: 'xs', lg: "2xl" }}>
                            <AlertDialogOverlay>
                                <AlertDialogContent>
                                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                        <Text bg='beige' w='150px' h='150px' borderRadius='50%' m='auto' p={{ base: '10% 10.8%', lg: "5% 5.8%" }}>
                                            <VscDebugStart fontSize={90} fill='green' />
                                        </Text>
                                    </AlertDialogHeader>

                                    <AlertDialogBody m='auto' fontSize={{ base: 15, lg: 23 }} fontWeight='600'>
                                        <Text display='flex'>
                                            आप हमारी सहायता कर सकते हैं और <span>
                                                <Link to='/donate'>
                                                    <Text pl={2} _hover={{ color: "blue", textDecoration: 'underline' }}>दान करें</Text>
                                                </Link>
                                            </span>
                                        </Text>
                                    </AlertDialogBody>

                                    <AlertDialogFooter m='1rem auto'>
                                        <Button onClick={onClose} colorScheme='whatsapp' p='2rem 2.5rem' fontSize={{ base: 18, lg: 30 }}>
                                            <Link to="/testspeed/hindi">हिंदी टेस्ट शुरू करें</Link>
                                        </Button>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialogOverlay>
                        </AlertDialog>
                    </Box>
                </Box>
            </Box>

            {/* Certificate Section */}
            <Box w={{ base: 'auto', lg: '70%' }} bg='white' m='-10rem auto 0' border='2px solid red' borderRadius={15}>
                <Image w='50%' m='auto' h={{ base: 'auto', lg: 400 }} src='https://img.freepik.com/premium-vector/gold-silver-bronze-medals-flat-style-icon-set_201904-154.jpg?w=2000' />
                <Box display={{ base: 'grid', md: "grid", lg: 'flex' }} w={{ base: 'auto', lg: '100%' }} m='auto' flexDirection='row' gap={10}>
                    <Box w={{ base: 'auto', lg: '70%' }} m={{ base: "01 2rem", sm: 'auto' }} color='black'>
                        <TableContainer>
                            <Table variant='simple' textAlign={'center'}>
                                <Thead>
                                    <Tr display='flex' flexDirection='row' justifyContent='space-between'>
                                        <Th display='flex' gap='5px'><GrCertificate />प्रमाणपत्र</Th>
                                        <Th display='flex' gap='5px'><SlSpeedometer />गति</Th>
                                        <Th display='flex' gap='5px'><GiOnTarget />सटीकता</Th>
                                    </Tr>
                                </Thead>
                                <Tbody fontWeight='500' color={'black'}>
                                    <Tr display='flex' justifyContent='space-between'>
                                        <Td display='flex'><Image w={30} src='https://cdn.vectorstock.com/i/preview-1x/65/82/silver-rosette-vector-996582.jpg' /><Text pt={2}>प्लैटिनम</Text></Td>
                                        <Td>70 WPM</Td>
                                        <Td>99.5%</Td>
                                    </Tr>
                                    <Tr display='flex' justifyContent='space-between'>
                                        <Td display='flex'><Image w={35} src='https://static.vecteezy.com/system/resources/previews/005/724/486/original/gold-circle-medal-with-red-ribbon-golden-round-trophy-for-first-place-of-competition-metal-award-for-leader-on-white-background-honor-victory-prize-isolated-illustration-vector.jpg' /><Text pt={3}>स्वर्ण</Text></Td>
                                        <Td>50 WPM</Td>
                                        <Td>98.7%</Td>
                                    </Tr>
                                    <Tr display='flex' justifyContent='space-between'>
                                        <Td display='flex'><Image w={30} src='https://t3.ftcdn.net/jpg/04/87/34/18/360_F_487341885_43bjb9IUYv8c7Fhxm5kp9KgvWgZUeNMo.jpg' /><Text pt={2}>रजत</Text></Td>
                                        <Td>40 WPM</Td>
                                        <Td>96%</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>

                        <Box m='1rem' p='1rem'>
                            <Text fontSize={18} color='black'>
                                आप जितनी बार चाहें टेस्ट दे सकते हैं! केवल आपकी सर्वोत्तम स्कोर गिना जाएगा।
                            </Text>
                            <Box display='flex' mt={5} color='blue' fontSize={20} fontWeight='500' _hover={{ textDecoration: "underline", gap: "1.5rem" }} gap='0.5rem' onClick={handleStartHindiTest}>
                                <Text><Link to='/testspeed/hindi'>हिंदी टाइपिंग टेस्ट लें</Link></Text>
                                <Text pt={1} fontSize={22}><AiOutlineArrowRight /></Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
export default HindiTest;
