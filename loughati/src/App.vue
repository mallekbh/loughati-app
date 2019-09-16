<template>
  <b-container fluid>
    <toolbar/>
    <router-view/>
  </b-container>
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

<style>
</style>
