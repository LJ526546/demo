<template>
  <div>
    1
  </div>
</template>

<script>
import com from '../../assets/js/common'
export default {
  mounted() {
    com.$on('val',(data) => {
      console.log(data)
    })
  },
}
</script>

<style scoped>

</style>