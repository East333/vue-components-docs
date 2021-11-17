<template>
  <section>
    <el-table :data="data" highlight-current-row fit border stripe>
      <el-table-column label="参数"></el-table-column>
      <el-table-column label="说明"></el-table-column>
      <el-table-column label="数据格式"></el-table-column>
      <el-table-column label="可选值"></el-table-column>
      <el-table-column label="默认值"></el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        data: [
            {  }
        ]
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
};
</script>
<style scoped>
</style>