<template>
    <ul class="jxlb-lists mt10 index-rotjx">
        <li v-for="option in options" class="jxlb-list">
            <router-link :to="`/school/${option.id}`">
            <div class="jxlb-list-img">
                <img :src="option.imgSrc">
            </div>
            <div class="jxlb-list-header">
                <span class="jxlb-header-span">{{option.nameL}}</span>
                <div class="jxlb-xx-lists">
                    <span v-for="n in 5" class="jxlb-xx-list">
                        <i class="icon-jll-xx-bg" v-if="option.score >= n" style="width: 100%"></i>
                        <i class="icon-jll-xx-bg" v-else-if="option.score < n && option.score > n - 1" :style="{width:`${(option.score+1-n)*100}%`}"></i>
                        <i class="icon-jll-xx-bg" v-else></i>
                        <i class="icon-jll-xx-1 iconfont"></i>
                    </span>
                    <span class="jxlb-xx-fs">{{option.score}}</span>
                </div>
            </div>
            <p class="confines">招生范围：{{option.range}}</p>
            <div class="money"><strong>{{option.money}}</strong>元起{{option.tip ? `（${option.tip}）`:''}}</div>
            <router-link to="#">
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            default() {
              return [{}]
            }
        }
    },
    components: {
    },
    beforeCreate(){
    },
    watch: {
        '$route' (to, from) {
            console.log(arguments)
                // 对路由变化作出响应...
        }
    }
}
</script>
