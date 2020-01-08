// Import stylesheets
import './style.css';

var data = [
    {"value": 49.9, "name": "Cáncer"},
    {"value": 27, "name": "Enfermedad cardiovascular"},
    {"value": 23.1, "name": "Enfermedad respiratoria"}
  ]

  d3plus.viz()
    .container("#viz")
    .data(data)
    .type("pie")
    .id("name")
    .size("value")
    .draw()

var data2 = [
    {"value": 46.8, "name": "Cáncer"},
    {"value": 37.2, "name": "Enfermedad cardiovascular"},
    {"value": 6, "name": "Enfermedad respiratoria"}
  ]

  d3plus.viz()
    .container("#viz2")
    .data(data2)
    .type("pie")
    .id("name")
    .size("value")
    .draw()


var data3 = [
    {"value": 65.5, "name": "Cáncer"},
    {"value": 26.1, "name": "Enfermedad cardiovascular"},
    {"value": 8.4, "name": "Enfermedad respiratoria"}
  ]

  d3plus.viz()
    .container("#viz3")
    .data(data3)
    .type("pie")
    .id("name")
    .size("value")
    .draw()

var data4 = [
    {"value": 60, "name": "Cáncer"},
    {"value": 25.5, "name": "Enfermedad cardiovascular"},
    {"value": 14.4, "name": "Enfermedad respiratoria"}
  ]

  d3plus.viz()
    .container("#viz4")
    .data(data4)
    .type("pie")
    .id("name")
    .size("value")
    .draw()