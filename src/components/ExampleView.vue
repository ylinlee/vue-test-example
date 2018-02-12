<template>
  <div>
      <simple-form
          @clickBtn="onClickBtn"
          btnName="Click it!!">
      </simple-form>
      <span> {{ outputValue }}</span>
  </div>
</template>

<script>
import SimpleForm from '@/components/SimpleForm'
export default {
  name: 'ExampleView',
  components: {
    SimpleForm
  },
  data () {
    return {
      outputValue: ''
    }
  },
  methods: {
    onClickBtn (value) {
      this.outputValue = value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
