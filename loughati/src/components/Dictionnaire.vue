<template lang="html">
<b-container fluid>
  <b-row id="title" >
    <b-col cols="12">
      <img src="../assets/images/spot-turquoise.png">
      <span>Dictionnaire قاموس</span>
    </b-col>
  </b-row>
  <b-row id="questionnaire" >
    <b-col cols="12">
    </b-col>
  </b-row>

</b-container>
</template>

<script>
import activite from './UI/activite'
export default {
  data(){
    return{

    }
  },
  components: {
    activite
  }
}
</script>

<style lang="css" scoped>
#title img{
  width:15%;
}
#title span{
  font-family: 'Radomir Tikov';
  font-size: 30px;
  position: absolute;
  z-index: 999;
  margin: 0 auto;
  left: 5%;
  top: 20%; /* Adjust this value to move the positioned div up and down */
  text-align: center;
  width: 60%; /* Set the width of the positioned div */
  color:#212529;

}

#title{
  position: relative;
  display: inline-block;
}

</style>
