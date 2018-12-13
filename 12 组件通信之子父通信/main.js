Vue.component("balance", {
  template: `
  <div>
    <show @showTheBalance="showIt"></show>
    <div v-if="show">您的余额是98元</div>
  </div>`,
  data() {
    return {
      show: false
    };
  },
  methods: {
    showIt(data) {
      this.show = true;
      console.log('data:',data)
    }
  }
});

Vue.component("show", {
  template: `<button @click="onClick">显示余额</button>`,
  methods: {
    onClick() {
      this.$emit("showTheBalance", { a: 1, b: 2 });
    }
  }
});

let app = new Vue({
  el: "#app"
});
