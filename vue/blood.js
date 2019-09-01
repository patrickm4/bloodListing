new Vue({
  el: "#main",
  data: {
    message: "Hello Vue.js!",
    items: [
      {
        dateTaken: "Aug 8",
        timeTaken: "8:00pm",
        bloodSugar: 110,
        bloodPressure: "120/80",
        beforeAfter: "BB"
      },
      {
        dateTaken: "Aug 9",
        timeTaken: "6:00pm",
        bloodSugar: 120,
        bloodPressure: "116/66",
        beforeAfter: "BD"
      }
    ]
  },
  methods: {
    addItems(e) {
      e.preventDefault();
      let dateInput = document.getElementById("dateTaken");
      let timeInput = document.getElementById("timeTaken");
      let bloodSugar = document.getElementById("bloodSugar");
      let bloodPressure = document.getElementById("bloodPressure");
      let beforeAfter = document.getElementById("prePostFood");

      this.items.push({
        dateTaken: "Aug 9",
        timeTaken: "6:00pm",
        bloodSugar: 120,
        bloodPressure: "116/66",
        beforeAfter: "BD"
      });
      dateTaken.value = "";
      timeTaken.value = "";
      bloodSugar.value = 0;
      bloodPressure.value = "";
      beforeAfter.value = "";
    }
  }
});
