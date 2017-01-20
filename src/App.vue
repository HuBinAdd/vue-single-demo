<template>
<div id="app">
    <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
    </transition>
</div>
</template>
<script>
    import 'assets/css/main.min.css'
</script>
