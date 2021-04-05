<template>
  <div class="todo">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'TodoList',
  components: {
    Header
  },
  methods: {
    add(newVal) {
      console.log(newVal);
    }
  }
};
</script>
