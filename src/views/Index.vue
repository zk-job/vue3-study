<template>
   <div><el-button type="primary">主要按钮</el-button></div>
</template>

<script>
const ENV = import.meta.env
export default {
    name:'Index',
    setup(){
        console.log('ENV', ENV)
    }
}
</script>

<style>

</style>