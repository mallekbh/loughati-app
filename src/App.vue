<template>
	<section>
	 <!--CSS Spinner-->
    <div class="spinner-wrapper">
        <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
    </div>
    <toolbar/>
    <router-view/>
   	</section>
</template>

<script>
import toolbar from './components/UI/toolbar'
export default {
  name: 'Loughati',
  components: {
    toolbar
  }
}

$(document).ready(function () {
    //Preloader
    $(window).on("load", function () {
        preloaderFadeOutTime = 500;
        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });
});
</script>

<style>
/* Preloader wrapper */
  .spinner-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 999999;
    }

  
  .spinner {
    width: 40px;
    height: 40px;
  
    position: relative;
    top:40%;
    left:48%;
  }
  
  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #e67f00;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    
    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
    animation: sk-bounce 2.0s infinite ease-in-out;
  }
  
  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  
  @-webkit-keyframes sk-bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }
  
  @keyframes sk-bounce {
    0%, 100% { 
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% { 
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
</style>
