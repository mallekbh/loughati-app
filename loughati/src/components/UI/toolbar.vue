<template lang="html">
<b-container fluid>
    <b-row id="toolbar">
        <b-col cols="6">
          <nav>
            <ul>
              <li v-for="elem in leftMenuItems" :key="elem.key">
                <button>
                  <span>{{elem.name}}</span>
                </button>
              </li>
              </ul>
          </nav>
        </b-col>
        <b-col cols="6">
          <nav>
            <ul class="text-right">
              <li v-for="elem in rightMenuItems" :key="elem.key" >
                <button>
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
export default {
  data(){
    return{
      leftMenuItems:[
        {name:'A PROPOS', routerName:''},
        {name:'LES ACTIVITÉS', routerName:''},
        {name:'DICTIONNAIRE ARABE', routerName:''},
        {name:'TEST DE NIVEAU', routerName:''}
      ],
      rightMenuItems:[
        {name:'S\'INSCRIRE', routerName:''},
        {name:'SE CONNECTER', routerName:''}
      ]
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
font-family: 'Radomir Tikov';
 font-size: 13px;
}

.text-right{
  text-align: right;
}

</style>
