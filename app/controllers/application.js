import Ember from 'ember';

export default Ember.Controller.extend({

  data: {
    type: "bar",
    columns: [
      ['data1',0,1,2,3,4,5],
      ['data2',10,11,12,13,14,15]
    ],
    colors: {
      data2: 'rgba(255,255,255,.1)',
      data1: 'rgba(255,255,255,.4)'
    }
  },

  axis: {
    x: {
      // this will allow for the bars to meet the bottom
      // otherwise it arbitrarily adds 8 px
      height: .01,
      show: true,
    },
    y: {
      min: 0,
      max: 20,
      show: false,
      rotated: false,
      padding: { top: 0, bottom: 0, left: 0, right: 0 },
    }
  },

  grid: {
    y: {
      lines: [
        {value: 15, text: 'Label 15 for y', position: 'middle', class: "my-line"}
      ]
    }
  },

  legend: {
    show: false
  },

  bar: {
    width: {
      ratio: 1
    },
    height: {
      ratio: 1
    }
  },

  padding: {
    top: 0
  },

  size: {
    height: 420
  }

});
