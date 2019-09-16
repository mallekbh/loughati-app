<template lang="html">
  <b-container fluid>
    <b-row id="typeActivite">
      <b-col cols="12">
        <span>{{renderTypeText(activites[numActivite-1].type)}}</span>
      </b-col>
    </b-row>

    <b-row id="indicationActivite">
      <b-col cols="12">
        <span>{{activites[numActivite-1].indication}}</span>
      </b-col>
    </b-row>

    <b-row id="corpsActivite" align-h="center">
      <b-col cols="4">
        <div v-html="renderCorps(activites[numActivite-1])" id="content"></div>
      </b-col>
    </b-row>

        <b-row id="propositions">
          <b-col v-for="propo in activites[numActivite-1].propositions.propositions" :key="propo.key" >
            <button @click="selectedReponse = propo">
              <span :class="toChoice(activites[numActivite-1].propositions)">{{propo}}</span>
            </button>
          </b-col>
        </b-row>

        <b-row id="footer">
          <b-col offset="5" cols="1">
            <button>
              <img src="../../assets/images/spot-green.png">
              <span>Valider</span>
            </button>
          </b-col>
          <b-col cols="1">
            <button>
              <img src="../../assets/images/spot-grey.png">
              <span>Passer</span>
            </button>
          </b-col>
          <b-col offset="3" cols="1" id="pagination">
              <span>{{numActivite}}/{{activites.length}}</span>
          </b-col>
        </b-row>


  </b-container>
</template>

<script>
export default {
  data(){
    return{
      numActivite: 1,
      selectedReponse: ''
    }
  },
  methods: {
  renderTypeText(item) {
    if(item === "image"){return ">APPRENDRE EN IMAGES"}
    else if (item === "text") { return ""}
    else if (item === "audio") { return ">APPRENDRE EN ÉCOUTANT"}
    else{return ""}
  },
  renderCorps(item){
    if(item.type === 'image'){return "<img src= "+item.corps+" >";}
    if(item.type === 'text') {return item.corps;}

  },
  toChoice(item){
    for (var i = 0; i < item.propositions.length; i++) {
      console.log(item.propositions.length);
      if(this.selectedReponse === item.propositions[item.reponse]){console.log('true');}
      else{console.log('false');}
    }
  }
  },
  props: ['activites']
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
</style>
