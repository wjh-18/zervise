<template>
  <el-container class='is-vertical'>
    <el-header>
      <HeaderBar></HeaderBar>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import HeaderBar from '../components/header.vue'

export default {
  name: 'Layout',
  components: {
    HeaderBar
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style>
.el-header,
.el-footer {
  background-color: #092344;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.el-main {
  padding: 20px;
  background: #f4f4f4;
}
</style>
