<template>
    <div>
        <p> {{todo.body}} </p>
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