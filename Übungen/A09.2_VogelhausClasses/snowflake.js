"use strict";
var L09_2_VogelhausClasses;
(function (L09_2_VogelhausClasses) {
    class Snowflake {
        position;
        size;
        velocity;
        radiusParticle;
        constructor(_position, _size) {
            this.position = _position;
            this.size = _size;
            this.radiusParticle = 10;
            this.velocity = new L09_2_VogelhausClasses.Vector(0, 0);
            this.velocity.random(50, 100, "y");
        }
        letItSnow(_timeslice) {
            let offset = new L09_2_VogelhausClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.y > 250)
                this.position.y -= 250;
        }
        draw() {
            let radiusParticle = 40;
            let particle = new Path2D();
            let gradient = L09_2_VogelhausClasses.cc2.createRadialGradient(0, 0, 0, 0, 0, this.radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L09_2_VogelhausClasses.cc2.save();
            L09_2_VogelhausClasses.cc2.translate(this.position.x, this.position.y);
            L09_2_VogelhausClasses.cc2.fillStyle = gradient;
            let x = (Math.random() - 0.5) * this.size.x;
            let y = -(Math.random() * this.size.y);
            L09_2_VogelhausClasses.cc2.save();
            L09_2_VogelhausClasses.cc2.translate(x, y);
            L09_2_VogelhausClasses.cc2.fill(particle);
            L09_2_VogelhausClasses.cc2.restore();
            L09_2_VogelhausClasses.cc2.restore();
        }
    }
    L09_2_VogelhausClasses.Snowflake = Snowflake;
})(L09_2_VogelhausClasses || (L09_2_VogelhausClasses = {}));
//# sourceMappingURL=snowflake.js.map