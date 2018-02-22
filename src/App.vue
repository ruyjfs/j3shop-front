<template>
  <v-app dark>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" value="true" :to="item.link" ripple>
          <v-list-tile-action >
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="$t(item.title)"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="true">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu offset-y>
          <v-btn flat dark slot="activator"><img src="http://www.countryflags.io/br/flat/32.png"></v-btn>
          <v-list>
            <v-list-tile v-for="item in arrMenuTranslate" :key="item.title" v-on:click="translate(item.param)">
              <v-list-tile-avatar :tile="true"><img :src="item.img" /></v-list-tile-avatar>
              <v-list-tile-title>{{$t(item.title)}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <transition mode="out-in" name="fade">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-footer :fixed="true" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>
<script>
import Vue from 'vue'

export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {icon: 'bubble_chart', title: 'Menu'},
        {title: 'Home', icon: 'dashboard', link: '/home'},
        {title: 'Contact', icon: 'edit', link: '/contact'},
        {title: 'About', icon: 'question_answer', link: '/about'}
      ],
      arrMenuTranslate: [
        {title: 'Portuguese', img: 'http://www.countryflags.io/br/flat/32.png', icon: 'dashboard', param: 'ptBr'},
        {title: 'English', img: 'http://www.countryflags.io/us/flat/32.png', icon: 'question_answer', param: 'enUs'}
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Shop'
    }
  },
  name: 'App',
  methods: {
    translate (strLang) {
      Vue.i18n.set(strLang)
    }
  }
}
</script>
<style>
  .application .theme--dark.toolbar, .theme--dark .toolbar {
    background: linear-gradient(141deg,#212121, #393939 51%,#212121 75%);
    /* background: linear-gradient(141deg,#0874ff,#00aeff 51%,#0093ff 75%); */
    color: #fff;
  }
  .toolbar__title {
    background: -webkit-linear-gradient(#ffed9c, #e4ba00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }


.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>