"use strict";
var L09_2_VogelhausClasses;
(function (L09_2_VogelhausClasses) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength, _directions) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            if (_directions == "y") {
                let direction = 0.5 * Math.PI;
                this.set(Math.cos(direction), Math.sin(direction));
                this.scale(length);
            }
            else if (_directions == "-y") {
                let direction = -0.5 * Math.PI;
                this.set(Math.cos(direction), Math.sin(direction));
                this.scale(length);
            }
            else if (_directions == "x") {
                let direction = 1 * Math.PI;
                this.set(Math.cos(direction), Math.sin(direction));
                this.scale(length);
            }
            else if (_directions == "-x") {
                let direction = -2 * Math.PI;
                this.set(Math.cos(direction), Math.sin(direction));
                this.scale(length);
            }
            else {
                let direction = Math.random() * 2 * Math.PI;
                this.set(Math.cos(direction), Math.sin(direction));
                this.scale(length);
            }
        }
    }
    L09_2_VogelhausClasses.Vector = Vector;
})(L09_2_VogelhausClasses || (L09_2_VogelhausClasses = {}));
//# sourceMappingURL=vector.js.map