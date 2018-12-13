let Event = new Vue();

Vue.component("whh", {
  template: `
  <div>
  我说：<input @keyup="onChange" v-model="iSaid">
  </div>
  `,
  data() {
    return {
      iSaid: ""
    };
  },
  methods: {
    onChange() {
      Event.$emit("huahuaSaidSomething", this.iSaid);
    }
  }
});

Vue.component("lsd", {
  template: `
  <div>
  whh说：{{huahuaSaid}}
  </div>
  `,
  data() {
    return {
      huahuaSaid: ""
    };
  },
  mounted() {
    Event.$on("huahuaSaidSomething", data => {
      this.huahuaSaid = data;
    });
  }
});

let app = new Vue({
  el: "#app"
});
