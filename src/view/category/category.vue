<template>
  <div class="cateGory">

  </div>
</template>
<script>
  import {mapState, mapActions} from 'vuex'
  import {sysLogin} from '@/api/getData'
  export default {
    data() {
      return {
        categoryModel: {
            id:0,
          name:"品类1",
          pid:0
        }
      };
    },
    beforeCreate:function () {

    },
    created:function () {

    },
    beforeMount:function () {

    },
    mounted:function () {

    },
    computed: {
    },
    methods: {
      ...mapActions(['sysSignin'])
    }
  }
</script>
<style>

</style>
