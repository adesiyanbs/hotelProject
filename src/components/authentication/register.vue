<template>
  <c-box mx='auto' pt="40px" w='90%'>
    <c-flex boxShadow='md' pb='10px' px='10px' w='90%' mx='auto' justify='space-between'>
            <c-box><c-text fontSize='24px' fontWeight='700'>Hotel.me</c-text></c-box>
            <c-box as='router-link' to ='/login'><c-text fonSize='16px' mt='15px'>Account</c-text></c-box>
        </c-flex>

    <c-box w="12%" mt="40px" mb="45px" mx="auto"
      ><c-text fontWeight="700" fontSize="40px" color="#267FFF"
        >HOTEL.me</c-text
      ></c-box
    >
    <c-box borderRadius='5px' w="40%" mx="auto" px="37px" class='box' pt="37px">
      <c-box>
        <c-text mb="16px" color='#59647D' fontSize='27px' fontWeight='700' textAlign="center">REGISTER</c-text>
        <c-text color="#ACACAC" textAlign="center" mb="22px"
          >Enter your credentials </c-text
        >
      </c-box>
      <c-form-control >
          <c-form-label>Fullname</c-form-label>
        <c-input-group  mb="36px">
         
          <c-input borderRadius="5px" h="59x" placeholder="fullname" />
        </c-input-group>
      </c-form-control>
      <c-form-control >
          <c-form-label>Email</c-form-label>
        <c-input-group  mb="36px">
         
          <c-input borderRadius="5px" h="59x" placeholder="email" type='email' />
        </c-input-group>
      </c-form-control>
      <c-form-control >
          <c-form-label>Username</c-form-label>
        <c-input-group  mb="36px">
         
          <c-input borderRadius="5px" h="59x" placeholder="username" />
        </c-input-group>
      </c-form-control>
      <c-form-control>
          <c-form-label>Password</c-form-label>
        <c-input-group mb='48px'>
         
          <c-input borderRadius="5px" h="59x" placeholder="Password" />
        </c-input-group>

        
      </c-form-control>
      <c-button as='router-link' to='/' mb='53px' h='50px' color='white' w='100%' borderRadius='12px' bg='#267FFF' fontSize='26px' fontWeight='400' >Register</c-button> 
    </c-box>
    <c-box as='router-link' to='/login' mt='32px' textAlign='center'>
        <c-text>Already have an account Login</c-text>
    </c-box>
  </c-box>
</template>
<script>
import {
  CBox,
  CInput,
  CFormControl,
  CFlex,
  CButton,
  CText,
  CInputGroup,
  CFormLabel
} from "@chakra-ui/vue";
export default {
  name: "Register",
  components: {
    CBox,
    CFlex,
    CButton,
    CInput,
    CFormControl,
    CText,
    CInputGroup,
    CFormLabel
  },
};
</script>
<style scoped>
    .box{
        background-image: linear-gradient(to Bottom,rgba(255, 255, 255, 0.07),rgba(0, 131, 201, 0.09));
    }
</style>