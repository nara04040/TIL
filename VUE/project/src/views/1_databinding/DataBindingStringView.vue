<template>
  <h1>Hello {{ userName }}</h1>
  <p>{{ message }}</p>
</template>
<script>
export default {
  data() {
    return {
      userName: 'John Doe',
      message: 'Welcome 나라',
      arr: [],
      obj: {}
    }
  }
}
</script>
<style scoped></style>
