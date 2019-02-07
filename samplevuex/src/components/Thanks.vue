<template>
    <div>
        <HeadComp></HeadComp>
        <p>送信ありがとうございました！</p>
    </div>
</template>

<script>
import HeadComp from '@/components/modules/HeadComp'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'thanks',
    components: {
        HeadComp
    }    
}
</script>

