<template lang="pug">
  .vi-media-object(:class="classes")
    .vi-media-object__left(:style="style")
      slot(name="left")
    .vi-media-object__body
      slot
</template>

<script>
  export default {
    name: 'vi-media-object',

    props: {
      width: {
        type: [Number, String],
        default: undefined,
        required: false
      },

      separator: {
        type: Boolean,
        default: false,
        required: false
      },

      link: {
        type: Boolean,
        default: false,
        required: false
      }
    },

    data () {
      return {

      }
    },

    computed: {
      style () {
        const style = {}
        if (this.width) {
          const w = typeof this.width === 'string' ? this.width : `${this.width}px`
          style.flexBasis = w
        }
        return style
      },

      classes () {
        return {
          'vi-media-object--separator': this.separator,
          'vi-media-object--link': this.link
        }
      }
    },

    methods: {

    },

    created () {

    }
  }
</script>

<style lang="stylus">
  .vi-media-object
    display flex
    @media(max-width 760px)
      display block
      .vi-media-object__body
        margin-left 0
        margin-top -8px

    &__left
      flex 0 0 200px
    &__body
      flex 1
      margin-left 2em
    &--separator
      &:not(:last-child)
        border-bottom 1px solid #e1e1e1
        margin-bottom 1.5em
        padding-bottom 1.5em
</style>
