"use strict";
var L09_2_VogelhausClasses;
(function (L09_2_VogelhausClasses) {
    class BirdOnFly {
        position;
        velocity;
        scale;
        constructor(_position) {
            this.position = _position;
            this.velocity = new L09_2_VogelhausClasses.Vector(0, 0);
            this.velocity.random(50, 200, L09_2_VogelhausClasses.directions[Math.floor(Math.random() * L09_2_VogelhausClasses.directions.length)]);
            this.scale = new L09_2_VogelhausClasses.Vector(0, 0);
            this.scale.set(this.position.y / 225, this.position.y / 225);
        }
        draw() {
            L09_2_VogelhausClasses.cc2.save();
            L09_2_VogelhausClasses.cc2.translate(this.position.x, this.position.y);
            L09_2_VogelhausClasses.cc2.scale(this.scale.x, this.scale.y);
            L09_2_VogelhausClasses.cc2.beginPath();
            L09_2_VogelhausClasses.cc2.moveTo(0, 0);
            L09_2_VogelhausClasses.cc2.bezierCurveTo(0, -10, -10, -10, -10, 0);
            L09_2_VogelhausClasses.cc2.moveTo(0, 0);
            L09_2_VogelhausClasses.cc2.strokeStyle = "#000";
            L09_2_VogelhausClasses.cc2.closePath();
            L09_2_VogelhausClasses.cc2.stroke();
            L09_2_VogelhausClasses.cc2.beginPath();
            L09_2_VogelhausClasses.cc2.moveTo(0, 0);
            L09_2_VogelhausClasses.cc2.bezierCurveTo(0, -10, 10, -10, 10, 0);
            L09_2_VogelhausClasses.cc2.moveTo(0, 0);
            L09_2_VogelhausClasses.cc2.strokeStyle = "#000";
            L09_2_VogelhausClasses.cc2.closePath();
            L09_2_VogelhausClasses.cc2.stroke();
            L09_2_VogelhausClasses.cc2.restore();
        }
        fly(_timeslice) {
            let offset = new L09_2_VogelhausClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x > L09_2_VogelhausClasses.cc2.canvas.width)
                this.position.x -= L09_2_VogelhausClasses.cc2.canvas.width;
            if (this.position.x < 0)
                this.position.x += L09_2_VogelhausClasses.cc2.canvas.width;
        }
    }
    L09_2_VogelhausClasses.BirdOnFly = BirdOnFly;
})(L09_2_VogelhausClasses || (L09_2_VogelhausClasses = {}));
//# sourceMappingURL=BirdFlying.js.map