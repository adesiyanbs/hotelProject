<template>
  <c-box pt="34px" px="46px">
    <c-box float="right">
     
      <c-box as='router-link' to='/'><c-text mt="10px" fontSize="15px" fontWeight="700">Logout</c-text></c-box>
    </c-box>
    <c-box mt="29px">
      <c-text fontSize="38.6px" fontWeight="700">Welcome</c-text>
      <c-text fontSize="20px" fontWeight="400px" color="#9C9C9C"
        >Checkout,</c-text
      >
    </c-box>
    <c-box>
      <c-box mt='30px' w='90%' mx='auto' justify='space-between'>
          
          <c-box w='35%' border='1px' py='10px' px='15px'>
              <c-text>Name of Hotel</c-text>
            <c-text fontSize='26px' fontWeight='600'>Booked</c-text>
              <c-text>Adults: 1</c-text>
              <c-text>Check In date: 12/02/2022</c-text>
              <c-text>Price:</c-text>
                <c-box mt='20px'><c-button >Pay</c-button></c-box>
            
          </c-box>
        </c-box>
    </c-box>
    
  </c-box>
</template>
<script>
import { CBox,CText,CButton } from "@chakra-ui/vue";
export default {
  name: "Checkout",
  components: {
    CBox,
    
    CText,
    CButton
  },
};
</script>
<style scoped>
.box {
  background-image: linear-gradient(
    to Bottom,
    rgba(255, 255, 255, 0.07),
    rgba(0, 131, 201, 0.09)
  );
}
</style>
