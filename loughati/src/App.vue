<template>
	<section>
		<notifications group="foo" position="center right"/>
	    <toolbar/>
	    <router-view :key="$route.fullPath"/>
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
