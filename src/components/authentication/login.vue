<template>
  <c-box mx='auto' pt="40px" w='90%'>
    <c-flex boxShadow='md' pb='10px' px='10px' w='90%' mx='auto' justify='space-between'>
            <c-box><c-text fontSize='24px' fontWeight='700'>Starklue Hotel</c-text></c-box>
            <c-box as='router-link' to ='/login'><c-text fonSize='16px' mt='15px'>Account</c-text></c-box>
        </c-flex>

    <c-box w="12%" mt="40px" mb="45px" mx="auto"
      ><c-text fontWeight="700" fontSize="40px" color="#267FFF"
        >HOTEL.me</c-text
      ></c-box
    >
    <c-box borderRadius='5px' w="40%" mx="auto" px="37px" class='box' pt="37px">
      <c-box>
        <c-text mb="16px" color='#59647D' fontSize='27px' fontWeight='700' textAlign="center">Welcome Back</c-text>
        <c-text color="#ACACAC" textAlign="center" mb="22px"
          >Enter your credentials to access your dashboard</c-text
        >
      </c-box>
      <c-form-control >
        <c-input-group  mb="36px">

          <c-input borderRadius="5px" h="59x" placeholder="email" v-model="email" />
        </c-input-group>

        <c-input-group mb='48px'>

          <c-input borderRadius="5px" h="59x" placeholder="Password" v-model="password" />
        </c-input-group>

        <c-button  mb='53px' h='50px' color='white' w='100%' borderRadius='12px' bg='#267FFF' fontSize='26px' fontWeight='400' @click="loginUser">Login</c-button>
      </c-form-control>
    </c-box>
    <c-box as='router-link' to='/register' mt='32px' textAlign='center'>
        <c-text>Dont have an account Signup</c-text>
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

} from "@chakra-ui/vue";

// import { db} from "../../firebase-config";
import firebase from 'firebase';


// let app = Firebase.initializeApp(config)
// // eslint-disable-next-line no-unused-vars
// let db = app.database()
// let userRef = db.ref('users')
export default {
  name: "Login",
  components: {
    CBox,
    CFlex,
    CButton,
    CInput,
    CFormControl,
    CText,
    CInputGroup,

  },
  data(){
    return {
      email : '',
      password : ''
    }
  },
  methods:{
    async loginUser(){
      firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((res) => {
          localStorage.setItem('user',res.user.uid)
            this.$router.push('/dash');
          })
          .catch(error => {
            alert(error.message);
          });

    }
  }
};
</script>
<style scoped>
    .box{
        background-image: linear-gradient(to Bottom,rgba(255, 255, 255, 0.07),rgba(0, 131, 201, 0.09));
    }
</style>