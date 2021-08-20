<template>
    <c-box pt='30px' >
        <c-flex boxShadow='md' pb='10px' px='10px' w='90%' mx='auto' justify='space-between'>
            <c-box><c-text fontSize='24px' fontWeight='700'>Hotel.me</c-text></c-box>
            <c-box as='router-link' to ='/login'><c-text fonSize='16px' mt='15px'>Account</c-text></c-box>
        </c-flex>
        <c-box w='90%' mx='auto'  pt='100px' >
            <c-box>
                <c-text fontSize='30px' fontWeight='700' textAlign='center'>Find and book hotels in Nigeria</c-text>
                <c-text fontSize='20px' fontWeight='400' textAlign='center'>Search through 00,000 hotels in Nigeria</c-text>
            </c-box>
            <c-form-control mt='30px' w='90%' mx='auto' >
                <c-flex w='80%' mx='auto' justify='space-between'>
                <c-input w='50%' placeholder='Search for a hotel' />
                <c-input w='45%' placeholder='Search for a hotel' />
                
                </c-flex>
               <c-box w='10%' mt='20px'  mx='auto'> <c-button py='12px' px='24px' h='48px' >Find Hotel</c-button></c-box>
            </c-form-control>
        </c-box>
        <c-box mt='30px' w='90%' mx='auto'>
            <c-box><c-text fontSize='30px' fontWeight='500' textAlign='center'> Top Hotels Today</c-text></c-box>
            <c-grid templateColumns='repeat(3,1fr)'>
                <c-box as='router-link' to='/singlepage' w='90%' h='auto' border='1px' borderColor='#e5e5e5' mb='30px'>
                    <c-box  bg='red.300' w='100%' h='300px' mb='30px'></c-box>
                    <c-box pt='20px' pb='10px' px='10px'>
                        <c-text fontSize='27px' fontWeight='600' color='blue.200'>The Lounge Hotel</c-text>
                        <c-text>Lekki Phase 1, Lagos</c-text>
                    </c-box>
                </c-box>
                 <c-box w='90%' h='auto' bg='blue.300' mb='30px'>
                    <c-box bg='red.300' w='100%' h='300px' mb='30px'></c-box>
                    <c-box pt='20px' pb='10px' px='10px'>
                        <c-text fontSize='27px' fontWeight='600' color='blue.200'>The Lounge Hotel</c-text>
                        <c-text>Lekki Phase 1, Lagos</c-text>
                    </c-box>
                </c-box>
                 <c-box w='90%' h='auto' bg='blue.300' mb='30px'>
                    <c-box bg='red.300' w='100%' h='300px' mb='30px'></c-box>
                    <c-box pt='20px' pb='10px' px='10px'>
                        <c-text fontSize='27px' fontWeight='600' color='blue.200'>The Lounge Hotel</c-text>
                        <c-text>Lekki Phase 1, Lagos</c-text>
                    </c-box>
                </c-box>
                 <c-box w='90%' h='auto' bg='blue.300' mb='30px'>
                    <c-box bg='red.300' w='100%' h='300px' ></c-box>
                    <c-box pt='20px' pb='10px' px='10px'>
                        <c-text fontSize='27px' fontWeight='600' color='blue.200'>The Lounge Hotel</c-text>
                        <c-text>Lekki Phase 1, Lagos</c-text>
                    </c-box>
                </c-box>
               
            </c-grid>
        </c-box>
    </c-box>
</template>
<script>
import { CBox, CFlex, CText,CFormControl,CInput,CButton,CGrid} from "@chakra-ui/vue";
export default {
  name: "Home",
  components: {
    CBox,
    CFlex,
    CText,CFormControl,CInput,CButton,CGrid
  },
};
</script>
