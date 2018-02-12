<template>
  <div>
    <input
      class="inputValue"
      type="text"
      v-model="inputValue"
    />
    <button
      class="button"
      @click="onClick"
    >{{ btnName }}</button>
  </div>
</template>

<script>
export default {
  name: 'SimpleForm',
  props: {
    btnName: {
      type: String,
      default: 'button'
    }
  },
  data () {
    return {
      inputValue: 'default'
    }
  },
  methods: {
    onClick () {
      this.$emit('clickBtn', this.inputValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
