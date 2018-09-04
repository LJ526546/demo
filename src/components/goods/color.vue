<template>
  <div>
    {{ id }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      key : '1'
    }
  },
  props:{
    id: String,
    required: true
  },
  methods: {
    name () {
      
    }
  },
}
</script>

<style scoped lang='less'>

</style>
