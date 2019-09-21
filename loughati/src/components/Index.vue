<template lang="html">
  <b-container>
    <b-row class="mt-5" style="margin: 3rem 0rem 3rem 0rem !important;}">
      <b-col cols="6" id="welcome-text">
        <p>Apprends l'arabe plus facilement avec un nouveau système d'apprentissage pensé pour <u>vous</u></p>
        <a>  <ArrowIcon/><span> commencer l'experience</span></a>
      </b-col>
      <b-col cols="6">
        <img src="../assets/images/logo-big.png" id="big-logo">
      </b-col>
    </b-row>
    <b-row class="pt-5" >
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
  width:75%;
  position: relative;
  left: 60px;
}
#welcome-text{
  font-family: 'Radomir Tikov Bold';
  font-size: 38px;
  margin: auto;
  line-height: 36px;
  color: #212529;
}

#welcome-text a {
  color:#e03131;
  font-size: 20px;
}

a:hover{
  text-decoration: none;
}

.carte{
  position: relative;
  display: flex;
  align-items: center;
}

.carte img{
width: 47%;
}

.carte span{
  font-size: 15px;
        position: absolute;
        z-index: 999;
        margin: 0 auto;
        text-align: center;
        width: 60%; /* Set the width of the positioned div */
        color:#212529;
      font-family: 'Radomir Tikov Medium';
      font-weight: bold;
    line-height: 18px;
    font-weight: bold;
    }

.carte span u {
  font-size: 13px;
}
</style>

