"use strict";
var L10_2_VogelhausPolymorphie;
(function (L10_2_VogelhausPolymorphie) {
    class SitBird extends L10_2_VogelhausPolymorphie.Moveable {
        velocity;
        color;
        beakColor;
        scale;
        eating;
        index;
        constructor(_position, _color, _beakColor) {
            super(_position);
            this.color = _color;
            this.beakColor = _beakColor;
            this.scale = new L10_2_VogelhausPolymorphie.Vector(0, 0);
            this.scale.set(this.position.y / 500, this.position.y / 500);
            this.velocity = new L10_2_VogelhausPolymorphie.Vector(0, 0);
            this.velocity.random(50, 100, L10_2_VogelhausPolymorphie.directions[Math.floor(Math.random() * L10_2_VogelhausPolymorphie.directions.length)]);
            let values = [true, false];
            this.eating = values[Math.floor(Math.random() * values.length)];
            this.index = L10_2_VogelhausPolymorphie.randomBetween(0, 25);
        }
        checkUpdate() {
            if (this.index < 25) {
                this.index++;
                return false;
            }
            if (this.index == 25) {
                this.index = 0;
                return true;
            }
        }
        draw() {
            if (this.eating != true) {
                let r1 = 15;
                let transform = L10_2_VogelhausPolymorphie.cc2.getTransform();
                L10_2_VogelhausPolymorphie.cc2.scale(this.scale.x, this.scale.y);
                L10_2_VogelhausPolymorphie.cc2.translate(this.position.x, this.position.y);
                L10_2_VogelhausPolymorphie.cc2.beginPath();
                L10_2_VogelhausPolymorphie.cc2.moveTo(-10, 10);
                L10_2_VogelhausPolymorphie.cc2.lineTo(-5, 0);
                L10_2_VogelhausPolymorphie.cc2.lineTo(0, 10);
                L10_2_VogelhausPolymorphie.cc2.lineTo(5, 0);
                L10_2_VogelhausPolymorphie.cc2.lineTo(10, 10);
                L10_2_VogelhausPolymorphie.cc2.moveTo(0, 10);
                L10_2_VogelhausPolymorphie.cc2.strokeStyle = "#000";
                L10_2_VogelhausPolymorphie.cc2.lineWidth = 2;
                L10_2_VogelhausPolymorphie.cc2.closePath();
                L10_2_VogelhausPolymorphie.cc2.stroke();
                let leg = new Path2D();
                leg.moveTo(0, 0);
                leg.lineTo(0, -20);
                L10_2_VogelhausPolymorphie.cc2.save();
                L10_2_VogelhausPolymorphie.cc2.translate(-5, 0);
                L10_2_VogelhausPolymorphie.cc2.stroke(leg);
                L10_2_VogelhausPolymorphie.cc2.translate(10, 0);
                L10_2_VogelhausPolymorphie.cc2.stroke(leg);
                L10_2_VogelhausPolymorphie.cc2.restore();
                L10_2_VogelhausPolymorphie.cc2.translate(0, -25);
                let body = L10_2_VogelhausPolymorphie.cc2.getTransform();
                let bCircle = new Path2D;
                let hCircle = new Path2D;
                let eye = new Path2D;
                bCircle.arc(0, 0, r1, 0, 2 * Math.PI);
                L10_2_VogelhausPolymorphie.cc2.fillStyle = this.color.bColor;
                L10_2_VogelhausPolymorphie.cc2.fill(bCircle);
                L10_2_VogelhausPolymorphie.cc2.translate(0, -r1);
                hCircle.arc(0, 0, r1 * 0.8, 0, 2 * Math.PI);
                L10_2_VogelhausPolymorphie.cc2.fillStyle = this.color.hColor;
                L10_2_VogelhausPolymorphie.cc2.fill(hCircle);
                L10_2_VogelhausPolymorphie.cc2.translate(-r1 / 2, -r1 * 0.1);
                eye.arc(0, 0, r1 * 0.1, 0, 2 * Math.PI);
                L10_2_VogelhausPolymorphie.cc2.fillStyle = this.color.eyeColor;
                L10_2_VogelhausPolymorphie.cc2.fill(eye);
                L10_2_VogelhausPolymorphie.cc2.translate(r1, 0);
                eye.arc(0, 0, r1 * 0.1, 0, 2 * Math.PI);
                L10_2_VogelhausPolymorphie.cc2.fillStyle = this.color.eyeColor;
                L10_2_VogelhausPolymorphie.cc2.fill(eye);
                L10_2_VogelhausPolymorphie.cc2.setTransform(body);
                L10_2_VogelhausPolymorphie.cc2.beginPath();
                L10_2_VogelhausPolymorphie.cc2.moveTo(0, 0);
                L10_2_VogelhausPolymorphie.cc2.lineTo(-5, -r1 * 0.8);
                L10_2_VogelhausPolymorphie.cc2.lineTo(5, -r1 * 0.8);
                L10_2_VogelhausPolymorphie.cc2.fillStyle = this.beakColor;
                L10_2_VogelhausPolymorphie.cc2.closePath();
                L10_2_VogelhausPolymorphie.cc2.fill();
                L10_2_VogelhausPolymorphie.cc2.setTransform(transform);
            }
            if (this.eating == true) {
                let r1 = 15;
                let transform = L10_2_VogelhausPolymorphie.cc2.getTransform();
                L10_2_VogelhausPolymorphie.cc2.scale(this.scale.x, this.scale.y);
                L10_2_VogelhausPolymorphie.cc2.translate(this.position.x, this.position.y);
                let position = L10_2_VogelhausPolymorphie.cc2.getTransform();
                L10_2_VogelhausPolymorphie.cc2.beginPath();
                L10_2_VogelhausPolymorphie.cc2.moveTo(-10, 10);
                L10_2_VogelhausPolymorphie.cc2.lineTo(-5, 0);
                L10_2_VogelhausPolymorphie.cc2.lineTo(0, 10);
                L10_2_VogelhausPolymorphie.cc2.lineTo(5, 0);
                L10_2_VogelhausPolymorphie.cc2.lineTo(10, 10);
                L10_2_VogelhausPolymorphie.cc2.moveTo(0, 10);
                L10_2_VogelhausPolymorphie.cc2.strokeStyle = "#000";
                L10_2_VogelhausPolymorphie.cc2.lineWidth = 2;
                L10_2_VogelhausPolymorphie.cc2.closePath();
                L10_2_VogelhausPolymorphie.cc2.stroke();
                let leg = new Path2D();
                leg.moveTo(0, 0);
                leg.lineTo(0, -20);
                L10_2_VogelhausPolymorphie.cc2.save();
                L10_2_VogelhausPolymorphie.cc2.translate(-5, 0);
                L10_2_VogelhausPolymorphie.cc2.stroke(leg);
                L10_2_VogelhausPolymorphie.cc2.translate(10, 0);
                L10_2_VogelhausPolymorphie.cc2.stroke(leg);
                L10_2_VogelhausPolymorphie.cc2.restore();
                L10_2_VogelhausPolymorphie.cc2.translate(0, -25);
                let bCircle = new Path2D;
                let hCircle = new Path2D;
                bCircle.arc(0, 0, r1, 0, 2 * Math.PI);
                L10_2_VogelhausPolymorphie.cc2.fillStyle = this.color.bColor;
                L10_2_VogelhausPolymorphie.cc2.fill(bCircle);
                L10_2_VogelhausPolymorphie.cc2.setTransform(position);
                L10_2_VogelhausPolymorphie.cc2.translate(0, 5);
                L10_2_VogelhausPolymorphie.cc2.beginPath();
                L10_2_VogelhausPolymorphie.cc2.moveTo(0, 0);
                L10_2_VogelhausPolymorphie.cc2.lineTo(-5, -r1 * 0.8);
                L10_2_VogelhausPolymorphie.cc2.lineTo(5, -r1 * 0.8);
                L10_2_VogelhausPolymorphie.cc2.fillStyle = this.beakColor;
                L10_2_VogelhausPolymorphie.cc2.closePath();
                L10_2_VogelhausPolymorphie.cc2.fill();
                L10_2_VogelhausPolymorphie.cc2.setTransform(position);
                L10_2_VogelhausPolymorphie.cc2.translate(0, -25 / 2);
                hCircle.arc(0, 0, r1 * 0.8, 0, 2 * Math.PI);
                L10_2_VogelhausPolymorphie.cc2.fillStyle = this.color.hColor;
                L10_2_VogelhausPolymorphie.cc2.fill(hCircle);
                L10_2_VogelhausPolymorphie.cc2.setTransform(transform);
            }
        }
        eat(_timeslice) {
            let offset = new L10_2_VogelhausPolymorphie.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            this.eating = !this.eating;
            if (this.position.x > L10_2_VogelhausPolymorphie.cc2.canvas.width)
                this.position.x -= L10_2_VogelhausPolymorphie.cc2.canvas.width;
            if (this.position.x < 0)
                this.position.x += L10_2_VogelhausPolymorphie.cc2.canvas.width;
        }
    }
    L10_2_VogelhausPolymorphie.SitBird = SitBird;
})(L10_2_VogelhausPolymorphie || (L10_2_VogelhausPolymorphie = {}));
//# sourceMappingURL=BirdSitting.js.map