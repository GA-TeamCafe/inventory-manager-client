webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Barcode = function Barcode(data, options) {
	_classCallCheck(this, Barcode);

	this.data = data;
	this.text = options.text || data;
	this.options = options;
};

exports.default = Barcode;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _SET_BY_CODE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// constants for internal usage
var SET_A = exports.SET_A = 0;
var SET_B = exports.SET_B = 1;
var SET_C = exports.SET_C = 2;

// Special characters
var SHIFT = exports.SHIFT = 98;
var START_A = exports.START_A = 103;
var START_B = exports.START_B = 104;
var START_C = exports.START_C = 105;
var MODULO = exports.MODULO = 103;
var STOP = exports.STOP = 106;
var FNC1 = exports.FNC1 = 207;

// Get set by start code
var SET_BY_CODE = exports.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE);

// Get next set by code
var SWAP = exports.SWAP = {
	101: SET_A,
	100: SET_B,
	99: SET_C
};

var A_START_CHAR = exports.A_START_CHAR = String.fromCharCode(208); // START_A + 105
var B_START_CHAR = exports.B_START_CHAR = String.fromCharCode(209); // START_B + 105
var C_START_CHAR = exports.C_START_CHAR = String.fromCharCode(210); // START_C + 105

// 128A (Code Set A)
// ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4
var A_CHARS = exports.A_CHARS = "[\x00-\x5F\xC8-\xCF]";

// 128B (Code Set B)
// ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4
var B_CHARS = exports.B_CHARS = "[\x20-\x7F\xC8-\xCF]";

// 128C (Code Set C)
// 00–99 (encodes two digits with a single code point) and FNC1
var C_CHARS = exports.C_CHARS = "(\xCF*[0-9]{2}\xCF*)";

// CODE128 includes 107 symbols:
// 103 data symbols, 3 start symbols (A, B and C), and 1 stop symbol (the last one)
// Each symbol consist of three black bars (1) and three white spaces (0).
var BARS = exports.BARS = [11011001100, 11001101100, 11001100110, 10010011000, 10010001100, 10001001100, 10011001000, 10011000100, 10001100100, 11001001000, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011000, 11011000110, 11000110110, 10100011000, 10001011000, 10001000110, 10110001000, 10001101000, 10001100010, 11010001000, 11000101000, 11000100010, 10110111000, 10110001110, 10001101110, 10111011000, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101000, 11011100010, 11011101110, 11101011000, 11101000110, 11100010110, 11101101000, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 10100110000, 10100001100, 10010110000, 10010000110, 10000101100, 10000100110, 10110010000, 10110000100, 10011010000, 10011000010, 10000110100, 10000110010, 11000010010, 11001010000, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111000, 10100011110, 10001011110, 10111101000, 10111100010, 11110101000, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 11010010000, 11010011100, 1100011101011];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// Standard start end and middle bits
var SIDE_BIN = exports.SIDE_BIN = '101';
var MIDDLE_BIN = exports.MIDDLE_BIN = '01010';

var BINARIES = exports.BINARIES = {
	'L': [// The L (left) type of encoding
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'G': [// The G type of encoding
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'],
	'R': [// The R (right) type of encoding
	'1110010', '1100110', '1101100', '1000010', '1011100', '1001110', '1010000', '1000100', '1001000', '1110100'],
	'O': [// The O (odd) encoding for UPC-E
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'E': [// The E (even) encoding for UPC-E
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111']
};

// Define the EAN-2 structure
var EAN2_STRUCTURE = exports.EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG'];

// Define the EAN-5 structure
var EAN5_STRUCTURE = exports.EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG'];

// Define the EAN-13 structure
var EAN13_STRUCTURE = exports.EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(3);

// Encode data string
var encode = function encode(data, structure, separator) {
	var encoded = data.split('').map(function (val, idx) {
		return _constants.BINARIES[structure[idx]];
	}).map(function (val, idx) {
		return val ? val[data[idx]] : '';
	});

	if (separator) {
		var last = data.length - 1;
		encoded = encoded.map(function (val, idx) {
			return idx < last ? val + separator : val;
		});
	}

	return encoded.join('');
};

exports.default = encode;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// https://en.wikipedia.org/wiki/MSI_Barcode#Character_set_and_binary_lookup

var MSI = function (_Barcode) {
	_inherits(MSI, _Barcode);

	function MSI(data, options) {
		_classCallCheck(this, MSI);

		return _possibleConstructorReturn(this, (MSI.__proto__ || Object.getPrototypeOf(MSI)).call(this, data, options));
	}

	_createClass(MSI, [{
		key: "encode",
		value: function encode() {
			// Start bits
			var ret = "110";

			for (var i = 0; i < this.data.length; i++) {
				// Convert the character to binary (always 4 binary digits)
				var digit = parseInt(this.data[i]);
				var bin = digit.toString(2);
				bin = addZeroes(bin, 4 - bin.length);

				// Add 100 for every zero and 110 for every 1
				for (var b = 0; b < bin.length; b++) {
					ret += bin[b] == "0" ? "100" : "110";
				}
			}

			// End bits
			ret += "1001";

			return {
				data: ret,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]+$/) !== -1;
		}
	}]);

	return MSI;
}(_Barcode3.default);

function addZeroes(number, n) {
	for (var i = 0; i < n; i++) {
		number = "0" + number;
	}
	return number;
}

exports.default = MSI;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is the master class,
// it does require the start code to be included in the string
var CODE128 = function (_Barcode) {
	_inherits(CODE128, _Barcode);

	function CODE128(data, options) {
		_classCallCheck(this, CODE128);

		// Get array of ascii codes from data
		var _this = _possibleConstructorReturn(this, (CODE128.__proto__ || Object.getPrototypeOf(CODE128)).call(this, data.substring(1), options));

		_this.bytes = data.split('').map(function (char) {
			return char.charCodeAt(0);
		});
		return _this;
	}

	_createClass(CODE128, [{
		key: 'valid',
		value: function valid() {
			// ASCII value ranges 0-127, 200-211
			return (/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
			);
		}

		// The public encoding function

	}, {
		key: 'encode',
		value: function encode() {
			var bytes = this.bytes;
			// Remove the start code from the bytes and set its index
			var startIndex = bytes.shift() - 105;
			// Get start set by index
			var startSet = _constants.SET_BY_CODE[startIndex];

			if (startSet === undefined) {
				throw new RangeError('The encoding does not start with a start character.');
			}

			if (this.shouldEncodeAsEan128() === true) {
				bytes.unshift(_constants.FNC1);
			}

			// Start encode with the right type
			var encodingResult = CODE128.next(bytes, 1, startSet);

			return {
				text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
				data:
				// Add the start bits
				CODE128.getBar(startIndex) +
				// Add the encoded bits
				encodingResult.result +
				// Add the checksum
				CODE128.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) +
				// Add the end bits
				CODE128.getBar(_constants.STOP)
			};
		}

		// GS1-128/EAN-128

	}, {
		key: 'shouldEncodeAsEan128',
		value: function shouldEncodeAsEan128() {
			var isEAN128 = this.options.ean128 || false;
			if (typeof isEAN128 === 'string') {
				isEAN128 = isEAN128.toLowerCase() === 'true';
			}
			return isEAN128;
		}

		// Get a bar symbol by index

	}], [{
		key: 'getBar',
		value: function getBar(index) {
			return _constants.BARS[index] ? _constants.BARS[index].toString() : '';
		}

		// Correct an index by a set and shift it from the bytes array

	}, {
		key: 'correctIndex',
		value: function correctIndex(bytes, set) {
			if (set === _constants.SET_A) {
				var charCode = bytes.shift();
				return charCode < 32 ? charCode + 64 : charCode - 32;
			} else if (set === _constants.SET_B) {
				return bytes.shift() - 32;
			} else {
				return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
			}
		}
	}, {
		key: 'next',
		value: function next(bytes, pos, set) {
			if (!bytes.length) {
				return { result: '', checksum: 0 };
			}

			var nextCode = void 0,
			    index = void 0;

			// Special characters
			if (bytes[0] >= 200) {
				index = bytes.shift() - 105;
				var nextSet = _constants.SWAP[index];

				// Swap to other set
				if (nextSet !== undefined) {
					nextCode = CODE128.next(bytes, pos + 1, nextSet);
				}
				// Continue on current set but encode a special character
				else {
						// Shift
						if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
							// Convert the next character so that is encoded correctly
							bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
						}
						nextCode = CODE128.next(bytes, pos + 1, set);
					}
			}
			// Continue encoding
			else {
					index = CODE128.correctIndex(bytes, set);
					nextCode = CODE128.next(bytes, pos + 1, set);
				}

			// Get the correct binary encoding and calculate the weight
			var enc = CODE128.getBar(index);
			var weight = index * pos;

			return {
				result: enc + nextCode.result,
				checksum: weight + nextCode.checksum
			};
		}
	}]);

	return CODE128;
}(_Barcode3.default);

exports.default = CODE128;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mod10 = mod10;
exports.mod11 = mod11;
function mod10(number) {
	var sum = 0;
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[i]);
		if ((i + number.length) % 2 === 0) {
			sum += n;
		} else {
			sum += n * 2 % 10 + Math.floor(n * 2 / 10);
		}
	}
	return (10 - sum % 10) % 10;
}

function mod11(number) {
	var sum = 0;
	var weights = [2, 3, 4, 5, 6, 7];
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[number.length - 1 - i]);
		sum += weights[i % weights.length] * n;
	}
	return (11 - sum % 11) % 11;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (old, replaceObj) {
  return _extends({}, old, replaceObj);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = {};

module.exports = store;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(3);

var _encoder = __webpack_require__(4);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Base class for EAN8 & EAN13
var EAN = function (_Barcode) {
	_inherits(EAN, _Barcode);

	function EAN(data, options) {
		_classCallCheck(this, EAN);

		// Make sure the font is not bigger than the space between the guard bars
		var _this = _possibleConstructorReturn(this, (EAN.__proto__ || Object.getPrototypeOf(EAN)).call(this, data, options));

		_this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize;

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(EAN, [{
		key: 'encode',
		value: function encode() {
			return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
		}
	}, {
		key: 'leftText',
		value: function leftText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var textOptions = { fontSize: this.fontSize };
			var guardOptions = { height: this.guardHeight };

			return [{ data: _constants.SIDE_BIN, options: guardOptions }, { data: this.leftEncode(), text: this.leftText(), options: textOptions }, { data: _constants.MIDDLE_BIN, options: guardOptions }, { data: this.rightEncode(), text: this.rightText(), options: textOptions }, { data: _constants.SIDE_BIN, options: guardOptions }];
		}
	}, {
		key: 'encodeFlat',
		value: function encodeFlat() {
			var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];

			return {
				data: data.join(''),
				text: this.text
			};
		}
	}]);

	return EAN;
}(_Barcode3.default);

exports.default = EAN;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.checksum = checksum;

var _encoder = __webpack_require__(4);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding

var UPC = function (_Barcode) {
	_inherits(UPC, _Barcode);

	function UPC(data, options) {
		_classCallCheck(this, UPC);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{11}$/) !== -1) {
			data += checksum(data);
		}

		var _this = _possibleConstructorReturn(this, (UPC.__proto__ || Object.getPrototypeOf(UPC)).call(this, data, options));

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPC, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
		}
	}, {
		key: "encode",
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: "flatEncoding",
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
			result += "01010";
			result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
			result += "101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "guardedEncoding",
		value: function guardedEncoding() {
			var result = [];

			// Add the first digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(0, 1),
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101" + (0, _encoder2.default)(this.data[0], "L"),
				options: { height: this.guardHeight }
			});

			// Add the left side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
				text: this.text.substr(1, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the middle bits
			result.push({
				data: "01010",
				options: { height: this.guardHeight }
			});

			// Add the right side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
				text: this.text.substr(6, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: (0, _encoder2.default)(this.data[11], "R") + "101",
				options: { height: this.guardHeight }
			});

			// Add the last digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(11, 1),
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}]);

	return UPC;
}(_Barcode3.default);

// Calulate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


function checksum(number) {
	var result = 0;

	var i;
	for (i = 1; i < 11; i += 2) {
		result += parseInt(number[i]);
	}
	for (i = 0; i < 11; i += 2) {
		result += parseInt(number[i]) * 3;
	}

	return (10 - result % 10) % 10;
}

exports.default = UPC;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = optionsFromStrings;

// Convert string to integers/booleans where it should be

function optionsFromStrings(options) {
	var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];

	for (var intOption in intOptions) {
		if (intOptions.hasOwnProperty(intOption)) {
			intOption = intOptions[intOption];
			if (typeof options[intOption] === "string") {
				options[intOption] = parseInt(options[intOption], 10);
			}
		}
	}

	if (typeof options["displayValue"] === "string") {
		options["displayValue"] = options["displayValue"] != "false";
	}

	return options;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var defaults = {
	width: 2,
	height: 100,
	format: "auto",
	displayValue: true,
	fontOptions: "",
	font: "monospace",
	text: undefined,
	textAlign: "center",
	textPosition: "bottom",
	textMargin: 2,
	fontSize: 20,
	background: "#ffffff",
	lineColor: "#000000",
	margin: 10,
	marginTop: undefined,
	marginBottom: undefined,
	marginLeft: undefined,
	marginRight: undefined,
	valid: function valid() {}
};

exports.default = defaults;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getTotalWidthOfEncodings = exports.calculateEncodingAttributes = exports.getBarcodePadding = exports.getEncodingHeight = exports.getMaximumHeightOfEncodings = undefined;

var _merge = __webpack_require__(8);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getEncodingHeight(encoding, options) {
	return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
}

function getBarcodePadding(textWidth, barcodeWidth, options) {
	if (options.displayValue && barcodeWidth < textWidth) {
		if (options.textAlign == "center") {
			return Math.floor((textWidth - barcodeWidth) / 2);
		} else if (options.textAlign == "left") {
			return 0;
		} else if (options.textAlign == "right") {
			return Math.floor(textWidth - barcodeWidth);
		}
	}
	return 0;
}

function calculateEncodingAttributes(encodings, barcodeOptions, context) {
	for (var i = 0; i < encodings.length; i++) {
		var encoding = encodings[i];
		var options = (0, _merge2.default)(barcodeOptions, encoding.options);

		// Calculate the width of the encoding
		var textWidth;
		if (options.displayValue) {
			textWidth = messureText(encoding.text, options, context);
		} else {
			textWidth = 0;
		}

		var barcodeWidth = encoding.data.length * options.width;
		encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));

		encoding.height = getEncodingHeight(encoding, options);

		encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
	}
}

function getTotalWidthOfEncodings(encodings) {
	var totalWidth = 0;
	for (var i = 0; i < encodings.length; i++) {
		totalWidth += encodings[i].width;
	}
	return totalWidth;
}

function getMaximumHeightOfEncodings(encodings) {
	var maxHeight = 0;
	for (var i = 0; i < encodings.length; i++) {
		if (encodings[i].height > maxHeight) {
			maxHeight = encodings[i].height;
		}
	}
	return maxHeight;
}

function messureText(string, options, context) {
	var ctx;

	if (context) {
		ctx = context;
	} else if (typeof document !== "undefined") {
		ctx = document.createElement("canvas").getContext("2d");
	} else {
		// If the text cannot be messured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font;

	// Calculate the width of the encoding
	var size = ctx.measureText(string).width;

	return size;
}

exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
exports.getEncodingHeight = getEncodingHeight;
exports.getBarcodePadding = getBarcodePadding;
exports.calculateEncodingAttributes = calculateEncodingAttributes;
exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidInputException = function (_Error) {
	_inherits(InvalidInputException, _Error);

	function InvalidInputException(symbology, input) {
		_classCallCheck(this, InvalidInputException);

		var _this = _possibleConstructorReturn(this, (InvalidInputException.__proto__ || Object.getPrototypeOf(InvalidInputException)).call(this));

		_this.name = "InvalidInputException";

		_this.symbology = symbology;
		_this.input = input;

		_this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
		return _this;
	}

	return InvalidInputException;
}(Error);

var InvalidElementException = function (_Error2) {
	_inherits(InvalidElementException, _Error2);

	function InvalidElementException() {
		_classCallCheck(this, InvalidElementException);

		var _this2 = _possibleConstructorReturn(this, (InvalidElementException.__proto__ || Object.getPrototypeOf(InvalidElementException)).call(this));

		_this2.name = "InvalidElementException";
		_this2.message = "Not supported type to render on";
		return _this2;
	}

	return InvalidElementException;
}(Error);

var NoElementException = function (_Error3) {
	_inherits(NoElementException, _Error3);

	function NoElementException() {
		_classCallCheck(this, NoElementException);

		var _this3 = _possibleConstructorReturn(this, (NoElementException.__proto__ || Object.getPrototypeOf(NoElementException)).call(this));

		_this3.name = "NoElementException";
		_this3.message = "No element to render on.";
		return _this3;
	}

	return NoElementException;
}(Error);

exports.InvalidInputException = InvalidInputException;
exports.InvalidElementException = InvalidElementException;
exports.NoElementException = NoElementException;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f4769f9bdb7466be65088239c12046d1.eot";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts

__webpack_require__(18);

// styles
__webpack_require__(59);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

var events = __webpack_require__(19);

$(function () {
  $("#log-in-form").on("submit", events.userLogin);
  $("#register-form").on("submit", events.userRegister);
  $("#change-pw-form").on("submit", events.userPwChange);
  $("#logout-form").on("submit", events.userLogout);
  $("#create-form").on("submit", events.createInventoryItem);
  $("#index-items-form").on("submit", events.seeWarehouseItems);
  $("#index-form").on("submit", events.seeInventoryItems);
  $("#see-one-form").on("submit", events.seeOneInventoryItem);
  $("#update-form").on("submit", events.updateInventoryItem);
  $("#delete-form").on("submit", events.deleteInventoryItem);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var api = __webpack_require__(20);
var ui = __webpack_require__(22);
var getFormFields = __webpack_require__(57);

var userLogin = function userLogin(event) {
  event.preventDefault();
  var data = getFormFields(this);
  api.login(data).then(ui.onLoginSuccess).catch(ui.loginError);
  $("#log-in-form")[0].reset();
};

var userRegister = function userRegister(event) {
  event.preventDefault();
  var data = getFormFields(this);
  api.register(data).then(ui.onRegisterSuccess).catch(ui.registerError);
  $("#register-form")[0].reset();
};

var userPwChange = function userPwChange(event) {
  event.preventDefault();
  var data = getFormFields(this);
  api.pwChange(data).then(ui.onPwSuccess).catch(ui.pwError);
  $("#change-pw-form")[0].reset();
};

var userLogout = function userLogout(event) {
  event.preventDefault();
  api.logout().then(ui.onLogoutSuccess).catch(ui.logoutError);
};

var createInventoryItem = function createInventoryItem(event) {
  event.preventDefault();
  var data = getFormFields(this);
  api.createItem(data).then(ui.onCreateInventoryItemSuccess).catch(ui.onCreateInventoryError);
  $("#create-form")[0].reset();
};

var seeWarehouseItems = function seeWarehouseItems(event) {
  event.preventDefault();
  api.getWarehouseItems().then(ui.onGetWarehouseSuccess).catch(ui.onCreateInventoryError);
  $("#index-items-form")[0].reset();
};

var seeInventoryItems = function seeInventoryItems(event) {
  event.preventDefault();
  api.getInventoryItems().then(ui.onGetInventorySuccess).catch(ui.onCreateInventoryError);
  $("#index-form")[0].reset();
};

var seeOneInventoryItem = function seeOneInventoryItem(event) {
  event.preventDefault();
  var data = getFormFields(this);
  api.seeOneInventoryItem(data).then(ui.onSeeOneInventorySuccess).catch(ui.onCreateInventoryError);
  $("#see-one-form")[0].reset();
};

var updateInventoryItem = function updateInventoryItem(event) {
  event.preventDefault();
  var data = getFormFields(this);
  api.updateInventoryItem(data).then(ui.onUpdateInventorySuccess).catch(ui.onCreateInventoryError);
  $("#update-form")[0].reset();
};

var deleteInventoryItem = function deleteInventoryItem(event) {
  event.preventDefault();
  var data = getFormFields(this);
  api.deleteInventoryItem(data).then(ui.onDeleteInventorySuccess).catch(ui.onCreateInventoryError);
  $("#delete-form")[0].reset();
};

module.exports = {
  userLogin: userLogin,
  userRegister: userRegister,
  userPwChange: userPwChange,
  userLogout: userLogout,
  createInventoryItem: createInventoryItem,
  seeWarehouseItems: seeWarehouseItems,
  seeInventoryItems: seeInventoryItems,
  seeOneInventoryItem: seeOneInventoryItem,
  updateInventoryItem: updateInventoryItem,
  deleteInventoryItem: deleteInventoryItem
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var config = __webpack_require__(21);
var store = __webpack_require__(9);

var register = function register(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  });
};

var login = function login(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  });
};

var pwChange = function pwChange(data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  });
};

var logout = function logout() {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

var createItem = function createItem(data) {
  return $.ajax({
    url: config.apiUrl + '/inventories',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "inventory": {
        "itemReference": '' + data.itemReference,
        "onhand": '' + data.onhand,
        "needed": '' + data.needed
      }
    }
  });
};

var getWarehouseItems = function getWarehouseItems() {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

var getInventoryItems = function getInventoryItems() {
  return $.ajax({
    url: config.apiUrl + '/inventories',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

var seeOneInventoryItem = function seeOneInventoryItem(data) {
  return $.ajax({
    url: config.apiUrl + '/inventories/' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

var updateInventoryItem = function updateInventoryItem(data) {
  return $.ajax({
    url: config.apiUrl + '/inventories/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "inventory": {
        "onhand": '' + data.onhand,
        "needed": '' + data.needed
      }
    }
  });
};

var deleteInventoryItem = function deleteInventoryItem(data) {
  return $.ajax({
    url: config.apiUrl + '/inventories/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

module.exports = {
  register: register,
  login: login,
  pwChange: pwChange,
  logout: logout,
  createItem: createItem,
  getWarehouseItems: getWarehouseItems,
  getInventoryItems: getInventoryItems,
  seeOneInventoryItem: seeOneInventoryItem,
  updateInventoryItem: updateInventoryItem,
  deleteInventoryItem: deleteInventoryItem
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apiUrl = void 0;
var apiUrls = {
  production: 'https://ga-inventory-manager.herokuapp.com',
  development: 'http://localhost:4741'
};

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

module.exports = {
  apiUrl: apiUrl
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var store = __webpack_require__(9);
var JsBarcode = __webpack_require__(23);

var onLoginSuccess = function onLoginSuccess(data) {
  $('.modal-body').html('');
  $(".modal-dialog").css("width", "40%");
  $("#myModalLabel").html('Success!');
  var scoreHTML = '\n      <h4>User Logged In</h4>\n      <p>Welcome to IMS</p>\n      <br>\n    ';
  $(".modal-body").html(scoreHTML);
  $("#myModal").modal('show');
  $(".form2").css("display", "none");
  $(".form1").css("display", "none");
  $(".user-dash").css("display", "flex");
  $(".flex-container").css("display", "flex");
  $("#image").css("display", "none");
  store.user = data.user;
};

var loginError = function loginError(error) {
  $('.modal-body').html('');
  $(".modal-dialog").css("width", "40%");
  $("#myModalLabel").html('Error');
  var scoreHTML = '\n    <h4>Oh no! Something Went Wrong!</h4>\n    <p>Try logging in again</p>\n    <br>\n  ';
  $(".modal-body").html(scoreHTML);
  $("#myModal").modal('show');
};

var onRegisterSuccess = function onRegisterSuccess(data) {
  $('.modal-body').html('');
  $(".modal-dialog").css("width", "40%");
  $("#myModalLabel").html('Success!');
  var scoreHTML = '\n      <h4>User Registered!</h4>\n      <p>Log in to enter IMS</p>\n      <br>\n    ';
  $(".modal-body").html(scoreHTML);
  $("#myModal").modal('show');
  $(".form1").css("display", "none");
};

var registerError = function registerError(error) {
  if (error) {
    $('.modal-body').html('');
    $(".modal-dialog").css("width", "40%");
    $("#myModalLabel").html('Error');
    var scoreHTML = '\n        <h4>Oh no! Something Went Wrong!</h4>\n        <p>Try registering again</p>\n        <br>\n      ';
    $(".modal-body").html(scoreHTML);
    $("#myModal").modal('show');
  }
};

var onPwSuccess = function onPwSuccess() {
  $('.modal-body').html('');
  $(".modal-dialog").css("width", "40%");
  $("#myModalLabel").html('Success!');
  var scoreHTML = '\n      <h4>User Changed Password</h4>\n      <br>\n    ';
  $(".modal-body").html(scoreHTML);
  $("#myModal").modal('show');
};

var pwError = function pwError(error) {
  if (error) {
    $(".modal-dialog").css("width", "40%");
    $('.modal-body').html('');
    $("#myModalLabel").html('Error');
    var scoreHTML = '\n        <h4>Oh no! Something Went Wrong!</h4>\n        <p>Try entering passwords again</p>\n        <br>\n      ';
    $(".modal-body").html(scoreHTML);
    $("#myModal").modal('show');
  }
};

var onLogoutSuccess = function onLogoutSuccess() {
  $('.modal-body').html('');
  $(".modal-dialog").css("width", "40%");
  $("#myModalLabel").html('Success!');
  var message = '\n  <h4>User Logged out</h4>\n  <h3>Thank You!</h3>\n  ';
  $(".modal-body").html(message);
  $("#myModal").modal('show');

  $(".user-dash").css("display", "none");
  $(".form1").css("display", "flex");
  $(".form2").css("display", "flex");
  $(".flex-container").css("display", "none");
  $("#image").css("display", "block");
};

var logoutError = function logoutError(error) {
  if (error) {
    $(".modal-dialog").css("width", "40%");
    $('.modal-body').html('');
    $("#myModalLabel").html('Error');
    var scoreHTML = '\n        <h4>Oh no! Something Went Wrong!</h4>\n        <p>Try logging out again</p>\n        <br>\n      ';
    $(".modal-body").html(scoreHTML);
    $("#myModal").modal('show');
  }
};

var onCreateInventoryItemSuccess = function onCreateInventoryItemSuccess(data) {
  $('.modal-body2').html('');
  $(".modal-dialog").css("width", "40%");

  JsBarcode("#barcode2", '' + data.inventory._id, {
    width: 1,
    height: 40,
    margin: 8,
    lineColor: "#333231",
    font: "monospace",
    fontSize: 16
  });
  $("#myModalLabel2").html('Success!');
  var scoreHTML = '\n      <h4>Created Inventory Entry</h4>\n      <p>Inventory Reference Code Is:</p>\n    ';
  $(".modal-body2").html(scoreHTML);
  $("#myModal2").modal('show');
};

var onCreateInventoryError = function onCreateInventoryError(error) {
  if (error) {
    $('.modal-body').html('');
    $(".modal-dialog").css("width", "40%");
    $("#myModalLabel").html('Error');
    var scoreHTML = '\n        <h4>Oh no! Something Went Wrong!</h4>\n        <p>Try again</p>\n        <br>\n      ';
    $(".modal-body").html(scoreHTML);
    $("#myModal").modal('show');
  }
};

var getInventoryError = function getInventoryError(error) {
  if (error) {
    $('.modal-body').html('');
    $(".modal-dialog").css("width", "40%");
    $("#myModalLabel").html('Error');
    var scoreHTML = '\n        <h4>Oh no! Something Went Wrong!</h4>\n        <p>Try again</p>\n        <br>\n      ';
    $(".modal-body").html(scoreHTML);
    $("#myModal").modal('show');
  }
};

var onGetWarehouseSuccess = function onGetWarehouseSuccess(data) {
  $('.modal-body').html('');
  $(".modal-dialog").css("width", "90%");
  $("#myModalLabel").html('Success!');
  // loop through API data
  var scoreHTMLHeaders = '\n  <h4>Warehouse Items</h4>\n  <div id="table">\n    <div class="tr">\n      <span class="th">ID</span>\n      <span class="th">Name</span>\n      <span class="th">Description</span>\n      <span class="th">Price</span>\n    </div>\n  </div>\n  ';

  $(".modal-body").append(scoreHTMLHeaders);

  data.items.forEach(function (item) {
    // build HTML element with data
    var scoreHTML = '\n      <div class="tr" data-id=' + item._id + '>\n        <span class="td">\n          ' + item._id + '\n        </span>\n        <span class="td">\n          ' + item.name + '\n        </span>\n        <span class="td">\n          ' + item.description + '\n        </span>\n        <span class="td">\n          $' + item.price + '\n        </span>\n      </div>\n    ';
    $("#table").append(scoreHTML);
    $("#myModal").modal('show');
  });
};

var onGetInventorySuccess = function onGetInventorySuccess(data) {
  $('.modal-body').html('');
  $(".modal-dialog").css("width", "90%");
  $("#myModalLabel").html('Success!');
  var scoreHTMLHeaders = '\n  <h4>Inventory Items</h4>\n  <div id="table">\n    <div class="tr">\n      <span class="th" id="wide1">Inventory ID</span>\n      <span class="th" id="wide2">Warehouse ID</span>\n      <span class="th" id="wide3">Product Name</span>\n      <span class="th" id="narrow1">$</span>\n      <span class="th" id="narrow2">OH</span>\n      <span class="th" id="narrow3">QN</span>\n      <span class="th" id="pic">Barcode</span>\n    </div>\n  </div>\n  ';

  $(".modal-body").append(scoreHTMLHeaders);
  // loop through API data
  data.inventories.forEach(function (inventory) {
    // build HTML element with data
    var barcode = '' + inventory._id;
    var scoreHTML = '\n    <div class="tr" data-id=' + inventory._id + '>\n      <span class="td">' + inventory._id + '</span>\n      <span class="td">' + inventory.itemReference._id + '</span>\n      <span class="td">' + inventory.itemReference.name + '</span>\n      <span class="td">$' + inventory.itemReference.price + '</span>\n      <span class="td">' + inventory.onhand + '</span>\n      <span class="td">' + inventory.needed + '</span>\n      <span class="td"><img id="b' + barcode + '" width="100%"></span>\n    </div>\n    ';
    $("#table").append(scoreHTML);
  });

  for (var i = 0; i < data.inventories.length; i++) {
    var barcode = 'b' + data.inventories[i]._id;
    JsBarcode('#' + barcode, '' + barcode, {
      width: 1,
      height: 40,
      margin: 8,
      lineColor: "#333231",
      font: "monospace",
      fontSize: 16
    });
  }
  $("#myModal").modal('show');
};

var onSeeOneInventorySuccess = function onSeeOneInventorySuccess(data) {
  $('.modal-body').html('');
  $(".modal-dialog").css("width", "40%");
  $("#myModalLabel").html('Success!');
  // data.inventory
  var scoreHTML = '\n      <h4>Inventory Item</h4>\n      <br>\n      <p>Inventory Item ID: ' + data.inventory._id + '</p>\n      <p>Product Manufacturer ID: ' + data.inventory.itemReference._id + '</p>\n      <p>Name: ' + data.inventory.itemReference.name + '</p>\n      <p>Product Price: $' + data.inventory.itemReference.price + '</p>\n      <p>Quantity on Hand: ' + data.inventory.onhand + '</p>\n      <p>Quantity Needed: ' + data.inventory.needed + '</p>\n      <br>\n    ';
  $(".modal-body").html(scoreHTML);
  $("#myModal").modal('show');
};

var onUpdateInventorySuccess = function onUpdateInventorySuccess() {
  $('.modal-body').html('');
  $(".modal-dialog").css("width", "40%");
  $("#myModalLabel").html('Success!');
  var scoreHTML = '\n    <h4>Updated Inventory Item!</h4>\n    ';
  $(".modal-body").html(scoreHTML);
  $("#myModal").modal('show');
};

var onDeleteInventorySuccess = function onDeleteInventorySuccess() {
  $('.modal-body').html('');
  $(".modal-dialog").css("width", "40%");
  $("#myModalLabel").html('Success!');
  var scoreHTML = '\n      <h4>Item Deleted Successfully!</h4>\n      <br>\n    ';
  $(".modal-body").html(scoreHTML);
  $("#myModal").modal('show');
};

module.exports = {
  onRegisterSuccess: onRegisterSuccess,
  onLoginSuccess: onLoginSuccess,
  onPwSuccess: onPwSuccess,
  pwError: pwError,
  onLogoutSuccess: onLogoutSuccess,
  logoutError: logoutError,
  loginError: loginError,
  registerError: registerError,
  onCreateInventoryItemSuccess: onCreateInventoryItemSuccess,
  onCreateInventoryError: onCreateInventoryError,
  onGetWarehouseSuccess: onGetWarehouseSuccess,
  onGetInventorySuccess: onGetInventorySuccess,
  getInventoryError: getInventoryError,
  onSeeOneInventorySuccess: onSeeOneInventorySuccess,
  onUpdateInventorySuccess: onUpdateInventorySuccess,
  onDeleteInventorySuccess: onDeleteInventorySuccess
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _barcodes = __webpack_require__(24);

var _barcodes2 = _interopRequireDefault(_barcodes);

var _merge = __webpack_require__(8);

var _merge2 = _interopRequireDefault(_merge);

var _linearizeEncodings = __webpack_require__(48);

var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);

var _fixOptions = __webpack_require__(49);

var _fixOptions2 = _interopRequireDefault(_fixOptions);

var _getRenderProperties = __webpack_require__(50);

var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);

var _optionsFromStrings = __webpack_require__(12);

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _ErrorHandler = __webpack_require__(56);

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

var _exceptions = __webpack_require__(15);

var _defaults = __webpack_require__(13);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The protype of the object returned from the JsBarcode() call


// Help functions
var API = function API() {};

// The first call of the library API
// Will return an object with all barcodes calls and the data that is used
// by the renderers


// Default values


// Exceptions
// Import all the barcodes
var JsBarcode = function JsBarcode(element, text, options) {
	var api = new API();

	if (typeof element === "undefined") {
		throw Error("No element to render on was provided.");
	}

	// Variables that will be pased through the API calls
	api._renderProperties = (0, _getRenderProperties2.default)(element);
	api._encodings = [];
	api._options = _defaults2.default;
	api._errorHandler = new _ErrorHandler2.default(api);

	// If text is set, use the simple syntax (render the barcode directly)
	if (typeof text !== "undefined") {
		options = options || {};

		if (!options.format) {
			options.format = autoSelectBarcode();
		}

		api.options(options)[options.format](text, options).render();
	}

	return api;
};

// To make tests work TODO: remove
JsBarcode.getModule = function (name) {
	return _barcodes2.default[name];
};

// Register all barcodes
for (var name in _barcodes2.default) {
	if (_barcodes2.default.hasOwnProperty(name)) {
		// Security check if the propery is a prototype property
		registerBarcode(_barcodes2.default, name);
	}
}
function registerBarcode(barcodes, name) {
	API.prototype[name] = API.prototype[name.toUpperCase()] = API.prototype[name.toLowerCase()] = function (text, options) {
		var api = this;
		return api._errorHandler.wrapBarcodeCall(function () {
			// Ensure text is options.text
			options.text = typeof options.text === 'undefined' ? undefined : '' + options.text;

			var newOptions = (0, _merge2.default)(api._options, options);
			newOptions = (0, _optionsFromStrings2.default)(newOptions);
			var Encoder = barcodes[name];
			var encoded = encode(text, Encoder, newOptions);
			api._encodings.push(encoded);

			return api;
		});
	};
}

// encode() handles the Encoder call and builds the binary string to be rendered
function encode(text, Encoder, options) {
	// Ensure that text is a string
	text = "" + text;

	var encoder = new Encoder(text, options);

	// If the input is not valid for the encoder, throw error.
	// If the valid callback option is set, call it instead of throwing error
	if (!encoder.valid()) {
		throw new _exceptions.InvalidInputException(encoder.constructor.name, text);
	}

	// Make a request for the binary data (and other infromation) that should be rendered
	var encoded = encoder.encode();

	// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
	// Convert to [1-1, 1-2, 2, 3-1, 3-2]
	encoded = (0, _linearizeEncodings2.default)(encoded);

	// Merge
	for (var i = 0; i < encoded.length; i++) {
		encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
	}

	return encoded;
}

function autoSelectBarcode() {
	// If CODE128 exists. Use it
	if (_barcodes2.default["CODE128"]) {
		return "CODE128";
	}

	// Else, take the first (probably only) barcode
	return Object.keys(_barcodes2.default)[0];
}

// Sets global encoder options
// Added to the api by the JsBarcode function
API.prototype.options = function (options) {
	this._options = (0, _merge2.default)(this._options, options);
	return this;
};

// Will create a blank space (usually in between barcodes)
API.prototype.blank = function (size) {
	var zeroes = new Array(size + 1).join("0");
	this._encodings.push({ data: zeroes });
	return this;
};

// Initialize JsBarcode on all HTML elements defined.
API.prototype.init = function () {
	// Should do nothing if no elements where found
	if (!this._renderProperties) {
		return;
	}

	// Make sure renderProperies is an array
	if (!Array.isArray(this._renderProperties)) {
		this._renderProperties = [this._renderProperties];
	}

	var renderProperty;
	for (var i in this._renderProperties) {
		renderProperty = this._renderProperties[i];
		var options = (0, _merge2.default)(this._options, renderProperty.options);

		if (options.format == "auto") {
			options.format = autoSelectBarcode();
		}

		this._errorHandler.wrapBarcodeCall(function () {
			var text = options.value;
			var Encoder = _barcodes2.default[options.format.toUpperCase()];
			var encoded = encode(text, Encoder, options);

			render(renderProperty, encoded, options);
		});
	}
};

// The render API call. Calls the real render function.
API.prototype.render = function () {
	if (!this._renderProperties) {
		throw new _exceptions.NoElementException();
	}

	if (Array.isArray(this._renderProperties)) {
		for (var i = 0; i < this._renderProperties.length; i++) {
			render(this._renderProperties[i], this._encodings, this._options);
		}
	} else {
		render(this._renderProperties, this._encodings, this._options);
	}

	return this;
};

API.prototype._defaults = _defaults2.default;

// Prepares the encodings and calls the renderer
function render(renderProperties, encodings, options) {
	encodings = (0, _linearizeEncodings2.default)(encodings);

	for (var i = 0; i < encodings.length; i++) {
		encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
		(0, _fixOptions2.default)(encodings[i].options);
	}

	(0, _fixOptions2.default)(options);

	var Renderer = renderProperties.renderer;
	var renderer = new Renderer(renderProperties.element, encodings, options);
	renderer.render();

	if (renderProperties.afterRender) {
		renderProperties.afterRender();
	}
}

// Export to browser
if (typeof window !== "undefined") {
	window.JsBarcode = JsBarcode;
}

// Export to jQuery
/*global jQuery */
if (typeof jQuery !== 'undefined') {
	jQuery.fn.JsBarcode = function (content, options) {
		var elementArray = [];
		jQuery(this).each(function () {
			elementArray.push(this);
		});
		return JsBarcode(elementArray, content, options);
	};
}

// Export to commonJS
module.exports = JsBarcode;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _CODE = __webpack_require__(25);

var _CODE2 = __webpack_require__(26);

var _EAN_UPC = __webpack_require__(32);

var _ITF = __webpack_require__(38);

var _ITF2 = __webpack_require__(39);

var _MSI = __webpack_require__(40);

var _pharmacode = __webpack_require__(45);

var _codabar = __webpack_require__(46);

var _GenericBarcode = __webpack_require__(47);

exports.default = {
	CODE39: _CODE.CODE39,
	CODE128: _CODE2.CODE128, CODE128A: _CODE2.CODE128A, CODE128B: _CODE2.CODE128B, CODE128C: _CODE2.CODE128C,
	EAN13: _EAN_UPC.EAN13, EAN8: _EAN_UPC.EAN8, EAN5: _EAN_UPC.EAN5, EAN2: _EAN_UPC.EAN2, UPC: _EAN_UPC.UPC, UPCE: _EAN_UPC.UPCE,
	ITF14: _ITF.ITF14,
	ITF: _ITF2.ITF,
	MSI: _MSI.MSI, MSI10: _MSI.MSI10, MSI11: _MSI.MSI11, MSI1010: _MSI.MSI1010, MSI1110: _MSI.MSI1110,
	pharmacode: _pharmacode.pharmacode,
	codabar: _codabar.codabar,
	GenericBarcode: _GenericBarcode.GenericBarcode
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CODE39 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_39#Encoding

var CODE39 = function (_Barcode) {
	_inherits(CODE39, _Barcode);

	function CODE39(data, options) {
		_classCallCheck(this, CODE39);

		data = data.toUpperCase();

		// Calculate mod43 checksum if enabled
		if (options.mod43) {
			data += getCharacter(mod43checksum(data));
		}

		return _possibleConstructorReturn(this, (CODE39.__proto__ || Object.getPrototypeOf(CODE39)).call(this, data, options));
	}

	_createClass(CODE39, [{
		key: "encode",
		value: function encode() {
			// First character is always a *
			var result = getEncoding("*");

			// Take every character and add the binary representation to the result
			for (var i = 0; i < this.data.length; i++) {
				result += getEncoding(this.data[i]) + "0";
			}

			// Last character is always a *
			result += getEncoding("*");

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
		}
	}]);

	return CODE39;
}(_Barcode3.default);

// All characters. The position in the array is the (checksum) value


var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"];

// The decimal representation of the characters, is converted to the
// corresponding binary with the getEncoding function
var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];

// Get the binary representation of a character by converting the encodings
// from decimal to binary
function getEncoding(character) {
	return getBinary(characterValue(character));
}

function getBinary(characterValue) {
	return encodings[characterValue].toString(2);
}

function getCharacter(characterValue) {
	return characters[characterValue];
}

function characterValue(character) {
	return characters.indexOf(character);
}

function mod43checksum(data) {
	var checksum = 0;
	for (var i = 0; i < data.length; i++) {
		checksum += characterValue(data[i]);
	}

	checksum = checksum % 43;
	return checksum;
}

exports.CODE39 = CODE39;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CODE128C = exports.CODE128B = exports.CODE128A = exports.CODE128 = undefined;

var _CODE128_AUTO = __webpack_require__(27);

var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);

var _CODE128A = __webpack_require__(29);

var _CODE128A2 = _interopRequireDefault(_CODE128A);

var _CODE128B = __webpack_require__(30);

var _CODE128B2 = _interopRequireDefault(_CODE128B);

var _CODE128C = __webpack_require__(31);

var _CODE128C2 = _interopRequireDefault(_CODE128C);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CODE128 = _CODE128_AUTO2.default;
exports.CODE128A = _CODE128A2.default;
exports.CODE128B = _CODE128B2.default;
exports.CODE128C = _CODE128C2.default;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _CODE2 = __webpack_require__(6);

var _CODE3 = _interopRequireDefault(_CODE2);

var _auto = __webpack_require__(28);

var _auto2 = _interopRequireDefault(_auto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128AUTO = function (_CODE) {
	_inherits(CODE128AUTO, _CODE);

	function CODE128AUTO(data, options) {
		_classCallCheck(this, CODE128AUTO);

		// ASCII value ranges 0-127, 200-211
		if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, (0, _auto2.default)(data), options));
		} else {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, data, options));
		}
		return _possibleConstructorReturn(_this);
	}

	return CODE128AUTO;
}(_CODE3.default);

exports.default = CODE128AUTO;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(2);

// Match Set functions
var matchSetALength = function matchSetALength(string) {
	return string.match(new RegExp('^' + _constants.A_CHARS + '*'))[0].length;
};
var matchSetBLength = function matchSetBLength(string) {
	return string.match(new RegExp('^' + _constants.B_CHARS + '*'))[0].length;
};
var matchSetC = function matchSetC(string) {
	return string.match(new RegExp('^' + _constants.C_CHARS + '*'))[0];
};

// CODE128A or CODE128B
function autoSelectFromAB(string, isA) {
	var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
	var untilC = string.match(new RegExp('^(' + ranges + '+?)(([0-9]{2}){2,})([^0-9]|$)'));

	if (untilC) {
		return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
	}

	var chars = string.match(new RegExp('^' + ranges + '+'))[0];

	if (chars.length === string.length) {
		return string;
	}

	return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
}

// CODE128C
function autoSelectFromC(string) {
	var cMatch = matchSetC(string);
	var length = cMatch.length;

	if (length === string.length) {
		return string;
	}

	string = string.substring(length);

	// Select A/B depending on the longest match
	var isA = matchSetALength(string) >= matchSetBLength(string);
	return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
}

// Detect Code Set (A, B or C) and format the string

exports.default = function (string) {
	var newString = void 0;
	var cLength = matchSetC(string).length;

	// Select 128C if the string start with enough digits
	if (cLength >= 2) {
		newString = _constants.C_START_CHAR + autoSelectFromC(string);
	} else {
		// Select A/B depending on the longest match
		var isA = matchSetALength(string) > matchSetBLength(string);
		newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
	}

	return newString.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, // Any sequence between 205 and 206 characters
	function (match, char) {
		return String.fromCharCode(203) + char;
	});
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(6);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128A = function (_CODE) {
	_inherits(CODE128A, _CODE);

	function CODE128A(string, options) {
		_classCallCheck(this, CODE128A);

		return _possibleConstructorReturn(this, (CODE128A.__proto__ || Object.getPrototypeOf(CODE128A)).call(this, _constants.A_START_CHAR + string, options));
	}

	_createClass(CODE128A, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.A_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128A;
}(_CODE3.default);

exports.default = CODE128A;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(6);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128B = function (_CODE) {
	_inherits(CODE128B, _CODE);

	function CODE128B(string, options) {
		_classCallCheck(this, CODE128B);

		return _possibleConstructorReturn(this, (CODE128B.__proto__ || Object.getPrototypeOf(CODE128B)).call(this, _constants.B_START_CHAR + string, options));
	}

	_createClass(CODE128B, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.B_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128B;
}(_CODE3.default);

exports.default = CODE128B;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(6);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128C = function (_CODE) {
	_inherits(CODE128C, _CODE);

	function CODE128C(string, options) {
		_classCallCheck(this, CODE128C);

		return _possibleConstructorReturn(this, (CODE128C.__proto__ || Object.getPrototypeOf(CODE128C)).call(this, _constants.C_START_CHAR + string, options));
	}

	_createClass(CODE128C, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.C_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128C;
}(_CODE3.default);

exports.default = CODE128C;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPCE = exports.UPC = exports.EAN2 = exports.EAN5 = exports.EAN8 = exports.EAN13 = undefined;

var _EAN = __webpack_require__(33);

var _EAN2 = _interopRequireDefault(_EAN);

var _EAN3 = __webpack_require__(34);

var _EAN4 = _interopRequireDefault(_EAN3);

var _EAN5 = __webpack_require__(35);

var _EAN6 = _interopRequireDefault(_EAN5);

var _EAN7 = __webpack_require__(36);

var _EAN8 = _interopRequireDefault(_EAN7);

var _UPC = __webpack_require__(11);

var _UPC2 = _interopRequireDefault(_UPC);

var _UPCE = __webpack_require__(37);

var _UPCE2 = _interopRequireDefault(_UPCE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EAN13 = _EAN2.default;
exports.EAN8 = _EAN4.default;
exports.EAN5 = _EAN6.default;
exports.EAN2 = _EAN8.default;
exports.UPC = _UPC2.default;
exports.UPCE = _UPCE2.default;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _constants = __webpack_require__(3);

var _EAN2 = __webpack_require__(10);

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Binary_encoding_of_data_digits_into_EAN-13_barcode

// Calculate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit
var checksum = function checksum(number) {
	var res = number.substr(0, 12).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 3 : sum + a;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN13 = function (_EAN) {
	_inherits(EAN13, _EAN);

	function EAN13(data, options) {
		_classCallCheck(this, EAN13);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{12}$/) !== -1) {
			data += checksum(data);
		}

		// Adds a last character to the end of the barcode
		var _this = _possibleConstructorReturn(this, (EAN13.__proto__ || Object.getPrototypeOf(EAN13)).call(this, data, options));

		_this.lastChar = options.lastChar;
		return _this;
	}

	_createClass(EAN13, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftText', this).call(this, 1, 6);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(1, 6);
			var structure = _constants.EAN13_STRUCTURE[this.data[0]];
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftEncode', this).call(this, data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightText', this).call(this, 7, 6);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(7, 6);
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightEncode', this).call(this, data, 'RRRRRR');
		}

		// The "standard" way of printing EAN13 barcodes with guard bars

	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var data = _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'encodeGuarded', this).call(this);

			// Extend data with left digit & last character
			if (this.options.displayValue) {
				data.unshift({
					data: '000000000000',
					text: this.text.substr(0, 1),
					options: { textAlign: 'left', fontSize: this.fontSize }
				});

				if (this.options.lastChar) {
					data.push({
						data: '00'
					});
					data.push({
						data: '00000',
						text: this.options.lastChar,
						options: { fontSize: this.fontSize }
					});
				}
			}

			return data;
		}
	}]);

	return EAN13;
}(_EAN3.default);

exports.default = EAN13;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EAN2 = __webpack_require__(10);

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// http://www.barcodeisland.com/ean8.phtml

// Calculate the checksum digit
var checksum = function checksum(number) {
	var res = number.substr(0, 7).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a : sum + a * 3;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN8 = function (_EAN) {
	_inherits(EAN8, _EAN);

	function EAN8(data, options) {
		_classCallCheck(this, EAN8);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{7}$/) !== -1) {
			data += checksum(data);
		}

		return _possibleConstructorReturn(this, (EAN8.__proto__ || Object.getPrototypeOf(EAN8)).call(this, data, options));
	}

	_createClass(EAN8, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftText', this).call(this, 0, 4);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(0, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftEncode', this).call(this, data, 'LLLL');
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightText', this).call(this, 4, 4);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(4, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightEncode', this).call(this, data, 'RRRR');
		}
	}]);

	return EAN8;
}(_EAN3.default);

exports.default = EAN8;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(3);

var _encoder = __webpack_require__(4);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_5#Encoding

var checksum = function checksum(data) {
	var result = data.split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 9 : sum + a * 3;
	}, 0);
	return result % 10;
};

var EAN5 = function (_Barcode) {
	_inherits(EAN5, _Barcode);

	function EAN5(data, options) {
		_classCallCheck(this, EAN5);

		return _possibleConstructorReturn(this, (EAN5.__proto__ || Object.getPrototypeOf(EAN5)).call(this, data, options));
	}

	_createClass(EAN5, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{5}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];
			return {
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN5;
}(_Barcode3.default);

exports.default = EAN5;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(3);

var _encoder = __webpack_require__(4);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_2#Encoding

var EAN2 = function (_Barcode) {
	_inherits(EAN2, _Barcode);

	function EAN2(data, options) {
		_classCallCheck(this, EAN2);

		return _possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
	}

	_createClass(EAN2, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{2}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			// Choose the structure based on the number mod 4
			var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];
			return {
				// Start bits + Encode the two digits with 01 in between
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN2;
}(_Barcode3.default);

exports.default = EAN2;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encoder = __webpack_require__(4);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _UPC = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding
//
// UPC-E documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#UPC-E

var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];

var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];

var UPCE = function (_Barcode) {
	_inherits(UPCE, _Barcode);

	function UPCE(data, options) {
		_classCallCheck(this, UPCE);

		var _this = _possibleConstructorReturn(this, (UPCE.__proto__ || Object.getPrototypeOf(UPCE)).call(this, data, options));
		// Code may be 6 or 8 digits;
		// A 7 digit code is ambiguous as to whether the extra digit
		// is a UPC-A check or number system digit.


		_this.isValid = false;
		if (data.search(/^[0-9]{6}$/) !== -1) {
			_this.middleDigits = data;
			_this.upcA = expandToUPCA(data, "0");
			_this.text = options.text || '' + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
			_this.isValid = true;
		} else if (data.search(/^[01][0-9]{7}$/) !== -1) {
			_this.middleDigits = data.substring(1, data.length - 1);
			_this.upcA = expandToUPCA(_this.middleDigits, data[0]);

			if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
				_this.isValid = true;
			} else {
				// checksum mismatch
				return _possibleConstructorReturn(_this);
			}
		} else {
			return _possibleConstructorReturn(_this);
		}

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPCE, [{
		key: 'valid',
		value: function valid() {
			return this.isValid;
		}
	}, {
		key: 'encode',
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: 'flatEncoding',
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += this.encodeMiddleDigits();
			result += "010101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: 'guardedEncoding',
		value: function guardedEncoding() {
			var result = [];

			// Add the UPC-A number system digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[0],
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101",
				options: { height: this.guardHeight }
			});

			// Add the 6 UPC-E digits
			result.push({
				data: this.encodeMiddleDigits(),
				text: this.text.substring(1, 7),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: "010101",
				options: { height: this.guardHeight }
			});

			// Add the UPC-A check digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[7],
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}, {
		key: 'encodeMiddleDigits',
		value: function encodeMiddleDigits() {
			var numberSystem = this.upcA[0];
			var checkDigit = this.upcA[this.upcA.length - 1];
			var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
			return (0, _encoder2.default)(this.middleDigits, parity);
		}
	}]);

	return UPCE;
}(_Barcode3.default);

function expandToUPCA(middleDigits, numberSystem) {
	var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
	var expansion = EXPANSIONS[lastUpcE];

	var result = "";
	var digitIndex = 0;
	for (var i = 0; i < expansion.length; i++) {
		var c = expansion[i];
		if (c === 'X') {
			result += middleDigits[digitIndex++];
		} else {
			result += c;
		}
	}

	result = '' + numberSystem + result;
	return '' + result + (0, _UPC.checksum)(result);
}

exports.default = UPCE;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ITF14 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITF14 = function (_Barcode) {
	_inherits(ITF14, _Barcode);

	function ITF14(data, options) {
		_classCallCheck(this, ITF14);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{13}$/) !== -1) {
			data += checksum(data);
		}

		var _this = _possibleConstructorReturn(this, (ITF14.__proto__ || Object.getPrototypeOf(ITF14)).call(this, data, options));

		_this.binaryRepresentation = {
			"0": "00110",
			"1": "10001",
			"2": "01001",
			"3": "11000",
			"4": "00101",
			"5": "10100",
			"6": "01100",
			"7": "00011",
			"8": "10010",
			"9": "01010"
		};
		return _this;
	}

	_createClass(ITF14, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]{14}$/) !== -1 && this.data[13] == checksum(this.data);
		}
	}, {
		key: "encode",
		value: function encode() {
			var result = "1010";

			// Calculate all the digit pairs
			for (var i = 0; i < 14; i += 2) {
				result += this.calculatePair(this.data.substr(i, 2));
			}

			// Always add the same end bits
			result += "11101";

			return {
				data: result,
				text: this.text
			};
		}

		// Calculate the data of a number pair

	}, {
		key: "calculatePair",
		value: function calculatePair(numberPair) {
			var result = "";

			var number1Struct = this.binaryRepresentation[numberPair[0]];
			var number2Struct = this.binaryRepresentation[numberPair[1]];

			// Take every second bit and add to the result
			for (var i = 0; i < 5; i++) {
				result += number1Struct[i] == "1" ? "111" : "1";
				result += number2Struct[i] == "1" ? "000" : "0";
			}

			return result;
		}
	}]);

	return ITF14;
}(_Barcode3.default);

// Calulate the checksum digit


function checksum(data) {
	var result = 0;

	for (var i = 0; i < 13; i++) {
		result += parseInt(data[i]) * (3 - i % 2 * 2);
	}

	return Math.ceil(result / 10) * 10 - result;
}

exports.ITF14 = ITF14;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ITF = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITF = function (_Barcode) {
	_inherits(ITF, _Barcode);

	function ITF(data, options) {
		_classCallCheck(this, ITF);

		var _this = _possibleConstructorReturn(this, (ITF.__proto__ || Object.getPrototypeOf(ITF)).call(this, data, options));

		_this.binaryRepresentation = {
			"0": "00110",
			"1": "10001",
			"2": "01001",
			"3": "11000",
			"4": "00101",
			"5": "10100",
			"6": "01100",
			"7": "00011",
			"8": "10010",
			"9": "01010"
		};
		return _this;
	}

	_createClass(ITF, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^([0-9]{2})+$/) !== -1;
		}
	}, {
		key: "encode",
		value: function encode() {
			// Always add the same start bits
			var result = "1010";

			// Calculate all the digit pairs
			for (var i = 0; i < this.data.length; i += 2) {
				result += this.calculatePair(this.data.substr(i, 2));
			}

			// Always add the same end bits
			result += "11101";

			return {
				data: result,
				text: this.text
			};
		}

		// Calculate the data of a number pair

	}, {
		key: "calculatePair",
		value: function calculatePair(numberPair) {
			var result = "";

			var number1Struct = this.binaryRepresentation[numberPair[0]];
			var number2Struct = this.binaryRepresentation[numberPair[1]];

			// Take every second bit and add to the result
			for (var i = 0; i < 5; i++) {
				result += number1Struct[i] == "1" ? "111" : "1";
				result += number2Struct[i] == "1" ? "000" : "0";
			}

			return result;
		}
	}]);

	return ITF;
}(_Barcode3.default);

exports.ITF = ITF;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MSI1110 = exports.MSI1010 = exports.MSI11 = exports.MSI10 = exports.MSI = undefined;

var _MSI = __webpack_require__(5);

var _MSI2 = _interopRequireDefault(_MSI);

var _MSI3 = __webpack_require__(41);

var _MSI4 = _interopRequireDefault(_MSI3);

var _MSI5 = __webpack_require__(42);

var _MSI6 = _interopRequireDefault(_MSI5);

var _MSI7 = __webpack_require__(43);

var _MSI8 = _interopRequireDefault(_MSI7);

var _MSI9 = __webpack_require__(44);

var _MSI10 = _interopRequireDefault(_MSI9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MSI = _MSI2.default;
exports.MSI10 = _MSI4.default;
exports.MSI11 = _MSI6.default;
exports.MSI1010 = _MSI8.default;
exports.MSI1110 = _MSI10.default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(5);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI10 = function (_MSI) {
	_inherits(MSI10, _MSI);

	function MSI10(data, options) {
		_classCallCheck(this, MSI10);

		return _possibleConstructorReturn(this, (MSI10.__proto__ || Object.getPrototypeOf(MSI10)).call(this, data + (0, _checksums.mod10)(data), options));
	}

	return MSI10;
}(_MSI3.default);

exports.default = MSI10;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(5);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI11 = function (_MSI) {
	_inherits(MSI11, _MSI);

	function MSI11(data, options) {
		_classCallCheck(this, MSI11);

		return _possibleConstructorReturn(this, (MSI11.__proto__ || Object.getPrototypeOf(MSI11)).call(this, data + (0, _checksums.mod11)(data), options));
	}

	return MSI11;
}(_MSI3.default);

exports.default = MSI11;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(5);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1010 = function (_MSI) {
	_inherits(MSI1010, _MSI);

	function MSI1010(data, options) {
		_classCallCheck(this, MSI1010);

		data += (0, _checksums.mod10)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1010.__proto__ || Object.getPrototypeOf(MSI1010)).call(this, data, options));
	}

	return MSI1010;
}(_MSI3.default);

exports.default = MSI1010;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(5);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1110 = function (_MSI) {
	_inherits(MSI1110, _MSI);

	function MSI1110(data, options) {
		_classCallCheck(this, MSI1110);

		data += (0, _checksums.mod11)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1110.__proto__ || Object.getPrototypeOf(MSI1110)).call(this, data, options));
	}

	return MSI1110;
}(_MSI3.default);

exports.default = MSI1110;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.pharmacode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf

var pharmacode = function (_Barcode) {
	_inherits(pharmacode, _Barcode);

	function pharmacode(data, options) {
		_classCallCheck(this, pharmacode);

		var _this = _possibleConstructorReturn(this, (pharmacode.__proto__ || Object.getPrototypeOf(pharmacode)).call(this, data, options));

		_this.number = parseInt(data, 10);
		return _this;
	}

	_createClass(pharmacode, [{
		key: "encode",
		value: function encode() {
			var z = this.number;
			var result = "";

			// http://i.imgur.com/RMm4UDJ.png
			// (source: http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf, page: 34)
			while (!isNaN(z) && z != 0) {
				if (z % 2 === 0) {
					// Even
					result = "11100" + result;
					z = (z - 2) / 2;
				} else {
					// Odd
					result = "100" + result;
					z = (z - 1) / 2;
				}
			}

			// Remove the two last zeroes
			result = result.slice(0, -2);

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.number >= 3 && this.number <= 131070;
		}
	}]);

	return pharmacode;
}(_Barcode3.default);

exports.pharmacode = pharmacode;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.codabar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding specification:
// http://www.barcodeisland.com/codabar.phtml

var codabar = function (_Barcode) {
	_inherits(codabar, _Barcode);

	function codabar(data, options) {
		_classCallCheck(this, codabar);

		if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
			data = "A" + data + "A";
		}

		var _this = _possibleConstructorReturn(this, (codabar.__proto__ || Object.getPrototypeOf(codabar)).call(this, data.toUpperCase(), options));

		_this.text = _this.options.text || _this.text.replace(/[A-D]/g, '');
		return _this;
	}

	_createClass(codabar, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
		}
	}, {
		key: "encode",
		value: function encode() {
			var result = [];
			var encodings = this.getEncodings();
			for (var i = 0; i < this.data.length; i++) {
				result.push(encodings[this.data.charAt(i)]);
				// for all characters except the last, append a narrow-space ("0")
				if (i !== this.data.length - 1) {
					result.push("0");
				}
			}
			return {
				text: this.text,
				data: result.join('')
			};
		}
	}, {
		key: "getEncodings",
		value: function getEncodings() {
			return {
				"0": "101010011",
				"1": "101011001",
				"2": "101001011",
				"3": "110010101",
				"4": "101101001",
				"5": "110101001",
				"6": "100101011",
				"7": "100101101",
				"8": "100110101",
				"9": "110100101",
				"-": "101001101",
				"$": "101100101",
				":": "1101011011",
				"/": "1101101011",
				".": "1101101101",
				"+": "101100110011",
				"A": "1011001001",
				"B": "1001001011",
				"C": "1010010011",
				"D": "1010011001"
			};
		}
	}]);

	return codabar;
}(_Barcode3.default);

exports.codabar = codabar;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GenericBarcode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericBarcode = function (_Barcode) {
	_inherits(GenericBarcode, _Barcode);

	function GenericBarcode(data, options) {
		_classCallCheck(this, GenericBarcode);

		return _possibleConstructorReturn(this, (GenericBarcode.__proto__ || Object.getPrototypeOf(GenericBarcode)).call(this, data, options)); // Sets this.data and this.text
	}

	// Return the corresponding binary numbers for the data provided


	_createClass(GenericBarcode, [{
		key: "encode",
		value: function encode() {
			return {
				data: "10101010101010101010101010101010101010101",
				text: this.text
			};
		}

		// Resturn true/false if the string provided is valid for this encoder

	}, {
		key: "valid",
		value: function valid() {
			return true;
		}
	}]);

	return GenericBarcode;
}(_Barcode3.default);

exports.GenericBarcode = GenericBarcode;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = linearizeEncodings;

// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
// Convert to [1-1, 1-2, 2, 3-1, 3-2]

function linearizeEncodings(encodings) {
	var linearEncodings = [];
	function nextLevel(encoded) {
		if (Array.isArray(encoded)) {
			for (var i = 0; i < encoded.length; i++) {
				nextLevel(encoded[i]);
			}
		} else {
			encoded.text = encoded.text || "";
			encoded.data = encoded.data || "";
			linearEncodings.push(encoded);
		}
	}
	nextLevel(encodings);

	return linearEncodings;
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = fixOptions;


function fixOptions(options) {
	// Fix the margins
	options.marginTop = options.marginTop || options.margin;
	options.marginBottom = options.marginBottom || options.margin;
	options.marginRight = options.marginRight || options.margin;
	options.marginLeft = options.marginLeft || options.margin;

	return options;
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* global HTMLImageElement */
/* global HTMLCanvasElement */
/* global SVGElement */

var _getOptionsFromElement = __webpack_require__(51);

var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);

var _renderers = __webpack_require__(52);

var _renderers2 = _interopRequireDefault(_renderers);

var _exceptions = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Takes an element and returns an object with information about how
// it should be rendered
// This could also return an array with these objects
// {
//   element: The element that the renderer should draw on
//   renderer: The name of the renderer
//   afterRender (optional): If something has to done after the renderer
//     completed, calls afterRender (function)
//   options (optional): Options that can be defined in the element
// }

function getRenderProperties(element) {
	// If the element is a string, query select call again
	if (typeof element === "string") {
		return querySelectedRenderProperties(element);
	}
	// If element is array. Recursivly call with every object in the array
	else if (Array.isArray(element)) {
			var returnArray = [];
			for (var i = 0; i < element.length; i++) {
				returnArray.push(getRenderProperties(element[i]));
			}
			return returnArray;
		}
		// If element, render on canvas and set the uri as src
		else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLImageElement) {
				return newCanvasRenderProperties(element);
			}
			// If SVG
			else if (element && element.nodeName === 'svg' || typeof SVGElement !== 'undefined' && element instanceof SVGElement) {
					return {
						element: element,
						options: (0, _getOptionsFromElement2.default)(element),
						renderer: _renderers2.default.SVGRenderer
					};
				}
				// If canvas (in browser)
				else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLCanvasElement) {
						return {
							element: element,
							options: (0, _getOptionsFromElement2.default)(element),
							renderer: _renderers2.default.CanvasRenderer
						};
					}
					// If canvas (in node)
					else if (element && element.getContext) {
							return {
								element: element,
								renderer: _renderers2.default.CanvasRenderer
							};
						} else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === 'object' && !element.nodeName) {
							return {
								element: element,
								renderer: _renderers2.default.ObjectRenderer
							};
						} else {
							throw new _exceptions.InvalidElementException();
						}
}

function querySelectedRenderProperties(string) {
	var selector = document.querySelectorAll(string);
	if (selector.length === 0) {
		return undefined;
	} else {
		var returnArray = [];
		for (var i = 0; i < selector.length; i++) {
			returnArray.push(getRenderProperties(selector[i]));
		}
		return returnArray;
	}
}

function newCanvasRenderProperties(imgElement) {
	var canvas = document.createElement('canvas');
	return {
		element: canvas,
		options: (0, _getOptionsFromElement2.default)(imgElement),
		renderer: _renderers2.default.CanvasRenderer,
		afterRender: function afterRender() {
			imgElement.setAttribute("src", canvas.toDataURL());
		}
	};
}

exports.default = getRenderProperties;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _optionsFromStrings = __webpack_require__(12);

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _defaults = __webpack_require__(13);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOptionsFromElement(element) {
	var options = {};
	for (var property in _defaults2.default) {
		if (_defaults2.default.hasOwnProperty(property)) {
			// jsbarcode-*
			if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
				options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
			}

			// data-*
			if (element.hasAttribute("data-" + property.toLowerCase())) {
				options[property] = element.getAttribute("data-" + property.toLowerCase());
			}
		}
	}

	options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value");

	// Since all atributes are string they need to be converted to integers
	options = (0, _optionsFromStrings2.default)(options);

	return options;
}

exports.default = getOptionsFromElement;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _canvas = __webpack_require__(53);

var _canvas2 = _interopRequireDefault(_canvas);

var _svg = __webpack_require__(54);

var _svg2 = _interopRequireDefault(_svg);

var _object = __webpack_require__(55);

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { CanvasRenderer: _canvas2.default, SVGRenderer: _svg2.default, ObjectRenderer: _object2.default };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(8);

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasRenderer = function () {
	function CanvasRenderer(canvas, encodings, options) {
		_classCallCheck(this, CanvasRenderer);

		this.canvas = canvas;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(CanvasRenderer, [{
		key: "render",
		value: function render() {
			// Abort if the browser does not support HTML5 canvas
			if (!this.canvas.getContext) {
				throw new Error('The browser does not support canvas.');
			}

			this.prepareCanvas();
			for (var i = 0; i < this.encodings.length; i++) {
				var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);

				this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
				this.drawCanvasText(encodingOptions, this.encodings[i]);

				this.moveCanvasDrawing(this.encodings[i]);
			}

			this.restoreCanvas();
		}
	}, {
		key: "prepareCanvas",
		value: function prepareCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.save();

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;

			this.canvas.height = maxHeight;

			// Paint the canvas
			ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			if (this.options.background) {
				ctx.fillStyle = this.options.background;
				ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			}

			ctx.translate(this.options.marginLeft, 0);
		}
	}, {
		key: "drawCanvasBarcode",
		value: function drawCanvasBarcode(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.marginTop + options.fontSize + options.textMargin;
			} else {
				yFrom = options.marginTop;
			}

			ctx.fillStyle = options.lineColor;

			for (var b = 0; b < binary.length; b++) {
				var x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					ctx.fillRect(x, yFrom, options.width, options.height);
				} else if (binary[b]) {
					ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
				}
			}
		}
	}, {
		key: "drawCanvasText",
		value: function drawCanvasText(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var font = options.fontOptions + " " + options.fontSize + "px " + options.font;

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				if (options.textPosition == "top") {
					y = options.marginTop + options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.marginTop + options.fontSize;
				}

				ctx.font = font;

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					ctx.textAlign = 'left';
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					ctx.textAlign = 'right';
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						ctx.textAlign = 'center';
					}

				ctx.fillText(encoding.text, x, y);
			}
		}
	}, {
		key: "moveCanvasDrawing",
		value: function moveCanvasDrawing(encoding) {
			var ctx = this.canvas.getContext("2d");

			ctx.translate(encoding.width, 0);
		}
	}, {
		key: "restoreCanvas",
		value: function restoreCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.restore();
		}
	}]);

	return CanvasRenderer;
}();

exports.default = CanvasRenderer;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(8);

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var svgns = "http://www.w3.org/2000/svg";

var SVGRenderer = function () {
	function SVGRenderer(svg, encodings, options) {
		_classCallCheck(this, SVGRenderer);

		this.svg = svg;
		this.encodings = encodings;
		this.options = options;
		this.document = options.xmlDocument || document;
	}

	_createClass(SVGRenderer, [{
		key: "render",
		value: function render() {
			var currentX = this.options.marginLeft;

			this.prepareSVG();
			for (var i = 0; i < this.encodings.length; i++) {
				var encoding = this.encodings[i];
				var encodingOptions = (0, _merge2.default)(this.options, encoding.options);

				var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);

				this.setGroupOptions(group, encodingOptions);

				this.drawSvgBarcode(group, encodingOptions, encoding);
				this.drawSVGText(group, encodingOptions, encoding);

				currentX += encoding.width;
			}
		}
	}, {
		key: "prepareSVG",
		value: function prepareSVG() {
			// Clear the SVG
			while (this.svg.firstChild) {
				this.svg.removeChild(this.svg.firstChild);
			}

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			var width = totalWidth + this.options.marginLeft + this.options.marginRight;
			this.setSvgAttributes(width, maxHeight);

			if (this.options.background) {
				this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
			}
		}
	}, {
		key: "drawSvgBarcode",
		value: function drawSvgBarcode(parent, options, encoding) {
			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.fontSize + options.textMargin;
			} else {
				yFrom = 0;
			}

			var barWidth = 0;
			var x = 0;
			for (var b = 0; b < binary.length; b++) {
				x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					barWidth++;
				} else if (barWidth > 0) {
					this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
					barWidth = 0;
				}
			}

			// Last draw is needed since the barcode ends with 1
			if (barWidth > 0) {
				this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
			}
		}
	}, {
		key: "drawSVGText",
		value: function drawSVGText(parent, options, encoding) {
			var textElem = this.document.createElementNS(svgns, 'text');

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);

				if (options.textPosition == "top") {
					y = options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.fontSize;
				}

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					textElem.setAttribute("text-anchor", "start");
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					textElem.setAttribute("text-anchor", "end");
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						textElem.setAttribute("text-anchor", "middle");
					}

				textElem.setAttribute("x", x);
				textElem.setAttribute("y", y);

				textElem.appendChild(this.document.createTextNode(encoding.text));

				parent.appendChild(textElem);
			}
		}
	}, {
		key: "setSvgAttributes",
		value: function setSvgAttributes(width, height) {
			var svg = this.svg;
			svg.setAttribute("width", width + "px");
			svg.setAttribute("height", height + "px");
			svg.setAttribute("x", "0px");
			svg.setAttribute("y", "0px");
			svg.setAttribute("viewBox", "0 0 " + width + " " + height);

			svg.setAttribute("xmlns", svgns);
			svg.setAttribute("version", "1.1");

			svg.setAttribute("style", "transform: translate(0,0)");
		}
	}, {
		key: "createGroup",
		value: function createGroup(x, y, parent) {
			var group = this.document.createElementNS(svgns, 'g');
			group.setAttribute("transform", "translate(" + x + ", " + y + ")");

			parent.appendChild(group);

			return group;
		}
	}, {
		key: "setGroupOptions",
		value: function setGroupOptions(group, options) {
			group.setAttribute("style", "fill:" + options.lineColor + ";");
		}
	}, {
		key: "drawRect",
		value: function drawRect(x, y, width, height, parent) {
			var rect = this.document.createElementNS(svgns, 'rect');

			rect.setAttribute("x", x);
			rect.setAttribute("y", y);
			rect.setAttribute("width", width);
			rect.setAttribute("height", height);

			parent.appendChild(rect);

			return rect;
		}
	}]);

	return SVGRenderer;
}();

exports.default = SVGRenderer;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectRenderer = function () {
	function ObjectRenderer(object, encodings, options) {
		_classCallCheck(this, ObjectRenderer);

		this.object = object;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(ObjectRenderer, [{
		key: "render",
		value: function render() {
			this.object.encodings = this.encodings;
		}
	}]);

	return ObjectRenderer;
}();

exports.default = ObjectRenderer;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint no-console: 0 */

var ErrorHandler = function () {
	function ErrorHandler(api) {
		_classCallCheck(this, ErrorHandler);

		this.api = api;
	}

	_createClass(ErrorHandler, [{
		key: "handleCatch",
		value: function handleCatch(e) {
			// If babel supported extending of Error in a correct way instanceof would be used here
			if (e.name === "InvalidInputException") {
				if (this.api._options.valid !== this.api._defaults.valid) {
					this.api._options.valid(false);
				} else {
					throw e.message;
				}
			} else {
				throw e;
			}

			this.api.render = function () {};
		}
	}, {
		key: "wrapBarcodeCall",
		value: function wrapBarcodeCall(func) {
			try {
				var result = func.apply(undefined, arguments);
				this.api._options.valid(true);
				return result;
			} catch (e) {
				this.handleCatch(e);

				return this.api;
			}
		}
	}]);

	return ErrorHandler;
}();

exports.default = ErrorHandler;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = __webpack_require__(58);

var getFormFields = function getFormFields(form) {
  var target = {};

  var elements = form.elements || [];
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i];
    if (!e.hasAttribute('name')) {
      continue;
    }

    var type = 'TEXT';
    switch (e.nodeName.toUpperCase()) {
      case 'SELECT':
        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type;
        break;
      case 'INPUT':
        type = e.getAttribute('type').toUpperCase();
        break;
    }

    var name = e.getAttribute('name');

    if (type === 'MULTIPLE') {
      for (var _i = 0; _i < e.length; _i++) {
        if (e[_i].selected) {
          addNestedValue(target, name, e[_i].value);
        }
      }
    } else if (type !== 'RADIO' && type !== 'CHECKBOX' || e.checked) {
      addNestedValue(target, name, e.value);
    }
  }

  return target;
};

module.exports = getFormFields;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = function addNestedValue(pojo, name, value) {
  var recurse = function recurse(pojo, keys, value) {
    var key = keys.shift();
    var next = keys[0];
    if (next === '') {
      // key is an array
      pojo[key] = pojo[key] || [];
      pojo[key].push(value);
    } else if (next) {
      // key is a parent key
      pojo[key] = pojo[key] || {};
      recurse(pojo[key], keys, value);
    } else {
      // key is the key for value
      pojo[key] = value;
    }

    return pojo;
  };

  var keys = name.split('[').map(function (k) {
    return k.replace(/]$/, '');
  });
  return recurse(pojo, keys, value);
};

module.exports = addNestedValue;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(60);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(67)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(61);
exports = module.exports = __webpack_require__(62)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url(" + escape(__webpack_require__(16)) + ");\n  src: url(" + escape(__webpack_require__(16)) + "?#iefix) format(\"embedded-opentype\"), url(" + escape(__webpack_require__(63)) + ") format(\"woff2\"), url(" + escape(__webpack_require__(64)) + ") format(\"woff\"), url(" + escape(__webpack_require__(65)) + ") format(\"truetype\"), url(" + escape(__webpack_require__(66)) + "#glyphicons_halflingsregular) format(\"svg\"); }\n\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.glyphicon-asterisk:before {\n  content: \"*\"; }\n\n.glyphicon-plus:before {\n  content: \"+\"; }\n\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20AC\"; }\n\n.glyphicon-minus:before {\n  content: \"\\2212\"; }\n\n.glyphicon-cloud:before {\n  content: \"\\2601\"; }\n\n.glyphicon-envelope:before {\n  content: \"\\2709\"; }\n\n.glyphicon-pencil:before {\n  content: \"\\270F\"; }\n\n.glyphicon-glass:before {\n  content: \"\\E001\"; }\n\n.glyphicon-music:before {\n  content: \"\\E002\"; }\n\n.glyphicon-search:before {\n  content: \"\\E003\"; }\n\n.glyphicon-heart:before {\n  content: \"\\E005\"; }\n\n.glyphicon-star:before {\n  content: \"\\E006\"; }\n\n.glyphicon-star-empty:before {\n  content: \"\\E007\"; }\n\n.glyphicon-user:before {\n  content: \"\\E008\"; }\n\n.glyphicon-film:before {\n  content: \"\\E009\"; }\n\n.glyphicon-th-large:before {\n  content: \"\\E010\"; }\n\n.glyphicon-th:before {\n  content: \"\\E011\"; }\n\n.glyphicon-th-list:before {\n  content: \"\\E012\"; }\n\n.glyphicon-ok:before {\n  content: \"\\E013\"; }\n\n.glyphicon-remove:before {\n  content: \"\\E014\"; }\n\n.glyphicon-zoom-in:before {\n  content: \"\\E015\"; }\n\n.glyphicon-zoom-out:before {\n  content: \"\\E016\"; }\n\n.glyphicon-off:before {\n  content: \"\\E017\"; }\n\n.glyphicon-signal:before {\n  content: \"\\E018\"; }\n\n.glyphicon-cog:before {\n  content: \"\\E019\"; }\n\n.glyphicon-trash:before {\n  content: \"\\E020\"; }\n\n.glyphicon-home:before {\n  content: \"\\E021\"; }\n\n.glyphicon-file:before {\n  content: \"\\E022\"; }\n\n.glyphicon-time:before {\n  content: \"\\E023\"; }\n\n.glyphicon-road:before {\n  content: \"\\E024\"; }\n\n.glyphicon-download-alt:before {\n  content: \"\\E025\"; }\n\n.glyphicon-download:before {\n  content: \"\\E026\"; }\n\n.glyphicon-upload:before {\n  content: \"\\E027\"; }\n\n.glyphicon-inbox:before {\n  content: \"\\E028\"; }\n\n.glyphicon-play-circle:before {\n  content: \"\\E029\"; }\n\n.glyphicon-repeat:before {\n  content: \"\\E030\"; }\n\n.glyphicon-refresh:before {\n  content: \"\\E031\"; }\n\n.glyphicon-list-alt:before {\n  content: \"\\E032\"; }\n\n.glyphicon-lock:before {\n  content: \"\\E033\"; }\n\n.glyphicon-flag:before {\n  content: \"\\E034\"; }\n\n.glyphicon-headphones:before {\n  content: \"\\E035\"; }\n\n.glyphicon-volume-off:before {\n  content: \"\\E036\"; }\n\n.glyphicon-volume-down:before {\n  content: \"\\E037\"; }\n\n.glyphicon-volume-up:before {\n  content: \"\\E038\"; }\n\n.glyphicon-qrcode:before {\n  content: \"\\E039\"; }\n\n.glyphicon-barcode:before {\n  content: \"\\E040\"; }\n\n.glyphicon-tag:before {\n  content: \"\\E041\"; }\n\n.glyphicon-tags:before {\n  content: \"\\E042\"; }\n\n.glyphicon-book:before {\n  content: \"\\E043\"; }\n\n.glyphicon-bookmark:before {\n  content: \"\\E044\"; }\n\n.glyphicon-print:before {\n  content: \"\\E045\"; }\n\n.glyphicon-camera:before {\n  content: \"\\E046\"; }\n\n.glyphicon-font:before {\n  content: \"\\E047\"; }\n\n.glyphicon-bold:before {\n  content: \"\\E048\"; }\n\n.glyphicon-italic:before {\n  content: \"\\E049\"; }\n\n.glyphicon-text-height:before {\n  content: \"\\E050\"; }\n\n.glyphicon-text-width:before {\n  content: \"\\E051\"; }\n\n.glyphicon-align-left:before {\n  content: \"\\E052\"; }\n\n.glyphicon-align-center:before {\n  content: \"\\E053\"; }\n\n.glyphicon-align-right:before {\n  content: \"\\E054\"; }\n\n.glyphicon-align-justify:before {\n  content: \"\\E055\"; }\n\n.glyphicon-list:before {\n  content: \"\\E056\"; }\n\n.glyphicon-indent-left:before {\n  content: \"\\E057\"; }\n\n.glyphicon-indent-right:before {\n  content: \"\\E058\"; }\n\n.glyphicon-facetime-video:before {\n  content: \"\\E059\"; }\n\n.glyphicon-picture:before {\n  content: \"\\E060\"; }\n\n.glyphicon-map-marker:before {\n  content: \"\\E062\"; }\n\n.glyphicon-adjust:before {\n  content: \"\\E063\"; }\n\n.glyphicon-tint:before {\n  content: \"\\E064\"; }\n\n.glyphicon-edit:before {\n  content: \"\\E065\"; }\n\n.glyphicon-share:before {\n  content: \"\\E066\"; }\n\n.glyphicon-check:before {\n  content: \"\\E067\"; }\n\n.glyphicon-move:before {\n  content: \"\\E068\"; }\n\n.glyphicon-step-backward:before {\n  content: \"\\E069\"; }\n\n.glyphicon-fast-backward:before {\n  content: \"\\E070\"; }\n\n.glyphicon-backward:before {\n  content: \"\\E071\"; }\n\n.glyphicon-play:before {\n  content: \"\\E072\"; }\n\n.glyphicon-pause:before {\n  content: \"\\E073\"; }\n\n.glyphicon-stop:before {\n  content: \"\\E074\"; }\n\n.glyphicon-forward:before {\n  content: \"\\E075\"; }\n\n.glyphicon-fast-forward:before {\n  content: \"\\E076\"; }\n\n.glyphicon-step-forward:before {\n  content: \"\\E077\"; }\n\n.glyphicon-eject:before {\n  content: \"\\E078\"; }\n\n.glyphicon-chevron-left:before {\n  content: \"\\E079\"; }\n\n.glyphicon-chevron-right:before {\n  content: \"\\E080\"; }\n\n.glyphicon-plus-sign:before {\n  content: \"\\E081\"; }\n\n.glyphicon-minus-sign:before {\n  content: \"\\E082\"; }\n\n.glyphicon-remove-sign:before {\n  content: \"\\E083\"; }\n\n.glyphicon-ok-sign:before {\n  content: \"\\E084\"; }\n\n.glyphicon-question-sign:before {\n  content: \"\\E085\"; }\n\n.glyphicon-info-sign:before {\n  content: \"\\E086\"; }\n\n.glyphicon-screenshot:before {\n  content: \"\\E087\"; }\n\n.glyphicon-remove-circle:before {\n  content: \"\\E088\"; }\n\n.glyphicon-ok-circle:before {\n  content: \"\\E089\"; }\n\n.glyphicon-ban-circle:before {\n  content: \"\\E090\"; }\n\n.glyphicon-arrow-left:before {\n  content: \"\\E091\"; }\n\n.glyphicon-arrow-right:before {\n  content: \"\\E092\"; }\n\n.glyphicon-arrow-up:before {\n  content: \"\\E093\"; }\n\n.glyphicon-arrow-down:before {\n  content: \"\\E094\"; }\n\n.glyphicon-share-alt:before {\n  content: \"\\E095\"; }\n\n.glyphicon-resize-full:before {\n  content: \"\\E096\"; }\n\n.glyphicon-resize-small:before {\n  content: \"\\E097\"; }\n\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\"; }\n\n.glyphicon-gift:before {\n  content: \"\\E102\"; }\n\n.glyphicon-leaf:before {\n  content: \"\\E103\"; }\n\n.glyphicon-fire:before {\n  content: \"\\E104\"; }\n\n.glyphicon-eye-open:before {\n  content: \"\\E105\"; }\n\n.glyphicon-eye-close:before {\n  content: \"\\E106\"; }\n\n.glyphicon-warning-sign:before {\n  content: \"\\E107\"; }\n\n.glyphicon-plane:before {\n  content: \"\\E108\"; }\n\n.glyphicon-calendar:before {\n  content: \"\\E109\"; }\n\n.glyphicon-random:before {\n  content: \"\\E110\"; }\n\n.glyphicon-comment:before {\n  content: \"\\E111\"; }\n\n.glyphicon-magnet:before {\n  content: \"\\E112\"; }\n\n.glyphicon-chevron-up:before {\n  content: \"\\E113\"; }\n\n.glyphicon-chevron-down:before {\n  content: \"\\E114\"; }\n\n.glyphicon-retweet:before {\n  content: \"\\E115\"; }\n\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\"; }\n\n.glyphicon-folder-close:before {\n  content: \"\\E117\"; }\n\n.glyphicon-folder-open:before {\n  content: \"\\E118\"; }\n\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\"; }\n\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\"; }\n\n.glyphicon-hdd:before {\n  content: \"\\E121\"; }\n\n.glyphicon-bullhorn:before {\n  content: \"\\E122\"; }\n\n.glyphicon-bell:before {\n  content: \"\\E123\"; }\n\n.glyphicon-certificate:before {\n  content: \"\\E124\"; }\n\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\"; }\n\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\"; }\n\n.glyphicon-hand-right:before {\n  content: \"\\E127\"; }\n\n.glyphicon-hand-left:before {\n  content: \"\\E128\"; }\n\n.glyphicon-hand-up:before {\n  content: \"\\E129\"; }\n\n.glyphicon-hand-down:before {\n  content: \"\\E130\"; }\n\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\"; }\n\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\"; }\n\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\"; }\n\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\"; }\n\n.glyphicon-globe:before {\n  content: \"\\E135\"; }\n\n.glyphicon-wrench:before {\n  content: \"\\E136\"; }\n\n.glyphicon-tasks:before {\n  content: \"\\E137\"; }\n\n.glyphicon-filter:before {\n  content: \"\\E138\"; }\n\n.glyphicon-briefcase:before {\n  content: \"\\E139\"; }\n\n.glyphicon-fullscreen:before {\n  content: \"\\E140\"; }\n\n.glyphicon-dashboard:before {\n  content: \"\\E141\"; }\n\n.glyphicon-paperclip:before {\n  content: \"\\E142\"; }\n\n.glyphicon-heart-empty:before {\n  content: \"\\E143\"; }\n\n.glyphicon-link:before {\n  content: \"\\E144\"; }\n\n.glyphicon-phone:before {\n  content: \"\\E145\"; }\n\n.glyphicon-pushpin:before {\n  content: \"\\E146\"; }\n\n.glyphicon-usd:before {\n  content: \"\\E148\"; }\n\n.glyphicon-gbp:before {\n  content: \"\\E149\"; }\n\n.glyphicon-sort:before {\n  content: \"\\E150\"; }\n\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\"; }\n\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\"; }\n\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\"; }\n\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\"; }\n\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\"; }\n\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\"; }\n\n.glyphicon-unchecked:before {\n  content: \"\\E157\"; }\n\n.glyphicon-expand:before {\n  content: \"\\E158\"; }\n\n.glyphicon-collapse-down:before {\n  content: \"\\E159\"; }\n\n.glyphicon-collapse-up:before {\n  content: \"\\E160\"; }\n\n.glyphicon-log-in:before {\n  content: \"\\E161\"; }\n\n.glyphicon-flash:before {\n  content: \"\\E162\"; }\n\n.glyphicon-log-out:before {\n  content: \"\\E163\"; }\n\n.glyphicon-new-window:before {\n  content: \"\\E164\"; }\n\n.glyphicon-record:before {\n  content: \"\\E165\"; }\n\n.glyphicon-save:before {\n  content: \"\\E166\"; }\n\n.glyphicon-open:before {\n  content: \"\\E167\"; }\n\n.glyphicon-saved:before {\n  content: \"\\E168\"; }\n\n.glyphicon-import:before {\n  content: \"\\E169\"; }\n\n.glyphicon-export:before {\n  content: \"\\E170\"; }\n\n.glyphicon-send:before {\n  content: \"\\E171\"; }\n\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\"; }\n\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\"; }\n\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\"; }\n\n.glyphicon-floppy-save:before {\n  content: \"\\E175\"; }\n\n.glyphicon-floppy-open:before {\n  content: \"\\E176\"; }\n\n.glyphicon-credit-card:before {\n  content: \"\\E177\"; }\n\n.glyphicon-transfer:before {\n  content: \"\\E178\"; }\n\n.glyphicon-cutlery:before {\n  content: \"\\E179\"; }\n\n.glyphicon-header:before {\n  content: \"\\E180\"; }\n\n.glyphicon-compressed:before {\n  content: \"\\E181\"; }\n\n.glyphicon-earphone:before {\n  content: \"\\E182\"; }\n\n.glyphicon-phone-alt:before {\n  content: \"\\E183\"; }\n\n.glyphicon-tower:before {\n  content: \"\\E184\"; }\n\n.glyphicon-stats:before {\n  content: \"\\E185\"; }\n\n.glyphicon-sd-video:before {\n  content: \"\\E186\"; }\n\n.glyphicon-hd-video:before {\n  content: \"\\E187\"; }\n\n.glyphicon-subtitles:before {\n  content: \"\\E188\"; }\n\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\"; }\n\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\"; }\n\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\"; }\n\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\"; }\n\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\"; }\n\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\"; }\n\n.glyphicon-registration-mark:before {\n  content: \"\\E195\"; }\n\n.glyphicon-cloud-download:before {\n  content: \"\\E197\"; }\n\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\"; }\n\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\"; }\n\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\"; }\n\n.glyphicon-cd:before {\n  content: \"\\E201\"; }\n\n.glyphicon-save-file:before {\n  content: \"\\E202\"; }\n\n.glyphicon-open-file:before {\n  content: \"\\E203\"; }\n\n.glyphicon-level-up:before {\n  content: \"\\E204\"; }\n\n.glyphicon-copy:before {\n  content: \"\\E205\"; }\n\n.glyphicon-paste:before {\n  content: \"\\E206\"; }\n\n.glyphicon-alert:before {\n  content: \"\\E209\"; }\n\n.glyphicon-equalizer:before {\n  content: \"\\E210\"; }\n\n.glyphicon-king:before {\n  content: \"\\E211\"; }\n\n.glyphicon-queen:before {\n  content: \"\\E212\"; }\n\n.glyphicon-pawn:before {\n  content: \"\\E213\"; }\n\n.glyphicon-bishop:before {\n  content: \"\\E214\"; }\n\n.glyphicon-knight:before {\n  content: \"\\E215\"; }\n\n.glyphicon-baby-formula:before {\n  content: \"\\E216\"; }\n\n.glyphicon-tent:before {\n  content: \"\\26FA\"; }\n\n.glyphicon-blackboard:before {\n  content: \"\\E218\"; }\n\n.glyphicon-bed:before {\n  content: \"\\E219\"; }\n\n.glyphicon-apple:before {\n  content: \"\\F8FF\"; }\n\n.glyphicon-erase:before {\n  content: \"\\E221\"; }\n\n.glyphicon-hourglass:before {\n  content: \"\\231B\"; }\n\n.glyphicon-lamp:before {\n  content: \"\\E223\"; }\n\n.glyphicon-duplicate:before {\n  content: \"\\E224\"; }\n\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\"; }\n\n.glyphicon-scissors:before {\n  content: \"\\E226\"; }\n\n.glyphicon-bitcoin:before {\n  content: \"\\E227\"; }\n\n.glyphicon-btc:before {\n  content: \"\\E227\"; }\n\n.glyphicon-xbt:before {\n  content: \"\\E227\"; }\n\n.glyphicon-yen:before {\n  content: \"\\A5\"; }\n\n.glyphicon-jpy:before {\n  content: \"\\A5\"; }\n\n.glyphicon-ruble:before {\n  content: \"\\20BD\"; }\n\n.glyphicon-rub:before {\n  content: \"\\20BD\"; }\n\n.glyphicon-scale:before {\n  content: \"\\E230\"; }\n\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\"; }\n\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\"; }\n\n.glyphicon-education:before {\n  content: \"\\E233\"; }\n\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\"; }\n\n.glyphicon-option-vertical:before {\n  content: \"\\E235\"; }\n\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\"; }\n\n.glyphicon-modal-window:before {\n  content: \"\\E237\"; }\n\n.glyphicon-oil:before {\n  content: \"\\E238\"; }\n\n.glyphicon-grain:before {\n  content: \"\\E239\"; }\n\n.glyphicon-sunglasses:before {\n  content: \"\\E240\"; }\n\n.glyphicon-text-size:before {\n  content: \"\\E241\"; }\n\n.glyphicon-text-color:before {\n  content: \"\\E242\"; }\n\n.glyphicon-text-background:before {\n  content: \"\\E243\"; }\n\n.glyphicon-object-align-top:before {\n  content: \"\\E244\"; }\n\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\"; }\n\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\"; }\n\n.glyphicon-object-align-left:before {\n  content: \"\\E247\"; }\n\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\"; }\n\n.glyphicon-object-align-right:before {\n  content: \"\\E249\"; }\n\n.glyphicon-triangle-right:before {\n  content: \"\\E250\"; }\n\n.glyphicon-triangle-left:before {\n  content: \"\\E251\"; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\"; }\n\n.glyphicon-triangle-top:before {\n  content: \"\\E253\"; }\n\n.glyphicon-console:before {\n  content: \"\\E254\"; }\n\n.glyphicon-superscript:before {\n  content: \"\\E255\"; }\n\n.glyphicon-subscript:before {\n  content: \"\\E256\"; }\n\n.glyphicon-menu-left:before {\n  content: \"\\E257\"; }\n\n.glyphicon-menu-right:before {\n  content: \"\\E258\"; }\n\n.glyphicon-menu-down:before {\n  content: \"\\E259\"; }\n\n.glyphicon-menu-up:before {\n  content: \"\\E260\"; }\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\na {\n  color: #337ab7;\n  text-decoration: none; }\n  a:hover, a:focus {\n    color: #23527c;\n    text-decoration: underline; }\n  a:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  vertical-align: middle; }\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.img-rounded {\n  border-radius: 6px; }\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.img-circle {\n  border-radius: 50%; }\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n  h1 small,\n  h1 .small, h2 small,\n  h2 .small, h3 small,\n  h3 .small, h4 small,\n  h4 .small, h5 small,\n  h5 .small, h6 small,\n  h6 .small,\n  .h1 small,\n  .h1 .small, .h2 small,\n  .h2 .small, .h3 small,\n  .h3 .small, .h4 small,\n  .h4 .small, .h5 small,\n  .h5 .small, .h6 small,\n  .h6 .small {\n    font-weight: normal;\n    line-height: 1;\n    color: #777777; }\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: 20px;\n  margin-bottom: 10px; }\n  h1 small,\n  h1 .small, .h1 small,\n  .h1 .small,\n  h2 small,\n  h2 .small, .h2 small,\n  .h2 .small,\n  h3 small,\n  h3 .small, .h3 small,\n  .h3 .small {\n    font-size: 65%; }\n\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  h4 small,\n  h4 .small, .h4 small,\n  .h4 .small,\n  h5 small,\n  h5 .small, .h5 small,\n  .h5 .small,\n  h6 small,\n  h6 .small, .h6 small,\n  .h6 .small {\n    font-size: 75%; }\n\nh1, .h1 {\n  font-size: 36px; }\n\nh2, .h2 {\n  font-size: 30px; }\n\nh3, .h3 {\n  font-size: 24px; }\n\nh4, .h4 {\n  font-size: 18px; }\n\nh5, .h5 {\n  font-size: 14px; }\n\nh6, .h6 {\n  font-size: 12px; }\n\np {\n  margin: 0 0 10px; }\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4; }\n  @media (min-width: 768px) {\n    .lead {\n      font-size: 21px; } }\n\nsmall,\n.small {\n  font-size: 85%; }\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase, .initialism {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.text-muted {\n  color: #777777; }\n\n.text-primary {\n  color: #337ab7; }\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090; }\n\n.text-success {\n  color: #3c763d; }\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c; }\n\n.text-info {\n  color: #31708f; }\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269; }\n\n.text-warning {\n  color: #8a6d3b; }\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c; }\n\n.text-danger {\n  color: #a94442; }\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534; }\n\n.bg-primary {\n  color: #fff; }\n\n.bg-primary {\n  background-color: #337ab7; }\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090; }\n\n.bg-success {\n  background-color: #dff0d8; }\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3; }\n\n.bg-info {\n  background-color: #d9edf7; }\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee; }\n\n.bg-warning {\n  background-color: #fcf8e3; }\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5; }\n\n.bg-danger {\n  background-color: #f2dede; }\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9; }\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee; }\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px; }\n  ul ul,\n  ul ol,\n  ol ul,\n  ol ol {\n    margin-bottom: 0; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px; }\n  .list-inline > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px; }\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px; }\n\ndt,\ndd {\n  line-height: 1.42857; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-left: 0; }\n\n.dl-horizontal dd:before, .dl-horizontal dd:after {\n  content: \" \";\n  display: table; }\n\n.dl-horizontal dd:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .dl-horizontal dd {\n    margin-left: 180px; } }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777; }\n\n.initialism {\n  font-size: 90%; }\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee; }\n  blockquote p:last-child,\n  blockquote ul:last-child,\n  blockquote ol:last-child {\n    margin-bottom: 0; }\n  blockquote footer,\n  blockquote small,\n  blockquote .small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857;\n    color: #777777; }\n    blockquote footer:before,\n    blockquote small:before,\n    blockquote .small:before {\n      content: '\\2014   \\A0'; }\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right; }\n  .blockquote-reverse footer:before,\n  .blockquote-reverse small:before,\n  .blockquote-reverse .small:before,\n  blockquote.pull-right footer:before,\n  blockquote.pull-right small:before,\n  blockquote.pull-right .small:before {\n    content: ''; }\n  .blockquote-reverse footer:after,\n  .blockquote-reverse small:after,\n  .blockquote-reverse .small:after,\n  blockquote.pull-right footer:after,\n  blockquote.pull-right small:after,\n  blockquote.pull-right .small:after {\n    content: '\\A0   \\2014'; }\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px; }\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25); }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none; }\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container:before, .container:after {\n    content: \" \";\n    display: table; }\n  .container:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .container {\n      width: 750px; } }\n  @media (min-width: 992px) {\n    .container {\n      width: 970px; } }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1170px; } }\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container-fluid:before, .container-fluid:after {\n    content: \" \";\n    display: table; }\n  .container-fluid:after {\n    clear: both; }\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left; }\n\nth {\n  text-align: left; }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px; }\n  .table > thead > tr > th,\n  .table > thead > tr > td,\n  .table > tbody > tr > th,\n  .table > tbody > tr > td,\n  .table > tfoot > tr > th,\n  .table > tfoot > tr > td {\n    padding: 8px;\n    line-height: 1.42857;\n    vertical-align: top;\n    border-top: 1px solid #ddd; }\n  .table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ddd; }\n  .table > caption + thead > tr:first-child > th,\n  .table > caption + thead > tr:first-child > td,\n  .table > colgroup + thead > tr:first-child > th,\n  .table > colgroup + thead > tr:first-child > td,\n  .table > thead:first-child > tr:first-child > th,\n  .table > thead:first-child > tr:first-child > td {\n    border-top: 0; }\n  .table > tbody + tbody {\n    border-top: 2px solid #ddd; }\n  .table .table {\n    background-color: #fff; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px; }\n\n.table-bordered {\n  border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > th,\n  .table-bordered > tbody > tr > td,\n  .table-bordered > tfoot > tr > th,\n  .table-bordered > tfoot > tr > td {\n    border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td {\n    border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5; }\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column; }\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell; }\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5; }\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8; }\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8; }\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6; }\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7; }\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3; }\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3; }\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc; }\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede; }\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc; }\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; }\n  @media screen and (max-width: 767px) {\n    .table-responsive {\n      width: 100%;\n      margin-bottom: 15px;\n      overflow-y: hidden;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      border: 1px solid #ddd; }\n      .table-responsive > .table {\n        margin-bottom: 0; }\n        .table-responsive > .table > thead > tr > th,\n        .table-responsive > .table > thead > tr > td,\n        .table-responsive > .table > tbody > tr > th,\n        .table-responsive > .table > tbody > tr > td,\n        .table-responsive > .table > tfoot > tr > th,\n        .table-responsive > .table > tfoot > tr > td {\n          white-space: nowrap; }\n      .table-responsive > .table-bordered {\n        border: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:first-child,\n        .table-responsive > .table-bordered > thead > tr > td:first-child,\n        .table-responsive > .table-bordered > tbody > tr > th:first-child,\n        .table-responsive > .table-bordered > tbody > tr > td:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n          border-left: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:last-child,\n        .table-responsive > .table-bordered > thead > tr > td:last-child,\n        .table-responsive > .table-bordered > tbody > tr > th:last-child,\n        .table-responsive > .table-bordered > tbody > tr > td:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n          border-right: 0; }\n        .table-responsive > .table-bordered > tbody > tr:last-child > th,\n        .table-responsive > .table-bordered > tbody > tr:last-child > td,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n          border-bottom: 0; } }\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold; }\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal; }\n\ninput[type=\"file\"] {\n  display: block; }\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%; }\n\nselect[multiple],\nselect[size] {\n  height: auto; }\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n  .form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n  .form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #999; }\n  .form-control::-webkit-input-placeholder {\n    color: #999; }\n  .form-control::-ms-expand {\n    border: 0;\n    background-color: transparent; }\n  .form-control[disabled], .form-control[readonly],\n  fieldset[disabled] .form-control {\n    background-color: #eeeeee;\n    opacity: 1; }\n  .form-control[disabled],\n  fieldset[disabled] .form-control {\n    cursor: not-allowed; }\n\ntextarea.form-control {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: none; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px; }\n  input[type=\"date\"].input-sm, .input-group-sm > input[type=\"date\"].form-control,\n  .input-group-sm > input[type=\"date\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"].form-control,\n  .input-group-sm > input[type=\"time\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"].form-control,\n  .input-group-sm > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"].form-control,\n  .input-group-sm > input[type=\"month\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px; }\n  input[type=\"date\"].input-lg, .input-group-lg > input[type=\"date\"].form-control,\n  .input-group-lg > input[type=\"date\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"].form-control,\n  .input-group-lg > input[type=\"time\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"].form-control,\n  .input-group-lg > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"].form-control,\n  .input-group-lg > input[type=\"month\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px; } }\n\n.form-group {\n  margin-bottom: 15px; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  .radio label,\n  .checkbox label {\n    min-height: 20px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; }\n\ninput[type=\"radio\"][disabled], input[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed; }\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed; }\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px; }\n  .form-control-static.input-lg, .input-group-lg > .form-control-static.form-control,\n  .input-group-lg > .form-control-static.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-static.btn, .form-control-static.input-sm, .input-group-sm > .form-control-static.form-control,\n  .input-group-sm > .form-control-static.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-static.btn {\n    padding-left: 0;\n    padding-right: 0; }\n\n.input-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\nselect.input-sm, .input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 30px;\n  line-height: 30px; }\n\ntextarea.input-sm, .input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px; }\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto; }\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.input-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\nselect.input-lg, .input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 46px;\n  line-height: 46px; }\n\ntextarea.input-lg, .input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px; }\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto; }\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.has-feedback {\n  position: relative; }\n  .has-feedback .form-control {\n    padding-right: 42.5px; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none; }\n\n.input-lg + .form-control-feedback, .input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px; }\n\n.input-sm + .form-control-feedback, .input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px; }\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d; }\n\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-success .form-control:focus {\n    border-color: #2b542c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168; }\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8; }\n\n.has-success .form-control-feedback {\n  color: #3c763d; }\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b; }\n\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-warning .form-control:focus {\n    border-color: #66512c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b; }\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3; }\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b; }\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442; }\n\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-error .form-control:focus {\n    border-color: #843534;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483; }\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede; }\n\n.has-error .form-control-feedback {\n  color: #a94442; }\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px; }\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0; }\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px; }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px; }\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .form-horizontal .form-group:before, .form-horizontal .form-group:after {\n    content: \" \";\n    display: table; }\n  .form-horizontal .form-group:after {\n    clear: both; }\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px; } }\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px; }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px; } }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px; } }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:hover, .btn:focus, .btn.focus {\n    color: #333;\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    outline: 0;\n    background-image: none;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn.disabled, .btn[disabled],\n  fieldset[disabled] .btn {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-default:focus, .btn-default.focus {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #8c8c8c; }\n  .btn-default:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n    .btn-default:active:hover, .btn-default:active:focus, .btn-default:active.focus, .btn-default.active:hover, .btn-default.active:focus, .btn-default.active.focus,\n    .open > .btn-default.dropdown-toggle:hover,\n    .open > .btn-default.dropdown-toggle:focus,\n    .open > .btn-default.dropdown-toggle.focus {\n      color: #333;\n      background-color: #d4d4d4;\n      border-color: #8c8c8c; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    background-image: none; }\n  .btn-default.disabled:hover, .btn-default.disabled:focus, .btn-default.disabled.focus, .btn-default[disabled]:hover, .btn-default[disabled]:focus, .btn-default[disabled].focus,\n  fieldset[disabled] .btn-default:hover,\n  fieldset[disabled] .btn-default:focus,\n  fieldset[disabled] .btn-default.focus {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-default .badge {\n    color: #fff;\n    background-color: #333; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #204d74;\n      border-color: #122b40; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    background-image: none; }\n  .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus {\n    background-color: #337ab7;\n    border-color: #2e6da4; }\n  .btn-primary .badge {\n    color: #337ab7;\n    background-color: #fff; }\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #398439;\n      border-color: #255625; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    background-image: none; }\n  .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus {\n    background-color: #5cb85c;\n    border-color: #4cae4c; }\n  .btn-success .badge {\n    color: #5cb85c;\n    background-color: #fff; }\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #1b6d85; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #269abc;\n      border-color: #1b6d85; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    background-image: none; }\n  .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus {\n    background-color: #5bc0de;\n    border-color: #46b8da; }\n  .btn-info .badge {\n    color: #5bc0de;\n    background-color: #fff; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #985f0d; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #985f0d; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    background-image: none; }\n  .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus {\n    background-color: #f0ad4e;\n    border-color: #eea236; }\n  .btn-warning .badge {\n    color: #f0ad4e;\n    background-color: #fff; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #761c19; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #ac2925;\n      border-color: #761c19; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    background-image: none; }\n  .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus {\n    background-color: #d9534f;\n    border-color: #d43f3a; }\n  .btn-danger .badge {\n    color: #d9534f;\n    background-color: #fff; }\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link[disabled],\n  fieldset[disabled] .btn-link {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  .btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover, .btn-link:focus {\n    color: #23527c;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link[disabled]:hover, .btn-link[disabled]:focus,\n  fieldset[disabled] .btn-link:hover,\n  fieldset[disabled] .btn-link:focus {\n    color: #777777;\n    text-decoration: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-xs, .btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\ntr.collapse.in {\n  display: table-row; }\n\ntbody.collapse.in {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease; }\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box; }\n  .dropdown-menu.pull-right {\n    right: 0;\n    left: auto; }\n  .dropdown-menu .divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857;\n    color: #333333;\n    white-space: nowrap; }\n\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5; }\n\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7; }\n\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  color: #777777; }\n\n.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0; }\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #777777;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\"; }\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto; }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto; } }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    float: left; }\n    .btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:hover,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.btn-toolbar {\n  margin-left: -5px; }\n  .btn-toolbar:before, .btn-toolbar:after {\n    content: \" \";\n    display: table; }\n  .btn-toolbar:after {\n    clear: both; }\n  .btn-toolbar .btn,\n  .btn-toolbar .btn-group,\n  .btn-toolbar .input-group {\n    float: left; }\n  .btn-toolbar > .btn,\n  .btn-toolbar > .btn-group,\n  .btn-toolbar > .input-group {\n    margin-left: 5px; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0; }\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-group.open .dropdown-toggle.btn-link {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.btn .caret {\n  margin-left: 0; }\n\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0; }\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px; }\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n\n.btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table; }\n\n.btn-group-vertical > .btn-group:after {\n  clear: both; }\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none; }\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate; }\n  .btn-group-justified > .btn,\n  .btn-group-justified > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%; }\n  .btn-group-justified > .btn-group .btn {\n    width: 100%; }\n  .btn-group-justified > .btn-group .dropdown-menu {\n    left: auto; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group[class*=\"col-\"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  .input-group-addon.input-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 5px 10px;\n    font-size: 12px;\n    border-radius: 3px; }\n  .input-group-addon.input-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 10px 16px;\n    font-size: 18px;\n    border-radius: 6px; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:hover, .input-group-btn > .btn:focus, .input-group-btn > .btn:active {\n      z-index: 2; }\n  .input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none; }\n  .nav:before, .nav:after {\n    content: \" \";\n    display: table; }\n  .nav:after {\n    clear: both; }\n  .nav > li {\n    position: relative;\n    display: block; }\n    .nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n      .nav > li > a:hover, .nav > li > a:focus {\n        text-decoration: none;\n        background-color: #eeeeee; }\n    .nav > li.disabled > a {\n      color: #777777; }\n      .nav > li.disabled > a:hover, .nav > li.disabled > a:focus {\n        color: #777777;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: not-allowed; }\n  .nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n    background-color: #eeeeee;\n    border-color: #337ab7; }\n  .nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .nav > li > a > img {\n    max-width: none; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs > li {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0; }\n      .nav-tabs > li > a:hover {\n        border-color: #eeeeee #eeeeee #ddd; }\n    .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n      color: #555555;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n      cursor: default; }\n\n.nav-pills > li {\n  float: left; }\n  .nav-pills > li > a {\n    border-radius: 4px; }\n  .nav-pills > li + li {\n    margin-left: 2px; }\n  .nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #337ab7; }\n\n.nav-stacked > li {\n  float: none; }\n  .nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0; }\n\n.nav-justified, .nav-tabs.nav-justified {\n  width: 100%; }\n  .nav-justified > li, .nav-tabs.nav-justified > li {\n    float: none; }\n    .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px; }\n  .nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto; }\n  @media (min-width: 768px) {\n    .nav-justified > li, .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%; }\n      .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0; } }\n\n.nav-tabs-justified, .nav-tabs.nav-justified {\n  border-bottom: 0; }\n  .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px; }\n  .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ddd; }\n  @media (min-width: 768px) {\n    .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ddd;\n      border-radius: 4px 4px 0 0; }\n    .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n    .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n    .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff; } }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent; }\n  .navbar:before, .navbar:after {\n    content: \" \";\n    display: table; }\n  .navbar:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .navbar {\n      border-radius: 4px; } }\n\n.navbar-header:before, .navbar-header:after {\n  content: \" \";\n  display: table; }\n\n.navbar-header:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left; } }\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch; }\n  .navbar-collapse:before, .navbar-collapse:after {\n    content: \" \";\n    display: table; }\n  .navbar-collapse:after {\n    clear: both; }\n  .navbar-collapse.in {\n    overflow-y: auto; }\n  @media (min-width: 768px) {\n    .navbar-collapse {\n      width: auto;\n      border-top: 0;\n      box-shadow: none; }\n      .navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important; }\n      .navbar-collapse.in {\n        overflow-y: visible; }\n      .navbar-fixed-top .navbar-collapse,\n      .navbar-static-top .navbar-collapse,\n      .navbar-fixed-bottom .navbar-collapse {\n        padding-left: 0;\n        padding-right: 0; } }\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px; }\n  @media (max-device-width: 480px) and (orientation: landscape) {\n    .navbar-fixed-top .navbar-collapse,\n    .navbar-fixed-bottom .navbar-collapse {\n      max-height: 200px; } }\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px; }\n  @media (min-width: 768px) {\n    .container > .navbar-header,\n    .container > .navbar-collapse,\n    .container-fluid > .navbar-header,\n    .container-fluid > .navbar-collapse {\n      margin-right: 0;\n      margin-left: 0; } }\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px; }\n  @media (min-width: 768px) {\n    .navbar-static-top {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 768px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px; }\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0; }\n\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px; }\n  .navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n  @media (min-width: 768px) {\n    .navbar > .container .navbar-brand,\n    .navbar > .container-fluid .navbar-brand {\n      margin-left: -15px; } }\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .navbar-toggle:focus {\n    outline: 0; }\n  .navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px; }\n  .navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px; }\n  @media (min-width: 768px) {\n    .navbar-toggle {\n      display: none; } }\n\n.navbar-nav {\n  margin: 7.5px -15px; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 20px; }\n  @media (max-width: 767px) {\n    .navbar-nav .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none; }\n      .navbar-nav .open .dropdown-menu > li > a,\n      .navbar-nav .open .dropdown-menu .dropdown-header {\n        padding: 5px 15px 5px 25px; }\n      .navbar-nav .open .dropdown-menu > li > a {\n        line-height: 20px; }\n        .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus {\n          background-image: none; } }\n  @media (min-width: 768px) {\n    .navbar-nav {\n      float: left;\n      margin: 0; }\n      .navbar-nav > li {\n        float: left; }\n        .navbar-nav > li > a {\n          padding-top: 15px;\n          padding-bottom: 15px; } }\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  @media (min-width: 768px) {\n    .navbar-form .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .navbar-form .form-control-static {\n      display: inline-block; }\n    .navbar-form .input-group {\n      display: inline-table;\n      vertical-align: middle; }\n      .navbar-form .input-group .input-group-addon,\n      .navbar-form .input-group .input-group-btn,\n      .navbar-form .input-group .form-control {\n        width: auto; }\n    .navbar-form .input-group > .form-control {\n      width: 100%; }\n    .navbar-form .control-label {\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .radio,\n    .navbar-form .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle; }\n      .navbar-form .radio label,\n      .navbar-form .checkbox label {\n        padding-left: 0; }\n    .navbar-form .radio input[type=\"radio\"],\n    .navbar-form .checkbox input[type=\"checkbox\"] {\n      position: relative;\n      margin-left: 0; }\n    .navbar-form .has-feedback .form-control-feedback {\n      top: 0; } }\n  @media (max-width: 767px) {\n    .navbar-form .form-group {\n      margin-bottom: 5px; }\n      .navbar-form .form-group:last-child {\n        margin-bottom: 0; } }\n  @media (min-width: 768px) {\n    .navbar-form {\n      width: auto;\n      border: 0;\n      margin-left: 0;\n      margin-right: 0;\n      padding-top: 0;\n      padding-bottom: 0;\n      -webkit-box-shadow: none;\n      box-shadow: none; } }\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  .navbar-btn.btn-sm, .btn-group-sm > .navbar-btn.btn {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .navbar-btn.btn-xs, .btn-group-xs > .navbar-btn.btn {\n    margin-top: 14px;\n    margin-bottom: 14px; }\n\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n  @media (min-width: 768px) {\n    .navbar-text {\n      float: left;\n      margin-left: 15px;\n      margin-right: 15px; } }\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important; }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px; }\n    .navbar-right ~ .navbar-right {\n      margin-right: 0; } }\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7; }\n  .navbar-default .navbar-brand {\n    color: #777; }\n    .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n      color: #5e5e5e;\n      background-color: transparent; }\n  .navbar-default .navbar-text {\n    color: #777; }\n  .navbar-default .navbar-nav > li > a {\n    color: #777; }\n    .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n      color: #333;\n      background-color: transparent; }\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent; }\n  .navbar-default .navbar-toggle {\n    border-color: #ddd; }\n    .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: #ddd; }\n    .navbar-default .navbar-toggle .icon-bar {\n      background-color: #888; }\n  .navbar-default .navbar-collapse,\n  .navbar-default .navbar-form {\n    border-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    background-color: #e7e7e7;\n    color: #555; }\n  @media (max-width: 767px) {\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n      color: #777; }\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #333;\n        background-color: transparent; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #555;\n      background-color: #e7e7e7; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #ccc;\n      background-color: transparent; } }\n  .navbar-default .navbar-link {\n    color: #777; }\n    .navbar-default .navbar-link:hover {\n      color: #333; }\n  .navbar-default .btn-link {\n    color: #777; }\n    .navbar-default .btn-link:hover, .navbar-default .btn-link:focus {\n      color: #333; }\n    .navbar-default .btn-link[disabled]:hover, .navbar-default .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-default .btn-link:hover,\n    fieldset[disabled] .navbar-default .btn-link:focus {\n      color: #ccc; }\n\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909; }\n  .navbar-inverse .navbar-brand {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-text {\n    color: #9d9d9d; }\n  .navbar-inverse .navbar-nav > li > a {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #090909; }\n  .navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus {\n    color: #444;\n    background-color: transparent; }\n  .navbar-inverse .navbar-toggle {\n    border-color: #333; }\n    .navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus {\n      background-color: #333; }\n    .navbar-inverse .navbar-toggle .icon-bar {\n      background-color: #fff; }\n  .navbar-inverse .navbar-collapse,\n  .navbar-inverse .navbar-form {\n    border-color: #101010; }\n  .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {\n    background-color: #090909;\n    color: #fff; }\n  @media (max-width: 767px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n      border-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n      color: #9d9d9d; }\n      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #fff;\n        background-color: transparent; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #444;\n      background-color: transparent; } }\n  .navbar-inverse .navbar-link {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-link:hover {\n      color: #fff; }\n  .navbar-inverse .btn-link {\n    color: #9d9d9d; }\n    .navbar-inverse .btn-link:hover, .navbar-inverse .btn-link:focus {\n      color: #fff; }\n    .navbar-inverse .btn-link[disabled]:hover, .navbar-inverse .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-inverse .btn-link:hover,\n    fieldset[disabled] .navbar-inverse .btn-link:focus {\n      color: #444; }\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px; }\n  .breadcrumb > li {\n    display: inline-block; }\n    .breadcrumb > li + li:before {\n      content: \"/\\A0\";\n      padding: 0 5px;\n      color: #ccc; }\n  .breadcrumb > .active {\n    color: #777777; }\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px; }\n  .pagination > li {\n    display: inline; }\n    .pagination > li > a,\n    .pagination > li > span {\n      position: relative;\n      float: left;\n      padding: 6px 12px;\n      line-height: 1.42857;\n      text-decoration: none;\n      color: #337ab7;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      margin-left: -1px; }\n    .pagination > li:first-child > a,\n    .pagination > li:first-child > span {\n      margin-left: 0;\n      border-bottom-left-radius: 4px;\n      border-top-left-radius: 4px; }\n    .pagination > li:last-child > a,\n    .pagination > li:last-child > span {\n      border-bottom-right-radius: 4px;\n      border-top-right-radius: 4px; }\n  .pagination > li > a:hover, .pagination > li > a:focus,\n  .pagination > li > span:hover,\n  .pagination > li > span:focus {\n    z-index: 2;\n    color: #23527c;\n    background-color: #eeeeee;\n    border-color: #ddd; }\n  .pagination > .active > a, .pagination > .active > a:hover, .pagination > .active > a:focus,\n  .pagination > .active > span,\n  .pagination > .active > span:hover,\n  .pagination > .active > span:focus {\n    z-index: 3;\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7;\n    cursor: default; }\n  .pagination > .disabled > span,\n  .pagination > .disabled > span:hover,\n  .pagination > .disabled > span:focus,\n  .pagination > .disabled > a,\n  .pagination > .disabled > a:hover,\n  .pagination > .disabled > a:focus {\n    color: #777777;\n    background-color: #fff;\n    border-color: #ddd;\n    cursor: not-allowed; }\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px; }\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center; }\n  .pager:before, .pager:after {\n    content: \" \";\n    display: table; }\n  .pager:after {\n    clear: both; }\n  .pager li {\n    display: inline; }\n    .pager li > a,\n    .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 15px; }\n    .pager li > a:hover,\n    .pager li > a:focus {\n      text-decoration: none;\n      background-color: #eeeeee; }\n  .pager .next > a,\n  .pager .next > span {\n    float: right; }\n  .pager .previous > a,\n  .pager .previous > span {\n    float: left; }\n  .pager .disabled > a,\n  .pager .disabled > a:hover,\n  .pager .disabled > a:focus,\n  .pager .disabled > span {\n    color: #777777;\n    background-color: #fff;\n    cursor: not-allowed; }\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em; }\n  .label:empty {\n    display: none; }\n  .btn .label {\n    position: relative;\n    top: -1px; }\n\na.label:hover, a.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-default {\n  background-color: #777777; }\n  .label-default[href]:hover, .label-default[href]:focus {\n    background-color: #5e5e5e; }\n\n.label-primary {\n  background-color: #337ab7; }\n  .label-primary[href]:hover, .label-primary[href]:focus {\n    background-color: #286090; }\n\n.label-success {\n  background-color: #5cb85c; }\n  .label-success[href]:hover, .label-success[href]:focus {\n    background-color: #449d44; }\n\n.label-info {\n  background-color: #5bc0de; }\n  .label-info[href]:hover, .label-info[href]:focus {\n    background-color: #31b0d5; }\n\n.label-warning {\n  background-color: #f0ad4e; }\n  .label-warning[href]:hover, .label-warning[href]:focus {\n    background-color: #ec971f; }\n\n.label-danger {\n  background-color: #d9534f; }\n  .label-danger[href]:hover, .label-danger[href]:focus {\n    background-color: #c9302c; }\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px; }\n  .badge:empty {\n    display: none; }\n  .btn .badge {\n    position: relative;\n    top: -1px; }\n  .btn-xs .badge, .btn-group-xs > .btn .badge,\n  .btn-group-xs > .btn .badge {\n    top: 0;\n    padding: 1px 5px; }\n  .list-group-item.active > .badge,\n  .nav-pills > .active > a > .badge {\n    color: #337ab7;\n    background-color: #fff; }\n  .list-group-item > .badge {\n    float: right; }\n  .list-group-item > .badge + .badge {\n    margin-right: 5px; }\n  .nav-pills > li > a > .badge {\n    margin-left: 3px; }\n\na.badge:hover, a.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee; }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    color: inherit; }\n  .jumbotron p {\n    margin-bottom: 15px;\n    font-size: 21px;\n    font-weight: 200; }\n  .jumbotron > hr {\n    border-top-color: #d5d5d5; }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    border-radius: 6px;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .jumbotron .container {\n    max-width: 100%; }\n  @media screen and (min-width: 768px) {\n    .jumbotron {\n      padding-top: 48px;\n      padding-bottom: 48px; }\n      .container .jumbotron,\n      .container-fluid .jumbotron {\n        padding-left: 60px;\n        padding-right: 60px; }\n      .jumbotron h1,\n      .jumbotron .h1 {\n        font-size: 63px; } }\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out; }\n  .thumbnail > img,\n  .thumbnail a > img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto; }\n  .thumbnail .caption {\n    padding: 9px;\n    color: #333333; }\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7; }\n\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .alert h4 {\n    margin-top: 0;\n    color: inherit; }\n  .alert .alert-link {\n    font-weight: bold; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissable .close,\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d; }\n  .alert-success hr {\n    border-top-color: #c9e2b3; }\n  .alert-success .alert-link {\n    color: #2b542c; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f; }\n  .alert-info hr {\n    border-top-color: #a6e1ec; }\n  .alert-info .alert-link {\n    color: #245269; }\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b; }\n  .alert-warning hr {\n    border-top-color: #f7e1b5; }\n  .alert-warning .alert-link {\n    color: #66512c; }\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442; }\n  .alert-danger hr {\n    border-top-color: #e4b9c0; }\n  .alert-danger .alert-link {\n    color: #843534; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease; }\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px; }\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite; }\n\n.progress-bar-success {\n  background-color: #5cb85c; }\n  .progress-striped .progress-bar-success {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-info {\n  background-color: #5bc0de; }\n  .progress-striped .progress-bar-info {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-warning {\n  background-color: #f0ad4e; }\n  .progress-striped .progress-bar-warning {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-danger {\n  background-color: #d9534f; }\n  .progress-striped .progress-bar-danger {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.media {\n  margin-top: 15px; }\n  .media:first-child {\n    margin-top: 0; }\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden; }\n\n.media-body {\n  width: 10000px; }\n\n.media-object {\n  display: block; }\n  .media-object.img-thumbnail {\n    max-width: none; }\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px; }\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .list-group-item:first-child {\n    border-top-right-radius: 4px;\n    border-top-left-radius: 4px; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px; }\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:hover, a.list-group-item:focus,\n  button.list-group-item:hover,\n  button.list-group-item:focus {\n    text-decoration: none;\n    color: #555;\n    background-color: #f5f5f5; }\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left; }\n\n.list-group-item.disabled, .list-group-item.disabled:hover, .list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text {\n    color: #777777; }\n\n.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:hover .list-group-item-text, .list-group-item.active:focus .list-group-item-text {\n    color: #c7ddef; }\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:hover, a.list-group-item-success:focus,\n  button.list-group-item-success:hover,\n  button.list-group-item-success:focus {\n    color: #3c763d;\n    background-color: #d0e9c6; }\n  a.list-group-item-success.active, a.list-group-item-success.active:hover, a.list-group-item-success.active:focus,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:hover,\n  button.list-group-item-success.active:focus {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d; }\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:hover, a.list-group-item-info:focus,\n  button.list-group-item-info:hover,\n  button.list-group-item-info:focus {\n    color: #31708f;\n    background-color: #c4e3f3; }\n  a.list-group-item-info.active, a.list-group-item-info.active:hover, a.list-group-item-info.active:focus,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:hover,\n  button.list-group-item-info.active:focus {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f; }\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:hover, a.list-group-item-warning:focus,\n  button.list-group-item-warning:hover,\n  button.list-group-item-warning:focus {\n    color: #8a6d3b;\n    background-color: #faf2cc; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active:focus {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b; }\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:hover, a.list-group-item-danger:focus,\n  button.list-group-item-danger:hover,\n  button.list-group-item-danger:focus {\n    color: #a94442;\n    background-color: #ebcccc; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active:focus {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n\n.panel-body {\n  padding: 15px; }\n  .panel-body:before, .panel-body:after {\n    content: \" \";\n    display: table; }\n  .panel-body:after {\n    clear: both; }\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel-heading > .dropdown .dropdown-toggle {\n    color: inherit; }\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit; }\n  .panel-title > a,\n  .panel-title > small,\n  .panel-title > .small,\n  .panel-title > small > a,\n  .panel-title > .small > a {\n    color: inherit; }\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0; }\n  .panel > .list-group .list-group-item,\n  .panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0; }\n  .panel > .list-group:first-child .list-group-item:first-child,\n  .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px; }\n  .panel > .list-group:last-child .list-group-item:last-child,\n  .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px; }\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0; }\n\n.list-group + .panel-footer {\n  border-top-width: 0; }\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0; }\n  .panel > .table caption,\n  .panel > .table-responsive > .table caption,\n  .panel > .panel-collapse > .table caption {\n    padding-left: 15px;\n    padding-right: 15px; }\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table:first-child > tbody:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n      border-top-left-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n      border-top-right-radius: 3px; }\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n  .panel > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table:last-child > tfoot:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n      border-bottom-left-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n      border-bottom-right-radius: 3px; }\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd; }\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0; }\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0; }\n  .panel > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-bordered > tfoot > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0; }\n  .panel > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-bordered > tfoot > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0; }\n  .panel > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-bordered > tbody > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n    border-bottom: 0; }\n  .panel > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-bordered > tfoot > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0; }\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0; }\n\n.panel-group {\n  margin-bottom: 20px; }\n  .panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 4px; }\n    .panel-group .panel + .panel {\n      margin-top: 5px; }\n  .panel-group .panel-heading {\n    border-bottom: 0; }\n    .panel-group .panel-heading + .panel-collapse > .panel-body,\n    .panel-group .panel-heading + .panel-collapse > .list-group {\n      border-top: 1px solid #ddd; }\n  .panel-group .panel-footer {\n    border-top: 0; }\n    .panel-group .panel-footer + .panel-collapse .panel-body {\n      border-bottom: 1px solid #ddd; }\n\n.panel-default {\n  border-color: #ddd; }\n  .panel-default > .panel-heading {\n    color: #333333;\n    background-color: #f5f5f5;\n    border-color: #ddd; }\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ddd; }\n    .panel-default > .panel-heading .badge {\n      color: #f5f5f5;\n      background-color: #333333; }\n  .panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ddd; }\n\n.panel-primary {\n  border-color: #337ab7; }\n  .panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7; }\n    .panel-primary > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #337ab7; }\n    .panel-primary > .panel-heading .badge {\n      color: #337ab7;\n      background-color: #fff; }\n  .panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #337ab7; }\n\n.panel-success {\n  border-color: #d6e9c6; }\n  .panel-success > .panel-heading {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #d6e9c6; }\n    .panel-success > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #d6e9c6; }\n    .panel-success > .panel-heading .badge {\n      color: #dff0d8;\n      background-color: #3c763d; }\n  .panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #d6e9c6; }\n\n.panel-info {\n  border-color: #bce8f1; }\n  .panel-info > .panel-heading {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1; }\n    .panel-info > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #bce8f1; }\n    .panel-info > .panel-heading .badge {\n      color: #d9edf7;\n      background-color: #31708f; }\n  .panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #bce8f1; }\n\n.panel-warning {\n  border-color: #faebcc; }\n  .panel-warning > .panel-heading {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc; }\n    .panel-warning > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #faebcc; }\n    .panel-warning > .panel-heading .badge {\n      color: #fcf8e3;\n      background-color: #8a6d3b; }\n  .panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #faebcc; }\n\n.panel-danger {\n  border-color: #ebccd1; }\n  .panel-danger > .panel-heading {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1; }\n    .panel-danger > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ebccd1; }\n    .panel-danger > .panel-heading .badge {\n      color: #f2dede;\n      background-color: #a94442; }\n  .panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ebccd1; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n  .well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, 0.15); }\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px; }\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px; }\n\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20); }\n  .close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n  .modal.fade .modal-dialog {\n    -webkit-transform: translate(0, -25%);\n    -ms-transform: translate(0, -25%);\n    -o-transform: translate(0, -25%);\n    transform: translate(0, -25%);\n    -webkit-transition: -webkit-transform 0.3s ease-out;\n    -moz-transition: -moz-transform 0.3s ease-out;\n    -o-transition: -o-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out; }\n  .modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0;\n    filter: alpha(opacity=0); }\n  .modal-backdrop.in {\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  .modal-header:before, .modal-header:after {\n    content: \" \";\n    display: table; }\n  .modal-header:after {\n    clear: both; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857; }\n\n.modal-body {\n  position: relative;\n  padding: 15px; }\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n  .modal-footer:before, .modal-footer:after {\n    content: \" \";\n    display: table; }\n  .modal-footer:after {\n    clear: both; }\n  .modal-footer .btn + .btn {\n    margin-left: 5px;\n    margin-bottom: 0; }\n  .modal-footer .btn-group .btn + .btn {\n    margin-left: -1px; }\n  .modal-footer .btn-block + .btn-block {\n    margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n  .tooltip.in {\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .tooltip.top {\n    margin-top: -3px;\n    padding: 5px 0; }\n  .tooltip.right {\n    margin-left: 3px;\n    padding: 0 5px; }\n  .tooltip.bottom {\n    margin-top: 3px;\n    padding: 5px 0; }\n  .tooltip.left {\n    margin-left: -3px;\n    padding: 0 5px; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px; }\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }\n  .popover.top {\n    margin-top: -10px; }\n  .popover.right {\n    margin-left: 10px; }\n  .popover.bottom {\n    margin-top: 10px; }\n  .popover.left {\n    margin-left: -10px; }\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover > .arrow, .popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover > .arrow {\n  border-width: 11px; }\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\"; }\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px; }\n  .popover.top > .arrow:after {\n    content: \" \";\n    bottom: 1px;\n    margin-left: -10px;\n    border-bottom-width: 0;\n    border-top-color: #fff; }\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25); }\n  .popover.right > .arrow:after {\n    content: \" \";\n    left: 1px;\n    bottom: -10px;\n    border-left-width: 0;\n    border-right-color: #fff; }\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px; }\n  .popover.bottom > .arrow:after {\n    content: \" \";\n    top: 1px;\n    margin-left: -10px;\n    border-top-width: 0;\n    border-bottom-color: #fff; }\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25); }\n  .popover.left > .arrow:after {\n    content: \" \";\n    right: 1px;\n    border-right-width: 0;\n    border-left-color: #fff;\n    bottom: -10px; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%; }\n  .carousel-inner > .item {\n    display: none;\n    position: relative;\n    -webkit-transition: 0.6s ease-in-out left;\n    -o-transition: 0.6s ease-in-out left;\n    transition: 0.6s ease-in-out left; }\n    .carousel-inner > .item > img,\n    .carousel-inner > .item > a > img {\n      display: block;\n      max-width: 100%;\n      height: auto;\n      line-height: 1; }\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-inner > .item {\n        -webkit-transition: -webkit-transform 0.6s ease-in-out;\n        -moz-transition: -moz-transform 0.6s ease-in-out;\n        -o-transition: -o-transform 0.6s ease-in-out;\n        transition: transform 0.6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        -moz-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        -moz-perspective: 1000px;\n        perspective: 1000px; }\n        .carousel-inner > .item.next, .carousel-inner > .item.active.right {\n          -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.prev, .carousel-inner > .item.active.left {\n          -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.next.left, .carousel-inner > .item.prev.right, .carousel-inner > .item.active {\n          -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n          left: 0; } }\n  .carousel-inner > .active,\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    display: block; }\n  .carousel-inner > .active {\n    left: 0; }\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .carousel-inner > .next {\n    left: 100%; }\n  .carousel-inner > .prev {\n    left: -100%; }\n  .carousel-inner > .next.left,\n  .carousel-inner > .prev.right {\n    left: 0; }\n  .carousel-inner > .active.left {\n    left: -100%; }\n  .carousel-inner > .active.right {\n    left: 100%; }\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent; }\n  .carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1); }\n  .carousel-control.right {\n    left: auto;\n    right: 0;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1); }\n  .carousel-control:hover, .carousel-control:focus {\n    outline: 0;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block; }\n  .carousel-control .icon-prev,\n  .carousel-control .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px; }\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px; }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif; }\n  .carousel-control .icon-prev:before {\n    content: '\\2039'; }\n  .carousel-control .icon-next:before {\n    content: '\\203A'; }\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center; }\n  .carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid #fff;\n    border-radius: 10px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: transparent; }\n  .carousel-indicators .active {\n    margin: 0;\n    width: 12px;\n    height: 12px;\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n  .carousel-caption .btn {\n    text-shadow: none; }\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px; }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px; }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px; }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px; }\n  .carousel-indicators {\n    bottom: 20px; } }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n\n.clearfix:after {\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.invisible {\n  visibility: hidden; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.hidden {\n  display: none !important; }\n\n.affix {\n  position: fixed; }\n\n@-ms-viewport {\n  width: device-width; }\n\n.visible-xs {\n  display: none !important; }\n\n.visible-sm {\n  display: none !important; }\n\n.visible-md {\n  display: none !important; }\n\n.visible-lg {\n  display: none !important; }\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important; }\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important; }\n  table.visible-xs {\n    display: table !important; }\n  tr.visible-xs {\n    display: table-row !important; }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important; }\n  table.visible-sm {\n    display: table !important; }\n  tr.visible-sm {\n    display: table-row !important; }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important; }\n  table.visible-md {\n    display: table !important; }\n  tr.visible-md {\n    display: table-row !important; }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important; }\n  table.visible-lg {\n    display: table !important; }\n  tr.visible-lg {\n    display: table-row !important; }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important; } }\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important; } }\n\n.visible-print {\n  display: none !important; }\n\n@media print {\n  .visible-print {\n    display: block !important; }\n  table.visible-print {\n    display: table !important; }\n  tr.visible-print {\n    display: table-row !important; }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important; } }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n\nbody {\n  height: 100%;\n  background: linear-gradient(90deg, #e0e1dc 50%, #f7f960 50%); }\n\n#header {\n  font-size: 1.8em;\n  font-weight: lighter;\n  background: #ffffff;\n  margin-top: 0.5%; }\n\n.header {\n  font-weight: 400;\n  font-size: 2em; }\n\ndiv#table {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  text-align: center; }\n\ndiv.tr {\n  display: table-row;\n  padding: 0.5em; }\n\nspan.th {\n  font-weight: bold;\n  border: 1px solid black;\n  display: table-cell;\n  padding: 1%;\n  word-wrap: break-word; }\n\nspan.td {\n  border: 1px solid black;\n  display: table-cell;\n  padding: 0.5em;\n  overflow-wrap: break-word; }\n\n#wide1,\n#wide2,\n#wide3 {\n  width: 20%; }\n\n#narrow1,\n#narrow2,\n#narrow3 {\n  min-width: 7%;\n  word-wrap: break-word; }\n\nspan#pic {\n  width: 20%; }\n\nbutton {\n  background-color: #ccc;\n  border: none;\n  color: #1c1c1b;\n  padding: 10px 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin: 2%; }\n\ninput[type=text] {\n  padding: 5px;\n  box-sizing: border-box;\n  margin: 5px;\n  border-radius: 3px;\n  border: 1px solid #ccc; }\n\ninput[type=password] {\n  padding: 5px;\n  box-sizing: border-box;\n  margin: 5px;\n  border-radius: 3px;\n  border: 1px solid #ccc; }\n\ninput[type=email] {\n  padding: 5px;\n  box-sizing: border-box;\n  margin: 5px;\n  border-radius: 3px;\n  border: 1px solid #ccc; }\n\n#image {\n  margin-top: 1%;\n  margin-bottom: 1%;\n  display: block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto; }\n\n.form1,\n.form2 {\n  background: #ffffff;\n  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  margin: 5px;\n  padding: 1%; }\n\n.user-dash {\n  display: none;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #e0e1dc;\n  padding: 1%; }\n\n.centered {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap; }\n\n.flex-container {\n  display: none;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.flex-item {\n  padding: 2%;\n  box-sizing: border-box;\n  background: #ffffff;\n  margin: 2%;\n  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2); }\n\n#logoutbutton {\n  background-color: red;\n  border: none;\n  color: white;\n  padding: 5px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin: 2% 2% 2% auto; }\n\n#pw-change-submit {\n  background-color: #1c1c1b;\n  border: none;\n  color: white;\n  padding: 5px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline;\n  margin: 2% auto 2% 2%; }\n\nlegend {\n  color: white;\n  text-align: center;\n  font-weight: 200;\n  background-color: #1c1c1b;\n  padding: 2%; }\n\n/*\n\tMax width before this PARTICULAR table gets nasty. This query will take effect for any screen smaller than 760px and also iPads specifically.\n\t*/\n/* Hide table headers (but not display: none;, for accessibility) */\n", ""]);

// exports


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "448c34a56d699c29117adc64c43affeb.woff2";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fa2772327f55d8198301fdb8bcfc8158.woff";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e18bbf611f2a2e43afc071aa2f4e1512.ttf";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "89889688147bd7575d6327160d64e760.svg";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(68);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 68 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
],[17]);