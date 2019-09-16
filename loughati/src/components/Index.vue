<template lang="html">
  <b-container>
    <b-row class="mt-5">
      <b-col cols="6" id="welcome-text">
        apprends l'arabe plus facilement avec un nouveau système d'apprentissage pensé pour <u>vous</u>
        <br>
        <a>  <ArrowIcon/><span> commencer l'experience</span></a>
      </b-col>
      <b-col cols="6">
        <img src="../assets/images/logo-big.png" id="big-logo">
      </b-col>
    </b-row>

    <b-row class="pt-5 " >
      <b-col cols="3" class="carte">
        <img src="../assets/images/activite-yellow.png">
        <span>APPRENDS L'ARABE <br>EN ECOUTANT</span>
      </b-col>
      <b-col cols="3" class="carte">
        <img src="../assets/images/activite-red.png">
        <span>APPRENDS L'ARABE <br>EN IMAGES</span>
      </b-col>
      <b-col cols="3" class="carte">
        <img src="../assets/images/activite-blue.png">
        <span>APPRENDS L'ARABE <br>EN ECRIVANT</span>
      </b-col>
      <b-col cols="3" class="carte">
        <img src="../assets/images/activite-green.png">
        <span>DÉCOUVRE PLEIN <br>DE NOUVEAUX MOTS <br> <u>avec le dictionnaire</u></span>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
import ArrowIcon from 'vue-material-design-icons/ArrowRight.vue'

export default {
  components: {
    ArrowIcon
  }
}
</script>

<style lang="css" scoped>


#big-logo
{
  width:100%;
}
#welcome-text{
  font-family: 'Radomir Tikov';
  font-size: 40px;
  margin: auto;
  color:black;
}

#welcome-text a {
  color:red;
  font-size: 30px;
}

a:hover{
  text-decoration: none;
}

.carte{
  position: relative;
  display: inline-block;
}

.carte img{
width: 60%;
}

.carte span{
        position: absolute;
        z-index: 999;
        margin: 0 auto;
        left: 10%;
        top: 20%; /* Adjust this value to move the positioned div up and down */
        text-align: center;
        width: 60%; /* Set the width of the positioned div */
        color:#212529;
      font-family: 'Radomir Tikov';
    }
</style>
