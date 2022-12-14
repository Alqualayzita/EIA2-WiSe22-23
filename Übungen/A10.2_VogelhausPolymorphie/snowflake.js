"use strict";
var L10_2_VogelhausPolymorphie;
(function (L10_2_VogelhausPolymorphie) {
    class Snowflake extends L10_2_VogelhausPolymorphie.Moveable {
        size;
        radiusParticle;
        xy;
        constructor(_position, _size) {
            super(_position);
            this.size = _size;
            this.radiusParticle = 10;
            this.velocity = new L10_2_VogelhausPolymorphie.Vector(0, 0);
            this.velocity.random(50, 100, "y");
        }
        letItSnow(_timeslice) {
            let offset = new L10_2_VogelhausPolymorphie.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.y > 250)
                this.position.y -= 250;
        }
        draw() {
            let radiusParticle = 40;
            let particle = new Path2D();
            let gradient = L10_2_VogelhausPolymorphie.cc2.createRadialGradient(0, 0, 0, 0, 0, this.radiusParticle);
            let start = L10_2_VogelhausPolymorphie.cc2.getTransform();
            L10_2_VogelhausPolymorphie.cc2.translate(L10_2_VogelhausPolymorphie.posSnowflakes.x, L10_2_VogelhausPolymorphie.posSnowflakes.y);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L10_2_VogelhausPolymorphie.cc2.save();
            L10_2_VogelhausPolymorphie.cc2.translate(this.position.x, this.position.y);
            L10_2_VogelhausPolymorphie.cc2.fillStyle = gradient;
            if (this.xy == undefined) {
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                this.xy = new L10_2_VogelhausPolymorphie.Vector(x, y);
                L10_2_VogelhausPolymorphie.cc2.save();
                L10_2_VogelhausPolymorphie.cc2.translate(x, y);
                L10_2_VogelhausPolymorphie.cc2.fill(particle);
                L10_2_VogelhausPolymorphie.cc2.restore();
            }
            else {
                L10_2_VogelhausPolymorphie.cc2.save();
                L10_2_VogelhausPolymorphie.cc2.translate(this.xy.x, this.xy.y);
                L10_2_VogelhausPolymorphie.cc2.fill(particle);
                L10_2_VogelhausPolymorphie.cc2.restore();
            }
            L10_2_VogelhausPolymorphie.cc2.restore();
            L10_2_VogelhausPolymorphie.cc2.setTransform(start);
        }
    }
    L10_2_VogelhausPolymorphie.Snowflake = Snowflake;
})(L10_2_VogelhausPolymorphie || (L10_2_VogelhausPolymorphie = {}));
//# sourceMappingURL=snowflake.js.map