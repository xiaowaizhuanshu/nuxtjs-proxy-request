<template>
  <div>about</div>
</template>

<script>
import {getAdressInfo} from '~/api/index'
export default {
  name: 'aboutPage',
  created(){
    this.init()
  },
  methods:{
    init(){
      getAdressInfo({channelId:'1712724737253191682'}).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>
