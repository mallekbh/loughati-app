<template lang="html">
<b-container>
  <b-row id="title" class="py-3">
    <b-col cols="12">
      <img src="../assets/images/spot-turquoise.png">
      <span>Test de niveau اختبار المستوى</span>
    </b-col>
  </b-row>
  <b-row id="questionnaire" >
    <b-col cols="12">
      <activite :activites="activites"></activite>
    </b-col>
  </b-row>

</b-container>
</template>

<script>
import activite from './UI/activiteImage'
export default {
  data(){
    return{
      activites:[
        {type:'image',
        indication: 'Sélectionner le mot qui correspond à l\'image suivante:',
        corps:'"images/poule.jpeg"',
        propositions:{ type: 'text',
          propositions : ['حصان','سعيد زياني','دجاجة ',' ديك'],
          reponse: 2
        }
      },
      {type:'image',
      indication: 'Sélectionner le mot qui correspond à l\'image suivante:',
      corps:'"images/poule.jpeg"',
      propositions:{ type: 'text',
        propositions : ['حصان','سعيد زياني','دجاجة ',' ديك'],
        reponse: 2
      }
    },
    {type:'image',
    indication: 'Sélectionner le mot qui correspond à l\'image suivante:',
    corps:'"images/poule.jpeg"',
    propositions:{ type: 'text',
      propositions : ['حصان','سعيد زياني','دجاجة ',' ديك'],
      reponse: 2
    }
  },
  {type:'image',
  indication: 'Sélectionner le mot qui correspond à l\'image suivante:',
  corps:'"images/poule.jpeg"',
  propositions:{ type: 'text',
    propositions : ['حصان','سعيد زياني','دجاجة ',' ديك'],
    reponse: 2
  }
}
      ],
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
  font-family: 'Radomir Tikov Bold';
  font-size: 30px;
  position: absolute;
  z-index: 999;
  margin: 0 auto;
  left: 5%;
  top: 20%; /* Adjust this value to move the positioned div up and down */
  width: 60%; /* Set the width of the positioned div */
  color:#212529;

}

#title{
  position: relative;
  display: inline-block;
}

</style>
