<template>
    <c-box pt='30px' >
        <c-flex boxShadow='md' pb='10px' px='10px' w='90%' mx='auto' justify='space-between'>
            <c-box><c-text fontSize='24px' fontWeight='700'>Starklue Hotel</c-text></c-box>
            <c-box as='router-link' to ='/login'><c-text fonSize='16px' mt='15px'>Account</c-text></c-box>
        </c-flex>
<!--        <c-box w='90%' mx='auto'  pt='100px' >-->
<!--            <c-box>-->
<!--                <c-text fontSize='30px' fontWeight='700' textAlign='center'>Find and book hotels in Nigeria</c-text>-->
<!--                <c-text fontSize='20px' fontWeight='400' textAlign='center'>Search through 00,000 hotels in Nigeria</c-text>-->
<!--            </c-box>-->
<!--            <c-form-control mt='30px' w='90%' mx='auto' >-->
<!--                <c-flex w='80%' mx='auto' justify='space-between'>-->
<!--                <c-input w='50%' placeholder='Search for a hotel' />-->
<!--                <c-input w='45%' placeholder='Search for a hotel' />-->

<!--                </c-flex>-->
<!--               <c-box w='10%' mt='20px'  mx='auto'> <c-button py='12px' px='24px' h='48px' >Find Hotel</c-button></c-box>-->
<!--            </c-form-control>-->
<!--        </c-box>-->
        <c-box mt='30px' w='90%' mx='auto'>
            <c-box><c-text fontSize='30px' fontWeight='500' textAlign='center'> Top Rooms Today</c-text></c-box>
            <c-grid templateColumns='repeat(3,1fr)'>
                <c-box w='90%' h='auto' border='1px' borderColor='#e5e5e5' mb='30px' v-for="hotel in hotels" v-bind:key="hotel.key">
                    <c-box  w='100%' h='300px' mb='30px' @click="setOne(hotel.id)" >
                      <img :src=hotel.image>
                    </c-box>
                    <c-box pt='20px' pb='10px' px='10px'>
                        <c-text fontSize='27px' fontWeight='600' color='blue.200'>{{hotel.name}}</c-text>
                        <c-text>{{hotel.address}}</c-text>
                    </c-box>
                </c-box>
            </c-grid>
        </c-box>
    </c-box>
</template>
<script>
import { CBox, CFlex, CText,CFormControl,CInput,CButton,CGrid} from "@chakra-ui/vue";
import {db} from "../../firebase-config";

export default {
  name: "Home",
  components: {
    CBox,
    CFlex,
    CText,CFormControl,CInput,CButton,CGrid
  },
  data(){
    return{
    hotels :[]
  }},
  methods:{
  async  getHotels(){
  const data  =  await db.ref('hotels')
  data.on('value', snapshot =>{
    let value = snapshot.val();

    Object.keys(value).forEach(key => {
      this.hotels.push({
        id: key,
        name: value[key].name,
        image: value[key].image,
        address : value[key].address,
        description : value[key].description
      });
    });
  })
    // const hotels = await hotelsCollection.
    //  (await hotelsCollection.get()(snapshot => {
    //    console.log(snapshot)
    //    snapshot.forEach(doc => {
    //      let post = doc.data()
    //      post.id = doc.id
    //      this.hotels.push(post)
    //    })
    // }));
  },
    setOne(id){
    localStorage.setItem('room', id);
    this.$router.push('/singlePage')
    },

  },
  mounted() {
    this.getHotels()
  }
};
</script>
