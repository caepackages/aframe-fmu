/* global AFRAME */
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('aframe-modelica-animation', {
  schema: {
    moaFile: {default: 'animation.moa'},
    timeScale: {default: 0.1},
  },

  init: function () {
    console.log("init");
  },

  play: function () {
  },

  remove: function () {
  },

  tick: function (time) {
  },
});