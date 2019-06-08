<template lang="pug">
  div abc
</template>

<script>
  export default {
    name: 'abc',
    created () {
      this.$router.replace('/home')
    }
  }
</script>

<style lang="stylus">

</style>
