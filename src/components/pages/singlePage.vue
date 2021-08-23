<template>
    <c-box w='90%' mx='auto' pt='24px'>
       <c-flex boxShadow='md' pb='10px' px='10px' w='90%' mx='auto' justify='space-between'>
            <c-box><c-text fontSize='24px' fontWeight='700'>Starklue Hotel</c-text></c-box>
            <c-box><c-text fonSize='16px' mt='15px'>Account</c-text></c-box>
        </c-flex>
        <c-flex mt='30px' w='90%' mx='auto' justify='space-between'>
          <c-box w='53%'  h='400px'>
            <img :src=hotel.image>
          </c-box>
          <c-box w='45%' border='1px' py='10px' px='15px'>
            <c-text fontSize='26px' fontWeight='600'>{{ hotel.name }}</c-text>
            <c-text>Price: {{hotel.price}}</c-text>
            <c-box>
              <c-form-control w='100%'>
                <c-flex w='100%' justify='space-between'>
                  <c-form-control w='70%'>
                    <c-form-label>Check In</c-form-label>
                    <c-input  placeholder='date' type='date'/>
                  </c-form-control>
                  <c-form-control>
                    <c-form-label w='20%'>Adults</c-form-label>
                    <c-input  placeholder='' type='number'/>
                  </c-form-control>
                </c-flex>
                <c-select mt='30px' placeholder='Room Type'>
                  <option>Standard</option>
                  <option>Master</option>
                </c-select>
                <c-box mt='20px'><c-button @click="bookRoom" >Book Now</c-button></c-box>
              </c-form-control>
            </c-box>
          </c-box>
        </c-flex>
    </c-box>
</template>
<script>
import { CBox, CFlex, CText,CFormControl,CInput,CButton,CSelect,CFormLabel} from "@chakra-ui/vue";
import {db} from "../../firebase-config";
export default {
  name: "SinglePage",
  components: {
    CBox,
    CFlex,
    CText,CFormControl,CInput,CButton,CSelect,CFormLabel
  },
  data(){
    return{
      hotel : {}
    }
  },
  methods:{
    bookRoom(){
      this.$launchFlutterwave({
        tx_ref: Date.now(),
        amount: this.hotel.price/100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'user@gmail.com',
          phonenumber: '08102909304',
          name: 'yemi desola'
        },
        callback: function(data) {
          console.log(data)
        },
        customizations: {
          title: 'Bowen Hotel',
          description: 'Payment for items in cart',
          logo: this.hotel.image
        }
      })
    },
    getHotel(){
      const id = localStorage.getItem('room')
      const response = db.ref('hotels').child(id)
      response.on('value', snapshot =>{
        let value = snapshot.val();
        console.log(value)
        this.hotel = value
      })
    }
  },
  mounted() {
    this.getHotel();
  }
};
</script>
