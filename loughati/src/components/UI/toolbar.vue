<template lang="html">
<b-container fluid>
    <b-row id="toolbar">
        <b-col cols="5">
          <nav>
            <ul>
              <li v-for="elem in leftMenuItems" :key="elem.key">
                <button @click="goTo(elem.route)">
                  <span>{{elem.name}}</span>
                </button>
              </li>
              </ul>
          </nav>
        </b-col>
        <b-col cols="2">
          <center>
          <img src="../../assets/images/logo-mini.png" alt="">
        </center>
        </b-col>
        <b-col cols="5">
          <nav>
            <ul class="text-right">
              <li v-for="elem in rightMenuItems" :key="elem.key" >
                <button  @click="goTo(elem.route)">
                  <span>{{elem.name}}</span>
                </button>
              </li>
              </ul>
          </nav>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import router from '../../router'
export default {
  data(){
    return{
      leftMenuItems:[
        {name:'A PROPOS', route:'/apropos'},
        {name:'LES ACTIVITÉS', route:'/activites'},
        {name:'DICTIONNAIRE ARABE', route:'/dico'},
        {name:'TEST DE NIVEAU', route:'/testniveau'}
      ],
      rightMenuItems:[
        {name:'S\'INSCRIRE', route:''},
        {name:'SE CONNECTER', route:''}
      ]
    }
  },
  methods: {
    goTo(item) {
      router.push({path: item});console.log("kk");
    }
  }
}
</script>

<style lang="css" scoped>
#toolbar{
  margin: 20px 10px;
}

#toolbar-logo{
  width: 30%;
  margin-left: 0px;
  padding-left: 0;
}

li{
  list-style-type: none;
  display:inline-block;
}

nav{
  margin: 15px 0;
}

ul{
  padding: 0px;
}


button{
  border: none;
  position: relative;
  width:100%;
  background-color: white;
  margin: 5px 0px;
}

button:focus{outline:none;}

span{
  color:#212529;
font-family: 'Radomir Tikov Bold';
 font-size: 13px;
}

.text-right{
  text-align: right;
}

#toolbar img {width: 50%;}
</style>
