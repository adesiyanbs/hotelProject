<template>
  <c-flex w="100%">
    <c-box h='100vh' w="25%" bg="rgba(0, 131, 201, 0.09)" pl="32px" py="40px">
      <c-box>

        <c-text fontWeight="700" fontSize="25px" mt="20px" color="#267FFF"
          >Welcome</c-text
        >
      </c-box>
      <c-divider mb="15px" mt="23px" />
      <c-box>
        <c-box>
          <c-text fontSize="15px" fontWeight="700">Menu</c-text>
        </c-box>
        <c-box  as='router-link'
        to='/dash'>
          <c-box

          borderTopLeftRadius="10px"
          borderBottomLeftRadius="10px"
          bg="#FBFCFF"
          pt="14px"
          pb="16px"
          pl="11px"
        >
          <c-flex w="50%" justify="space-between">
            <c-box><img src="../../assets/dash.svg" alt=""/></c-box>
            <c-box
              ><c-text fontSize="15px" fontWeight="700"
                >Dashboard</c-text
              ></c-box
            >
          </c-flex>
        </c-box>
        </c-box>
        <c-box as='router-link'
        to='/'>
          <c-box

        mt='20px'
          borderTopLeftRadius="10px"
          borderBottomLeftRadius="10px"
          bg="#FBFCFF"
          pt="14px"
          pb="16px"
          pl="11px"
        >
          <c-flex w="50%" justify="space-between">
            <c-box><img src="../../assets/dash.svg" alt=""/></c-box>
            <c-box
              ><c-text fontSize="15px" fontWeight="700"
                >Book Room</c-text
              ></c-box
            >
          </c-flex>
        </c-box>
        </c-box>
        <c-box
          borderTopLeftRadius="10px"
          borderBottomLeftRadius="10px"

          pt="14px"
          pb="16px"
          pl="11px"
        >
          <c-flex w="50%" justify="space-between">
<!--            <c-box><img src="../../assets/note.svg" alt=""/></c-box>-->
            <c-box
              ><c-text fontSize="15px" fontWeight="700"><a href="https://forms.gle/Qo5kwtBp572EFvWbA">Feedback</a></c-text></c-box
            >
          </c-flex>
        </c-box>
<!--        <c-box-->
<!--          borderTopLeftRadius="10px"-->
<!--          borderBottomLeftRadius="10px"-->
<!--          -->
<!--          pt="14px"-->
<!--          pb="16px"-->
<!--          pl="11px"-->
<!--        >-->
<!--          <c-flex w="50%" justify="space-between">-->
<!--            <c-box><img src="../../assets/setting.svg" alt=""/></c-box>-->
<!--            <c-box-->
<!--              ><c-text fontSize="15px" fontWeight="700">Settings</c-text></c-box-->
<!--            >-->
<!--          </c-flex>-->
<!--        </c-box>-->
      </c-box>
      <c-divider mb="15px" mt="23px" />
      <!-- <c-box>
        <c-box>
          <c-text fontSize="15px" fontWeight="700">Messages</c-text>
        </c-box>
        <c-box boxShadow='lg' mr='29px' borderRadius='15px' bg="#fff" px="24px" py="24px">
          <c-flex justify='space-between' w='80%'>
            <c-box><img src="../../assets/pic.svg" alt=""/></c-box>
            <c-box mt='20px'><img src="../../assets/color.svg" alt=""/></c-box>
            <c-box mt='12px'><c-text fontSize='15px' fontWeight='700'>Adebowale Segun</c-text></c-box>
          </c-flex>
          <c-divider mb="10px" mt="9px" />
          <c-flex justify='space-between' w='80%'>
            <c-box><img src="../../assets/pic.svg" alt=""/></c-box>
            <c-box mt='20px'><img src="../../assets/color.svg" alt=""/></c-box>
            <c-box mt='12px'><c-text fontSize='15px' fontWeight='700'>Adebowale Segun</c-text></c-box>
          </c-flex>
          <c-divider mb="10px" mt="9px" />
          <c-flex justify='space-between' w='80%'>
            <c-box><img src="../../assets/pic.svg" alt=""/></c-box>
            <c-box mt='20px'><img src="../../assets/color.svg" alt=""/></c-box>
            <c-box mt='12px'><c-text fontSize='15px' fontWeight='700'>Adebowale Segun</c-text></c-box>
          </c-flex>
          <c-divider mb="10px" mt="9px" />
          <c-flex justify='space-between' w='80%'>
            <c-box><img src="../../assets/pic.svg" alt=""/></c-box>
            <c-box mt='20px'><img src="../../assets/color.svg" alt=""/></c-box>
            <c-box mt='12px'><c-text fontSize='15px' fontWeight='700'>Adebowale Segun</c-text></c-box>
          </c-flex>


        </c-box>
      </c-box> -->
<!--      <c-box boxShadow='lg' mr='29px' borderRadius='15px' bg="#fff" mt='26px' as='router-link' px="36px" py="24px" to="https://forms.gle/Qo5kwtBp572EFvWbA">-->
<!--          <c-flex>-->
<!--              <c-text fontSize='15px' fontWeight='700' mt='-5px' mr='5px'>Feedback</c-text>-->
<!--              &lt;!&ndash; <c-box><img src="../../assets/bell.svg" alt=""></c-box> &ndash;&gt;-->
<!--          </c-flex>-->
<!--      </c-box>-->
    </c-box>
    <c-box w='75%'>
        <main>
            <router-view></router-view>
        </main>
    </c-box>
  </c-flex>
</template>
<script>
import { CBox, CFlex, CText, CDivider } from "@chakra-ui/vue";
export default {
  name: "Home",
  components: {
    CBox,
    CFlex,

    CText,
    CDivider,
  },
  methods:{
    isLogged(){
      if (!localStorage.getItem('user')){
        this.$router.push('/login')
      }
    }
  },
  mounted() {
    this.isLogged()
  }
};
</script>
