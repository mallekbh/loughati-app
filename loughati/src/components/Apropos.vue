<template lang="html">
<b-container>
  <b-row id="title" class="py-3">
    <b-col cols="12">
      <img src="../assets/images/spot-turquoise.png">
      <h1>À propos <span class="arabic">  حول المشروع</span></h1>
    </b-col>
  </b-row>
  <b-row class="py-5" id="content" >
    <b-col cols="12">
      <p>
        <b><span class="arabic">لغتي</span> (Loughati) est une plateforme d'apprentissage en ligne de la langue arabe, destinée principalement au petits enfants de la tranche d'âge entre 6 et 14 ans. Elle couvre les programmes scolaires du primaire jusqu'au CEM.
        </b>
      </p>
      <p>
        Cette plateforme fait partie du projet de fin d’études (PFE) intitulé:Un outil d’aide à la construction de dictionnaires par niveaux d’apprenants pour la langue arabe, réalisé par Mouhamed Amine Ben Hamida et Massika Selmane sous l'encadrement de Pr. Lamia Berkani et Mme Ahlem Chérifa Khadir en master systèmes informatiques intelligents à l'USTHB.
      </p>

      <h3>Fonctionnement</h3>
      <p>
        La Plateforme se base fortement sur un dictionnaire segmenté par niveaux. La segmentation est réalisé par une séparation des entrées pondérées (le poids signifie le degré de difficulté) sur des plages de poids personnalisables (par niveaux d’apprenants).  Le but est donc d’enrichir le vocabulaire arabe des jeunes apprenants.
      </p>
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
</style>
