import Vue from "vue";
import App from "./App.vue";
import VueSocketIO from "vue-socket.io";
import VueChatScroll from "vue-chat-scroll";

Vue.use(VueChatScroll);

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://localhost:3000",
  })
);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
