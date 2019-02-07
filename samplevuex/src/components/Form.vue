<template>
  <div>
      お問い合わせ入力欄
    <HeadComp></HeadComp>
    <component :is="isComponent"></component>
    <button v-on:click="buttonAction">{{ button }}</button>
  </div>
</template>

<script>
import HeadComp from '@/components/modules/HeadComp'
import TextareaComp from '@/components/modules/TextareaComp'
import StringComp from '@/components/modules/StringComp'
import { mapActions, mapGetters } from 'vuex'//mapActions:Vuexのアクションを使うためのもの

export default {
  name: 'form',
  methods: mapActions('Form', {
      'buttonAction': 'buttonAction'
  }),
  computed: mapGetters('Form', {
      'button': 'getButton',
      'isComponent': 'getComponent'
  }),
  components: {
    HeadComp,
    TextareaComp,
    StringComp,
  }
}
</script>
