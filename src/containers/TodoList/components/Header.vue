<template>
  <div>
    <h1>header</h1>
    <input type="text" data-test="input" v-model="inputValue" @keyup.enter="addTodoItem" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      inputValue: ''
    };
  },
  methods: {
    addTodoItem() {
      if (!this.inputValue) return;
      this.$emit('add', this.inputValue);
      this.inputValue = '';
    }
  }
};
</script>

<style></style>
