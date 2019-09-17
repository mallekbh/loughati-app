<template>
	<section>
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
</script>
