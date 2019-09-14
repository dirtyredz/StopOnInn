function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

module.exports = {
  Black: "#0a0a0a", //"#333333",
  White: "#FFFFFF",
  LightGrey: "rgba(0, 0, 0, 0.27)",
  Grey: "#707070",
  DarkGrey: "#636363",
  Peach: "#E7BAA0",
  DarkGreen: "#52635a",//"#6D7973",
  LightGreen: "#B2B2A2",
  Cream: "#ecd9c6",//'#E5DACE',
  hexToRgb,
}
