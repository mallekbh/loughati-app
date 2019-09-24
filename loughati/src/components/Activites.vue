<template lang="html">
  <b-container>
    <b-row id="title" class="py-3">
      <b-col cols="12">
        <img src="../assets/images/spot-turquoise.png">
        <h1>Activités <span class="arabic">تمارين</span></h1>
      </b-col>
    </b-row>
    <b-row id="questionnaire" >
      <b-col cols="12">
        <div :key="step">
          <div v-if="step == 1">
            <activiteAudio :activities="activities"></activiteAudio> 
          </div>
          <div v-else-if="step == 2">
            <activiteAudio2 :activities="activities"></activiteAudio2>
          </div>
          <div v-else-if="step == 3">
            <activiteAudio3 :activities="activities"></activiteAudio3>
          </div>
          <div v-else>
            <activiteAudio :activities="activities"></activiteAudio>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<!-- ////////////////////////////////////////////////////////////////////////////////// -->

<script>
  import axios from 'axios';
  import activiteImage from './UI/activiteImage'
  import activiteAudio from './UI/activiteAudio'
  import activiteAudio2 from './UI/activiteAudio2'
  import activiteAudio3 from './UI/activiteAudio3'
  import activiteText from './UI/activiteText'
  export default {
    data(){
      var step = this.$route.params.step
      var propos = ['حِصَانْ','زرافة','دجاجة ',' دِيكٌ']
      var shuff = propos.slice(0)

      shuff = shuff.sort(() => Math.random() - 0.5)

      var activities = [
            { 
              type:'audio',
              indication: 'Quel mot est prononcé en cliquant sur le cercle bleu ? : ',
              propositions:{ 
                type: 'text',
                propositions : propos,
                shuffled : shuff,
                reponse: 1
              }
            }
          ]

      console.log("current step is " + step)
      // switch (step) {
      //   case 1:
      //     activities = [
      //       { 
      //         type:'audio',
      //         indication: 'Quel mot est prononcé en cliquant sur le cercle bleu ? : ',
      //         propositions:{ 
      //           type: 'text',
      //           propositions : ['حِصَانْ','سعيد زياني','دجاجة ',' دِيكٌ'],
      //           reponse: 2
      //         }
      //       }
      //     ];
      //     break;
      //   case 2:
      //     activities = [
      //       {
      //         type:'audio',
      //         indication: 'Quel mot est prononcé en cliquant sur le cercle bleu ? : ',
      //         propositions:{ 
      //           type: 'text',
      //           propositions : ['حِصَانْ','سعيد زياني','دجاجة ',' دِيكٌ'],
      //           reponse: 2
      //         }
      //       }
      //     ];
      //     break;
      //   case 3:
      //     break;

      // }
      console.log("this is the activities object " + activities)
      //   axios.get('http://localhost:5000/api/dico/')
      // .then(response => {
      //   // JSON responses are automatically parsed.
      //   propositions = response.data
      //   console.log(propositions)
      // })
      // .catch(e => {
      //   this.errors.push(e)
      // })
      return{
        step: step,
        activities: activities,
      }
    },
    components: {
      activiteImage,
      activiteAudio,
      activiteAudio2,
      activiteAudio3,
      activiteText
    },
  }
</script>

<!-- ////////////////////////////////////////////////////////////////////////////////// -->

<style lang="css" scoped>
  #title img{
    width:15%;
  }
   #title h1 {font-family: 'Radomir Tikov Bold'; font-size: 30px; position: absolute; z-index: 999; margin: 0 auto;left: 5%;top: 20%; width: 60%; color:#212529;
    }
    #title .arabic {font-size: 25px;}
    .arabic { font-family: 'Abdo Master'; }

  #title{
    position: relative;
    display: inline-block;
  }
</style>
