<template>
    <div>
        <div class="index-title">
            <div class="index-search">
                <i class="iconfont icon-logo-qw"></i>
                <a href="#">
                <router-link to="#">
                    <div class="jx-search-input">
                        <input class="iconfont1" type="text" name="" placeholder="搜索相关信息" disabled>
                    </div>
                </router-link>
                <router-link to="#" class="jx-search-po">
                    <i class="iconfont icon-search-position"></i>
                    <span>杭州</span>
                </router-link>
            </div>
        </div>
        <div class="main-fiex">
            <div class="row header-column">
                <a class="header-column-list">找教练</a>
                <a class="header-column-list">找驾校</a>
            </div>
            <div class="banner-box">
                <swiper class="swiper-wrapper swiper-box" :options="swiperOption" ref="mySwiperA">
                  <swiper-slide v-for="item in imgList">
                      <img :src="`~assets/${item.src}`">
                  </swiper-slide>
                </swiper>
            </div>
            <h1 class="index-h1">热门驾校</h1>
            <schoolList :options="schoolLists"></schoolList>
        </div>
    </div>
</template>

<script>
import schoolList from '../../components/index/school-list.vue';

export default {
    data() {
        return {
          imgList:[
              {
                  src:"../src/assets/images/banner-n1.jpg"
              },
              {
                  src:"../src/assets/images/banner-n2.jpg"
              },
              {
                  src:"../src/assets/images/banner-n3.jpg"
              },
              {
                  src:"../src/assets/images/banner-n4.jpg"
              }
          ],
          schoolLists:[{
              imgSrc:'public/images/jl-list-1.jpg',
              nameL:'1217',
              id:'1217',
              range:'东方高新科技园、文三路、城西',
              money:'4580',
              tip:'暑期大促中',
              score:4
          },{
              imgSrc:'public/images/jl-list-1.jpg',
              nameL:'1217',
              id:'1217',
              range:'东方高新科技园、文三路、城西',
              money:'4580',
              score:3.5
          },{
              imgSrc:'public/images/jl-list-1.jpg',
              nameL:'1217',
              id:'1217',
              range:'东方高新科技园、文三路、城西',
              money:'4580',
              score:4
          },{
              imgSrc:'public/images/jl-list-1.jpg',
              nameL:'1217',
              id:'1217',
              range:'东方高新科技园、文三路、城西',
              money:'4580',
              score:4
          },{
              imgSrc:'public/images/jl-list-1.jpg',
              nameL:'1217',
              id:'1217',
              range:'东方高新科技园、文三路、城西',
              money:'4580',
              score:4
          }],
          swiperOption: {
            initialSlide:1,
            notNextTick: true,
            autoplay: 3000,
            loop:true,
            pagination: '.swiper-pagination',
            onTransitionStart(swiper){
                console.log(111)
              console.log(swiper)
            }
          }
        }
    },
    components: {
        schoolList
    },
    beforeCreate(){
    },
    watch: {
        '$route' (to, from) {
            console.log(arguments)
                // 对路由变化作出响应...
        }
    },
  // example code (if you need to get the current swiper object, you can find the swiper object like this, the $ref object is a ref attribute corresponding to the dom redefined)
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，实际上这里的$refs对应的是当前组件内所有关联了ref属性的组件元素对象，同时配置中的notNextTick属性一定要设置为true
  computed: {
    swiper() {
      return this.$refs.mySwiperA.swiper
    }
  },
  mounted() {
    // you can use current swiper object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper object', this.swiper)
  }
}
</script>

<style>
.main-fiex{
    padding-top:1.03rem;
}
.swiper-slide img{
    width: 100%;
    min-height: 100%;
}
.banner-box .banner-dian {
  position: absolute;
  bottom: 0;
  left: 0;
  height: .17rem;
  line-height: .17rem;
  text-align: center;
  vertical-align: top;
}

.banner-box .banner-dian .swiper-pagination-bullet {
  display: inline-block;
  width: .1rem;
  height: .1rem;
  margin: 0 .1rem;
  border-radius: .05rem;
  background: rgba(255, 255, 255, 0.3);
  vertical-align: top;
}

.banner-box .banner-dian .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #fff;
}

</style>
