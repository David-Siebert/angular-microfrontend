<template>
  <div style="border: 3px; border-style: dashed; border-color: orange; height: 300px; width: 300px; padding: 5px;">
      <h2>Micro App E Vue</h2>
      <h3>Module ???</h3>
      <h4>Component HelloWorld</h4>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
