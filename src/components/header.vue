<template>
      <div>
            <el-row>
                  <el-col :span="12">
                        <el-dropdown trigger="click" @command='selectLanguage'>
                              <span class="el-dropdown-link">
                                    {{language}}
                                    <i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                              <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="中文">中文</el-dropdown-item>
                                    <el-dropdown-item command="ENGLISH">ENGLISH</el-dropdown-item>
                              </el-dropdown-menu>
                        </el-dropdown>
                        <span>Zervice Inc.</span>

                  </el-col>
                  <el-col :span="12">
                        <el-menu class="el-menu" mode="horizontal" background-color="#092344" text-color="#fff" active-text-color="#fff">
                              <el-submenu index="2">
                                    <template slot="title">游客，欢迎您！</template>

                                    <el-menu-item index="2-1">
                                          <router-link :to="{ path:'/login' }" class="el-menu-horizontal-li-a">登陆 </router-link>
                                    </el-menu-item>
                                    <el-menu-item index="2-2">
                                          <router-link :to="{ path:'/contact' }" class="el-menu-horizontal-li-a">联系我们 </router-link>
                                    </el-menu-item>
                              </el-submenu>
                        </el-menu>
                  </el-col>
            </el-row>

      </div>
</template>
<script>
export default {
  data() {
    return {
      language: '中文'
    }
  },
  methods: {
    selectLanguage(e) {
      this.language = e
    }
  }
}
</script>

<style>
.el-dropdown {
  height: 35px;
  color: #fff;
  cursor: pointer;
}
.el-menu {
  float: right;
}
.el-menu a {
  display: block;
  color: #fff;
}
</style>
