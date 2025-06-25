import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
app.use(pinia);

app.use(router);

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    aliases,
    sets: {
      mdi,
    },
  }
})
app.use(vuetify);

app.mount("#app");
