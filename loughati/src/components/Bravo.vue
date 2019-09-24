<template lang="html">
<b-container>
  <b-row id="title" class="py-3">
    <b-col cols="12 contenu">
      <img src="../assets/images/spot-turquoise.png">
      <h1>Test de niveau <span class="arabic"> اختبار المستوى</span></h1>
    </b-col>
  </b-row>
  <b-row class="py-5" id="content" >
    <b-col cols="12 ">
      <p class="message">
        <b>Bravo! vous êtes arrivé au bout du test</b></p><img src="../assets/icons/bravo.png" alt="" />
      </p>
    </b-col>
  </b-row>
  <b-row class="py-5" id="links" >
    <b-col cols="12">
      <a @click="leftGoTo" class="left_link" href="">ALLEZ AU DICO</a>
      <a @click="rightGoTo" class="right_link" href="">REPASSER LE TEST</a>
    </b-col>
  </b-row>

</b-container>
</template>

<script>
import router from '../router'
export default {
  data(){
    return{}
  },
  methods: {
    leftGoTo() {
      router.push({path: "/dico"});
    },
    rightGoTo() {
      router.push({path: "/activities/1"});
    }
  }
}
</script>

<style lang="css" scoped>
  #title img{ width:15%; }
  #title h1 {font-family: 'Radomir Tikov Bold'; font-size: 30px; position: absolute; z-index: 999; margin: 0 auto;left: 5%;top: 20%; width: 60%; color:#212529;
  }
  #title .arabic {font-size: 25px;}
  .arabic { font-family: 'Abdo Master'; }
  #title{ position: relative; display: inline-block; }
  #content { color:#212529; font-family: 'Radomir Tikov';}
  #content h3 { color:#e03131; font-size: 20px; }

  #content div{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #content div p {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  #content img {
    width: 2.2%;
    margin-left: 10px;
  }

  #content .message {
    font-size:20px;
  }

  #links div {
    display: flex;
    justify-content: center;
  }



  #links .left_link {
        padding: 5px 30px;
    background-color: #28a7e7;
    color: #fff;
    border-radius: 50px;
    font-size: 15px;
    font-weight: bold;
  }

  #links .right_link {
    color:#28a7e7;
    padding: 5px 30px;
    font-size: 15px;
    font-weight: bold;
}
</style>
