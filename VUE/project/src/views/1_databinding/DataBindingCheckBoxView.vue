<template>
  <div>
    <div>
      <input type="checkbox" name="" id="html" value="HTML" v-model="favoriteLang" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" name="" id="css" value="CSS" v-model="favoriteLang" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="checkbox" name="" id="javascript" value="JavaScript" v-model="favoriteLang" />
      <label for="javascript">JavaScript</label>
    </div>
    <div>선택한 지역 : {{ favoriteLang }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: ['JavaScript']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
