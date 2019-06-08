<template lang="pug">
  .app
    .app__nav.app-nav
      img.app-nav__logo(alt="AOP logo" src="./assets/logo.png" width="120")
      .app-nav__menu
        div(v-for="item in menu")
          router-link(:to="item.to").menu-item {{item.title}}
            .menu-item__box {{item.title}}
            .menu-item__box {{item.title}}
            .menu-item__box {{item.title}}
    .app__main
      router-view
</template>

<script>
  export default {
    name: 'app',

    data () {
      return {
        menu: [
          {
            title: 'News',
            to: '/home'
          },
          {
            title: 'Project Archive',
            to: '/archive'
          },
          {
            title: 'Publication',
            to: '/publication'
          },
          {
            title: 'About',
            to: '/about'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/reset.styl'
  @import './stylus/site.styl'
  .app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    display flex
    padding 2em
    max-width 1200px
    margin 0 auto
    @media(max-width 800px)
      display block
      padding 1em

    &__nav
      width 160px
      @media(max-width 800px)
        width 100%
        text-align center

    &__main
      margin-top 2em
      margin-left 6em
      flex 1 1 0
      @media(max-width 800px)
        margin-left 0

  .app-nav
    &__logo
      flex-shrink 0
    &__menu
      margin-top 6em
      @media(max-width 800px)
        display flex
        justify-content center
        flex-wrap wrap
        margin 0

  h1
    font-weight bold
    font-size 2.4em
    font-style normal

  h3
    text-decoration underline

  h5
    text-transform uppercase
    font-weight bold

  .bold
    font-weight bold

  .menu-item
    font-weight bold
    height 2.2em
    display inline-block
    margin-bottom 1em
    line-height 1
    position relative
    white-space nowrap
    padding .3em 1em
    @media(max-width 800px)
      margin 1em 2em
    &.router-link-active
      height 2em
      padding 1em 0
      font-size 2em
      border-bottom 2px solid white
      @media(max-width 800px)
        font-size 1em
      .menu-item__box
        background none
        color white
        font-size 2.4em
        border none
        text-decoration underline
        padding 0
        white-space normal
        display none
        @media(max-width 800px)
          font-size 1em

        &:not(:first-child)
          display none
    &__box
      font-weight bold
      color #FF5409
      background white
      border 1px solid black
      padding .3em 1em
      line-height 1
      position absolute
      height 100%
      display flex
      align-items center
      justify-content center
      left 0
      bottom 0
      text-transform uppercase
      white-space nowrap
      &:nth-child(1n)
        z-index 1
      &:nth-child(2n)
        z-index 2
        transform translate3d(4px, 4px, 0)
      &:nth-child(3n)
        z-index 3
        transform translate3d(9px, 9px, 0)

  .spacer
    margin 2em 0
    height 1px
    content ''

  .app-box
    display block
    background white
    color black
    padding 2em
    border 1px solid black

  .app-img-stack
    position relative
    display inline-block
    margin-bottom 20px
    &__after, &__after2
      background white
      border 1px solid black
      position absolute
      left 5px
      top 5px
      width 100%
      height 98%
      z-index 2
    &__after2
      left 10px
      top 10px
      z-index 1
    > img
      position relative
      z-index 3

  .vi-row
    display flex
    flex-wrap wrap
    .vi-col
      width 50%
      padding 4px
      @media(max-width 600px)
        width 100%
</style>
