<template>
    <div>
        <h2> {{ todo.title }} </h2>
    </div>
</template>

<script>
import {eventEmitter} from './main'
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
    
}
</script>

<style scoped>
h2 {
    color: blue;
    font-size: 25px;
    text-align: center;
    margin-top: 0;
}

</style>