"use strict";
var L10_2_VogelhausPolymorphie;
(function (L10_2_VogelhausPolymorphie) {
    class BirdOnFly extends L10_2_VogelhausPolymorphie.Moveable {
        velocity;
        scale;
        constructor(_position) {
            super(_position);
            this.velocity = new L10_2_VogelhausPolymorphie.Vector(0, 0);
            this.velocity.random(50, 200, L10_2_VogelhausPolymorphie.directions[Math.floor(Math.random() * L10_2_VogelhausPolymorphie.directions.length)]);
            this.scale = new L10_2_VogelhausPolymorphie.Vector(0, 0);
            this.scale.set(this.position.y / 225, this.position.y / 225);
        }
        draw() {
            let start = L10_2_VogelhausPolymorphie.cc2.getTransform();
            L10_2_VogelhausPolymorphie.cc2.save();
            L10_2_VogelhausPolymorphie.cc2.translate(this.position.x, this.position.y);
            L10_2_VogelhausPolymorphie.cc2.scale(this.scale.x, this.scale.y);
            L10_2_VogelhausPolymorphie.cc2.beginPath();
            L10_2_VogelhausPolymorphie.cc2.moveTo(0, 0);
            L10_2_VogelhausPolymorphie.cc2.bezierCurveTo(0, -10, -10, -10, -10, 0);
            L10_2_VogelhausPolymorphie.cc2.moveTo(0, 0);
            L10_2_VogelhausPolymorphie.cc2.strokeStyle = "#000";
            L10_2_VogelhausPolymorphie.cc2.closePath();
            L10_2_VogelhausPolymorphie.cc2.stroke();
            L10_2_VogelhausPolymorphie.cc2.beginPath();
            L10_2_VogelhausPolymorphie.cc2.moveTo(0, 0);
            L10_2_VogelhausPolymorphie.cc2.bezierCurveTo(0, -10, 10, -10, 10, 0);
            L10_2_VogelhausPolymorphie.cc2.moveTo(0, 0);
            L10_2_VogelhausPolymorphie.cc2.strokeStyle = "#000";
            L10_2_VogelhausPolymorphie.cc2.closePath();
            L10_2_VogelhausPolymorphie.cc2.stroke();
            L10_2_VogelhausPolymorphie.cc2.restore();
            L10_2_VogelhausPolymorphie.cc2.setTransform(start);
        }
        fly(_timeslice) {
            let offset = new L10_2_VogelhausPolymorphie.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x > L10_2_VogelhausPolymorphie.cc2.canvas.width)
                this.position.x -= L10_2_VogelhausPolymorphie.cc2.canvas.width;
            if (this.position.x < 0)
                this.position.x += L10_2_VogelhausPolymorphie.cc2.canvas.width;
        }
    }
    L10_2_VogelhausPolymorphie.BirdOnFly = BirdOnFly;
})(L10_2_VogelhausPolymorphie || (L10_2_VogelhausPolymorphie = {}));
//# sourceMappingURL=BirdFlying.js.map