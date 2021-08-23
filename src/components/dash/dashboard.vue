<template>
  <c-box pt="34px" px="46px">
    <c-box float="right">

      <c-box as='router-link' to='/'>
        <c-text mt="10px" fontSize="15px" fontWeight="700" @click="logout">Logout</c-text>
      </c-box>
    </c-box>
    <c-box mt="29px">
      <c-text fontSize="38.6px" fontWeight="700">Welcome</c-text>
      <c-text fontSize="20px" fontWeight="400px" color="#9C9C9C"
      >Dashboard,
      </c-text
      >
    </c-box>
    <c-box>
      <c-flex mt='30px' w='90%' mx='auto' justify='space-between' v-for="book in bookings" v-bind:key="book.key">
        <c-box w='53%' h='400px'>
          <img :src=book.hotel.image>
        </c-box>
        <c-box w='35%' border='1px' py='10px' px='15px'>
          <c-text fontSize='26px' fontWeight='600'>{{ book.hotel.name }}</c-text>
          <c-text>Adults: 1</c-text>
          <c-text>Check In date: {{ book.checkIn }}</c-text>
          <c-box mt='20px'>
            <c-button>₦{{ book.hotel.price }}</c-button>
          </c-box>

        </c-box>
      </c-flex>

    </c-box>

  </c-box>
</template>
<script>
import {CBox, CFlex, CText, CButton} from "@chakra-ui/vue";
import firebase from 'firebase';
import {db} from "../../firebase-config";

export default {
  name: "Dashboard",
  components: {
    CBox,
    CFlex,
    CText,
    CButton
  },
  data(){
    return{
      bookings : [],
    }
  },
  methods: {
    logout() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            localStorage.removeItem('user')
            alert('Successfully logged out');
            this.$router.push('/login');
          })
          .catch(error => {
            alert(error.message);
            this.$router.push('/dash');
          });
    },
    async getBookings() {
      const user = localStorage.getItem('user');
      const response = (await db.ref('bookings').get()).val();

      for (const key of Object.keys(response)) {
        if(response[key].user === user){
          console.log(response[key])
          const hotels = await db.ref('hotels').child(response[key].hotelId)
          hotels.on('value', snapshot =>{
            this.bookings.push({
              id: key,
              adult: response[key].adult,
              checkIn: response[key].checkIn,
              hotel :snapshot.val()
            });
          })

        }
      }
    }
  },
  mounted() {
    this.getBookings()
  }
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
