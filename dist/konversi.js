var e=/*#__PURE__*/function(){function e(){}return e.binaryToDecimal=function(e){return parseInt(e,2)},e.decimalToBinary=function(e){return parseInt(e.toString(2),10)},e.decimalToOctal=function(e){return parseInt(e.toString(8),10)},e.decimalToHexadecimal=function(e){return e.toString(16).toUpperCase()},e.octalToDecimal=function(e){return parseInt(e.toString(),8)},e.hexaToDecimal=function(e){return parseInt(e.toLocaleLowerCase(),16)},e}();module.exports=/*#__PURE__*/function(){function t(e,t){void 0===t&&(t="decimal"),this.value=void 0,this.type=void 0,this.value=e,this.type=t,this.value=e,this.type=t}var a=t.prototype;return a.toBinary=function(){var t=0,a=this.value.toString();switch(this.type){case"binary":return parseInt(a,10);case"octal":return t=e.octalToDecimal(parseInt(a,10)),e.decimalToBinary(t);case"hexadecimal":return t=e.hexaToDecimal(a),e.decimalToBinary(t);default:return parseInt(this.value.toString(2),10)}},a.toOctal=function(){var t=0,a=this.value.toString();switch(this.type){case"binary":return t=e.binaryToDecimal(a),e.decimalToOctal(t);case"octal":return parseInt(a,10);case"hexadecimal":return t=e.hexaToDecimal(a),e.decimalToOctal(t);default:return e.decimalToOctal(parseInt(a,10))}},a.toDecimal=function(){var t=this.value.toString();switch(this.type){case"binary":return e.binaryToDecimal(t);case"octal":return e.octalToDecimal(parseInt(t,10));case"hexadecimal":return e.hexaToDecimal(t);default:return parseInt(t,10)}},a.toHexadecimal=function(){var t=0,a=this.value.toString();switch(this.type){case"binary":return t=e.binaryToDecimal(a),e.decimalToHexadecimal(t);case"octal":return t=e.octalToDecimal(parseInt(a,10)),e.decimalToHexadecimal(t);case"hexadecimal":return a;default:return t=e.hexaToDecimal(a),e.decimalToHexadecimal(parseInt(a,10))}},t}();
//# sourceMappingURL=konversi.js.map