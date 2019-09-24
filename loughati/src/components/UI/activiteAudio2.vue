<template lang="html">
  <b-container fluid>
    <b-row id="typeActivite">
      <b-col cols="12" style="position: relative; bottom: 15px; left: 5px; font-size:12px;">
        <span>{{renderTypeText(activities[numActivite-1].type)}}</span>
      </b-col>
    </b-row>

    <b-row id="indicationActivite">
      <b-col cols="12">
        <span>{{activities[numActivite-1].indication}}</span>
      </b-col>
    </b-row>

    <b-row id="corpsActivite" align-h="center">
      
      <b-col cols="4" id="playButton">
        <div id="solWrittenForm">{{activities[0].propositions.propositions[activities[0].propositions.reponse]}}</div>
        <!-- <button@click="speakUp" v-bind:reponse="activities[0].propositions.propositions[activities[0].propositions.reponse]">
          <img src="../../assets/icons/play-button.svg" alt="">
        </button> -->
      </b-col>
    </b-row>

    <b-row id="propositions">
      <!-- <b-form-group>
        <b-form-radio-group id="radio-slots" v-model="selected" :options="options" name="radio-options-slots">
          <b-form-radio v-bind:value="{propo}"  v-for="propo in activities[numActivite-1].propositions.propositions" :key="propo.key">{{propo}}</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
    <div class="mt-3">Selected: <strong>{{ selected["propo"] }}</strong></div> -->
      <b-col cols="3" v-for="propo in activities[numActivite-1].propositions.propositions" :key="propo.key" >
        <button@click="speakUp" v-bind:reponse="propo">
          <img src="../../assets/icons/play-button.svg" alt="">
        </button>
      </b-col>

      <b-form-group>
        <b-form-radio-group id="radio-slots" v-model="selected" :options="options" name="radio-options-slots">
          <b-form-radio v-bind:value="{propo}"  v-for="propo in activities[numActivite-1].propositions.propositions" :key="propo.key"></b-form-radio>
        </b-form-radio-group>
      </b-form-group>


    </b-row>

    <b-row id="footer">
      <b-col offset="5" cols="1">
        <button @click="checkAnswer(activities[0].propositions.propositions[activities[0].propositions.reponse])">
          <img src="../../assets/images/spot-green.png">
          <span>Valider</span>
        </button>
      </b-col>
      <b-col cols="1">
        <button @click="goTo">
          <img src="../../assets/images/spot-grey.png">
          <span>Passer</span>
        </button>
      </b-col>
      <b-col offset="3" cols="1" id="pagination">
          <span>{{numActivite}}/{{activities.length}}</span>
      </b-col>
    </b-row>


  </b-container>
</template>

<script>
import router from '../../router'
export default {
  data(){
    return{
      numActivite: 1,
      answer: false,
      selected: ''
    }
  },
  methods: {
  renderTypeText(item) {
    if(item === "image"){return "> APPRENDRE EN IMAGES"}
    else if (item === "text") { return "> APPRENDRE EN ÉCRIVANT"}
    else if (item === "audio") { return "> APPRENDRE EN ÉCOUTANT"}
    else{return ""}
  },
  renderCorps(item){
    if(item.type === 'image'){return "<img class='thumbnail' src= "+item.corps+" >";}
    if(item.type === 'text') {return item.corps;}
    

  },
  toChoice(item){
    // if(this.selected != '') {
    //   if(this.selected === item.propositions[item.reponse]){
    //       this.$notify({
    //         group: 'foo',
    //         type: 'success',
    //         text: 'أحْسَنت! إجَابَةٌ صَحِيحَة.'
    //       });
    //       this.answer = true
    //       this.selected = ''
    //   }
    //   else {
    //     this.$notify({
    //         group: 'foo',
    //         type: 'error',
    //         text: 'حَاوِلْ مَرّة أُخْرَى.'
    //       });
    //     this.selected = ''
    //   }
    // }
    
    // for (var i = 0; i < item.propositions.length; i++) {
    //   console.log(item.propositions.length);
    //   if(this.selectedReponse === item.propositions[item.reponse]){console.log('true');}
    //   else{console.log('false');}
    // }
  },
  checkAnswer(item) {
    if(this.selected["propo"] != '') {
      if(this.selected["propo"] === item){
          this.$notify({
            group: 'foo',
            type: 'success',
            text: 'أحْسَنت! إجَابَةٌ صَحِيحَة.'
          });
          this.answer = true
          //this.selected["propo"] = ''
      }
      else {
        this.$notify({
            group: 'foo',
            type: 'error',
            text: 'حَاوِلْ مَرّة أُخْرَى.'
          });
        //this.selected["propo"] = ''
      }
    }
  },
  goTo() {
    if(this.answer == true) {
      router.push({path: "/activities/3"});
    }else{
      this.$notify({
        group: 'foo',
        type: 'warn',
        text: 'أَكمِل التّمرِين أوّلا!'
      });
    }
    
  },
  speakUp: function (event) {
      var text = event.target.getAttribute('reponse')
      responsiveVoice.speak(text);
    }
  },
  props: ['activities']
}
</script>

<style lang="css" scoped>
#typeActivite span{
  display: inline-block;
  margin: 5px 0 0 0;
  color: #868e96;
}
#content{
  margin: 5px auto;
  text-align: center;
  font-family: 'Radomir Tikov';
  font-size: 27px;
}

button{
  font-family: 'Radomir Tikov';
  font-size:20px;
}
#propositions{
  margin: 30px 0 50px 0;
}

#footer img{
  width:100%;
}

#footer span{
  font-family: 'Radomir Tikov';
  font-size: 20px;
  position: absolute;
  z-index: 999;
  margin: 0 auto;
  left: 25%;
  top: 20%; /* Adjust this value to move the positioned div up and down */
  width: 60%; /* Set the width of the positioned div */
  color:#212529;

}
#pagination{
  text-align: right;
}

.selected-propo{
  color: blue;
}

.selected-propo{
  color: grey;
}

#playButton {
  display: flex;
  justify-content: center;
}

#propositions img {
  width:20%;
}

#propositions input {
    border-width: 2px;
    border-radius: 1.25rem;
    border-color: #dee2e6;
    height: calc(1.2em + 0.75rem + 2px);
    width:17%;
    display:inline;
}

#propositions span.option {
  margin-bottom:20px;
}

div#solWrittenForm {
  font-family: 'Abdo Master';
    font-size: 30px;
    width:100%;
    text-align: center;
}

#playButton {
  display: flex;
  justify-content: center;
}

#playButton img {
  width:20%;
}
.form-group {
  width:100%;
}

#radio-slots {
  display: flex;
  justify-content: space-around;
  font-family: 'Abdo Master Medium';
  font-size:20px;
}

#radio-slots .custom-radio {
  margin-right:0px;
  left:5px;
}
</style>
