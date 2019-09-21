<template lang="html">
<b-container>
  <b-row id="title" class="py-3">
    <b-col cols="12">
      <img src="../assets/images/spot-turquoise.png">
      <h1>Dictionnaire <span class="arabic">قاموس</span></h1>
    </b-col>
  </b-row>
  <b-row class="py-3" id="search" >
    <b-col cols="4">
      <input class="form-control"  v-model="search" type="text" placeholder="Écrire le mot à rechercher اكتب كلمة للبحث" aria-label="Search"/>
    </b-col>
    <b-col cols="3">
    </b-col>
     <b-col cols="5" id="filters">
      <a href="">Filtrer par fréquence</a>
      <a href="">Filtrer par thème</a>
      <a href="">Filtrer par étiquette</a>
    </b-col>
  </b-row>
  <b-row class="py-3">
    <b-col cols="12"  id="dico-body">
    <div class="dico-body-content-container left">
        <ul>
          <li v-for="item in  filterdWords">
            <button @click="getEntry" v-bind:data-id="item.idLexicalEntry">{{ item.writtenForm }}</button>
          </li>
        </ul>
    </div>
    <div class="dico-body-content-container right">
      <div v-if="not_empty">
        <div class="infos">
          <div class="firstline">
            <div class="translitiration">HML</div>
            <!-- <a type="button"><img src="../assets/icons/speaker.png" alt=""></a> -->
            <button><img src="../assets/icons/speaker.png" alt=""></button>
            <div class="writtenForm">{{current_entry["infos"][0].writtenForm}}</div>
          </div>
          <div class="secondline">
            <div class="postag">{{current_entry["infos"][0].partOfSpeech}}</div>
            <div class="dot">.</div>
            <div class="weight">0.75</div>
          </div>
        </div>
        <h1>Définitions</h1>
        <div class="definitions">
          <table>
              <ul v-for="def in current_entry['senses']">
                <li>
                {{def.text}}
                </li>
            </ul>
          </table>
        </div>
        <h1>Examples à partir d'un corpus</h1>
        <div class="examples">
          <table>
            <ul v-for="example in current_entry['examples']">
                <li>{{example.leftText}}<span> {{example.middleText}} </span>{{example.rightText}}</li>
            </ul>
            <br>
          </table>
        </div>
      </div>
    </div>
  </b-col>
  </b-row>
</b-container>
</template>

<script>
  import axios from 'axios';
  export default {
  data() {
    return {
      search: '',
      not_empty : false,
      words: [],
      current_entry: [],
      errors: []
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.get('http://localhost:5000/api/dico/words/')
    .then(response => {
      // JSON responses are automatically parsed.
      this.words = response.data
      console.log(this.entry)
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  },
   methods: {
    getEntry: function (event) {
      var id = event.target.getAttribute('data-id')
      axios.get("http://localhost:5000/api/dico/"+id)
      .then((response)  =>  {
        this.current_entry = response.data
        this.not_empty = true
        console.log(this.current_entry)
      }, (error)  =>  {
        this.loading = false
      })
    }
  },
  computed:
  {
      filterdWords:function()
      {
         var self=this;
         return this.words.filter(function(cust){return cust.writtenForm.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
         //return this.customers;
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

  #search ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-size:15px;
  }
  #search ::-moz-placeholder { /* Firefox 19+ */
    color: pink;
  }
  #search :-ms-input-placeholder { /* IE 10+ */
    color: pink;
  }
  #search :-moz-placeholder { /* Firefox 18- */
    color: pink;
  }

  #search a {
    background-color: #dee2e6;
    color: #212529;
    font-size:13px;
    padding:5px 10px;
    border-radius: 15px;
    font-weight: bold;
  }

  #search #filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #dico-body {display: flex;
    justify-content: space-between;}
  .dico-body-content-container {border:2px solid #dee2e6; border-radius:15px; text-overflow: auto; overflow: auto; overflow-y: auto;}
  .dico-body-content-container.left {width:20%; height: 350px; padding: 20px 20px; font-family: "Abdo Master"}
  .dico-body-content-container.right {width:75%; height: 350px; padding: 20px 50px;}
  .form-control {border-width: 2px; border-radius: 1.25rem; border-color: #dee2e6; height: calc(1.2em + 0.75rem + 2px);}

::-webkit-scrollbar {
    width: 20px;
    height: 18px;
}
::-webkit-scrollbar-thumb {
    height: 6px;
    border: 8px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    -webkit-border-radius: 15px;
    background-color: #dee2e6;
    -webkit-box-shadow: inset -1px -1px 0px #dee2e6, inset 1px 1px 0px #dee2e6;
}

.dico-body-content-container.left {
  text-align: right;
  color: #343a40;
}

.dico-body-content-container.left li{
  list-style: none;
}

.dico-body-content-container.left li button{
  line-height: 20px;
  font-size: 18px;
  color: #343a40;
  text-align: right;
  font-family: "Abdo Master Medium";
  transition: 0.1s ease-in-out all;
}

.dico-body-content-container.left li button:hover {
  color:#212529;
  text-shadow: 0px 0px 3px #000000;
}

.dico-body-content-container.right h1 {
  overflow:hidden;
  text-align: right;
  font-size:13px;
  color:#ced4da;
  margin:25px 0px;
}

.dico-body-content-container.right h1:before {
   content:"";
    display: inline-block;
    height: 0.5em;
    vertical-align: bottom;
    width: 100%;
    margin-left: -100%;
    margin-right: 10px;
    border-top: 1px solid #dee2e6;
}

.dico-body-content-container.right a[type:button] {
  background:none;
  border:none;
}

.dico-body-content-container.right .infos {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.dico-body-content-container.right .infos .firstline{
  display: flex;
  width: 25%;
  justify-content: space-between;
  align-items: center;
}
.dico-body-content-container.right .infos .secondline {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width:15%;
  align-items: baseline;
}

.dico-body-content-container.right .infos .secondline .weight{
  color: #e03131;
  font-size: 13px;
  font-weight: bold;
}

.dico-body-content-container.right .infos .secondline .postag  {
   font-size: 13px;
   font-family: 'Abdo Master Light';
}


.dico-body-content-container.right img {
  width:20px;
}

.dico-body-content-container.right .writtenForm {
  font-family: 'Abdo Master';
  font-size:30px;
}

.dico-body-content-container.right .translitiration {
  font-family: 'Radomir Tikov Light';
  font-style: italic;
}

.dico-body-content-container.right .definitions table, .dico-body-content-container.right .examples table {
  font-family: 'Abdo Master Medium';
  width: 100%;
  text-align: right;
  font-size: 14px;
  color: #343a40;
}

.examples span{
  color: #e03131;
}

.right ul {
  list-style-type: none;
}

</style>