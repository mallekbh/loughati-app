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
      <input class="form-control" type="text" placeholder="Écrire le mot à rechercher اكتب كلمة للبحث" aria-label="Search"/>
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
    <b-col cols="12"  id="dico-body" >
    <div class="dico-body-content-container left">
        <ul>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
          <li>كلمة</li>
        </ul>
    </div>
    <div class="dico-body-content-container right">
      <div class="infos">
        <div class="firstline">
          <div class="translitiration">HML</div>
          <a><img src="../assets/icons/speaker.png" alt=""></a>
          <div class="writtenForm">حَمَلَ</div>
        </div>
        <div class="secondline">
          <div class="postag">Verbe</div>
          <div class="dot">.</div>
          <div class="weight">0.75</div>
        </div>
        
      </div>
      <h1>Définitions</h1>
      <div class="definitions">
        <table>
          <tr>
            <td>هذه جملة باللغة العربية</td>
            <td>هذه جملة باللغة العربية</td>
          </tr>
          <tr>
            <td>هذه جملة باللغة العربية</td>
            <td>هذه جملة باللغة العربية</td>
          </tr>
          <tr>
            <td>هذه جملة باللغة العربية</td>
            <td>هذه جملة باللغة العربية</td>
          </tr>
        </table>
      </div>
      <h1>Examples à partir d'un corpus</h1>
      <div class="examples">
        <table>
          <tr>
            <td>هذه جملة باللغة العربية</td>
            <td>هذه جملة باللغة العربية</td>
          </tr>
          <tr>
            <td>هذه جملة باللغة العربية</td>
            <td>هذه جملة باللغة العربية</td>
          </tr>
          <tr>
            <td>هذه جملة باللغة العربية</td>
            <td>هذه جملة باللغة العربية</td>
          </tr>
          <tr>
            <td>هذه جملة باللغة العربية</td>
            <td>هذه جملة باللغة العربية</td>
          </tr>
        </table>
      </div>
    </div>
  </b-col>
  </b-row>
</b-container>
</template>

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
  line-height: 32px;
  font-size: 20px;
  color: #343a40;
  font-family: "Abdo Master Medium"
}

.dico-body-content-container.right h1 {
  overflow:hidden;
  text-align: right;
  font-size:13px;
  color:#ced4da;
  margin-top:25px;
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




</style>