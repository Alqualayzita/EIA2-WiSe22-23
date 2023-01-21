"use strict";
var L11_VogelhausAdvanced;
(function (L11_VogelhausAdvanced) {
    class SitBird extends L11_VogelhausAdvanced.Moveable {
        color;
        beakColor;
        scale;
        eating;
        frameIndex;
        hit = false;
        action;
        isFlying;
        target;
        distance = new L11_VogelhausAdvanced.Vector(0, 0);
        constructor(_position, _color, _beakColor) {
            super(_position);
            this.color = _color;
            this.beakColor = _beakColor;
            this.isFlying = this.checkPosition();
            this.frameIndex = L11_VogelhausAdvanced.randomBetween(0, 25);
            this.setFlying();
        }
        isHit(_hotspot) {
            let hitsize = 50;
            let difference = new L11_VogelhausAdvanced.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
        checkDistance() {
            let distanceX = this.target.x - this.position.x;
            let distanceY = this.target.y - this.position.y;
            let distance = new L11_VogelhausAdvanced.Vector(distanceX, distanceY);
            if (distanceX < this.distance.x && distanceY < this.distance.y) {
                this.velocity = this.newVelocity();
                this.distance = distance;
            }
            else {
                this.distance = distance;
            }
        }
        checkPosition() {
            let fly;
            if (this.position.y >= L11_VogelhausAdvanced.horizon) {
                fly = false;
                return fly;
            }
            else {
                fly = true;
                return fly;
            }
        }
        setFlying() {
            if (this.isFlying == true) {
                this.target = this.getTarget();
                this.velocity = this.newVelocity();
            }
            else {
                let stop = new L11_VogelhausAdvanced.Vector(0, 0);
                this.velocity = stop.copy();
                this.target = stop.copy();
                let values = [true, false];
                this.eating = values[Math.floor(Math.random() * values.length)];
                this.waitForNewDestination();
            }
        }
        waitForNewDestination() {
            let time = L11_VogelhausAdvanced.randomBetween(5000, 10000);
            window.setTimeout(this.newDestination, time);
        }
        newDestination = () => {
            this.target = this.getTarget();
            this.velocity = this.newVelocity();
            this.isFlying = true;
        };
        handleReachTarget() {
            this.velocity = new L11_VogelhausAdvanced.Vector(0, 0);
            this.target = new L11_VogelhausAdvanced.Vector(0, 0);
            this.waitForNewDestination();
        }
        checkTargetDistance() {
            let distanceX = this.target.x - this.position.x;
            let distanceY = this.target.y - this.position.y;
            if (distanceX < 5 && distanceY < 5) {
                this.isFlying = false;
                this.action = false;
                this.handleReachTarget();
                return true;
            }
            else {
                return false;
            }
        }
        newVelocity() {
            let x = this.target.x - this.position.x;
            let y = this.target.y - this.position.y;
            let newVelocity = new L11_VogelhausAdvanced.Vector(x, y);
            return newVelocity.copy();
        }
        getTarget(_position) {
            let target = L11_VogelhausAdvanced.targets[Math.floor(Math.random() * L11_VogelhausAdvanced.targets.length)];
            let targetVector = new L11_VogelhausAdvanced.Vector(L11_VogelhausAdvanced.randomBetween(target.minXValue, target.maxXValue), L11_VogelhausAdvanced.randomBetween(target.minYValue, target.maxYValue));
            return targetVector.copy();
        }
        checkState() {
            if (!this.isFlying) {
                this.action = false;
            }
            else if (this.isFlying == true) {
                this.action = true;
                this.frameIndex = 25;
            }
        }
        checkUpdate() {
            if (this.frameIndex < 25) {
                this.frameIndex++;
                return false;
            }
            if (this.frameIndex == 25) {
                this.frameIndex = 0;
                return true;
            }
        }
        draw() {
            let saveTransform = L11_VogelhausAdvanced.cc2.getTransform();
            if (this.action == false) {
                if (this.eating != true) {
                    let r1 = 15;
                    let transform = L11_VogelhausAdvanced.cc2.getTransform();
                    L11_VogelhausAdvanced.cc2.translate(this.position.x, this.position.y);
                    L11_VogelhausAdvanced.cc2.beginPath();
                    L11_VogelhausAdvanced.cc2.moveTo(-10, 10);
                    L11_VogelhausAdvanced.cc2.lineTo(-5, 0);
                    L11_VogelhausAdvanced.cc2.lineTo(0, 10);
                    L11_VogelhausAdvanced.cc2.lineTo(5, 0);
                    L11_VogelhausAdvanced.cc2.lineTo(10, 10);
                    L11_VogelhausAdvanced.cc2.moveTo(0, 10);
                    L11_VogelhausAdvanced.cc2.strokeStyle = "#000";
                    L11_VogelhausAdvanced.cc2.lineWidth = 2;
                    L11_VogelhausAdvanced.cc2.closePath();
                    L11_VogelhausAdvanced.cc2.stroke();
                    let leg = new Path2D();
                    leg.moveTo(0, 0);
                    leg.lineTo(0, -20);
                    L11_VogelhausAdvanced.cc2.save();
                    L11_VogelhausAdvanced.cc2.translate(-5, 0);
                    L11_VogelhausAdvanced.cc2.stroke(leg);
                    L11_VogelhausAdvanced.cc2.translate(10, 0);
                    L11_VogelhausAdvanced.cc2.stroke(leg);
                    L11_VogelhausAdvanced.cc2.restore();
                    L11_VogelhausAdvanced.cc2.translate(0, -25);
                    let body = L11_VogelhausAdvanced.cc2.getTransform();
                    let bCircle = new Path2D;
                    let hCircle = new Path2D;
                    let eye = new Path2D;
                    bCircle.arc(0, 0, r1, 0, 2 * Math.PI);
                    L11_VogelhausAdvanced.cc2.fillStyle = this.color.bColor;
                    L11_VogelhausAdvanced.cc2.fill(bCircle);
                    L11_VogelhausAdvanced.cc2.translate(0, -r1);
                    hCircle.arc(0, 0, r1 * 0.8, 0, 2 * Math.PI);
                    L11_VogelhausAdvanced.cc2.fillStyle = this.color.hColor;
                    L11_VogelhausAdvanced.cc2.fill(hCircle);
                    L11_VogelhausAdvanced.cc2.translate(-r1 / 2, -r1 * 0.1);
                    eye.arc(0, 0, r1 * 0.1, 0, 2 * Math.PI);
                    L11_VogelhausAdvanced.cc2.fillStyle = this.color.eyeColor;
                    L11_VogelhausAdvanced.cc2.fill(eye);
                    L11_VogelhausAdvanced.cc2.translate(r1, 0);
                    eye.arc(0, 0, r1 * 0.1, 0, 2 * Math.PI);
                    L11_VogelhausAdvanced.cc2.fillStyle = this.color.eyeColor;
                    L11_VogelhausAdvanced.cc2.fill(eye);
                    L11_VogelhausAdvanced.cc2.setTransform(body);
                    L11_VogelhausAdvanced.cc2.beginPath();
                    L11_VogelhausAdvanced.cc2.moveTo(0, 0);
                    L11_VogelhausAdvanced.cc2.lineTo(-5, -r1 * 0.8);
                    L11_VogelhausAdvanced.cc2.lineTo(5, -r1 * 0.8);
                    L11_VogelhausAdvanced.cc2.fillStyle = this.beakColor;
                    L11_VogelhausAdvanced.cc2.closePath();
                    L11_VogelhausAdvanced.cc2.fill();
                    L11_VogelhausAdvanced.cc2.setTransform(transform);
                }
                if (this.eating == true) {
                    let r1 = 15;
                    let transform = L11_VogelhausAdvanced.cc2.getTransform();
                    L11_VogelhausAdvanced.cc2.translate(this.position.x, this.position.y);
                    let position = L11_VogelhausAdvanced.cc2.getTransform();
                    L11_VogelhausAdvanced.cc2.beginPath();
                    L11_VogelhausAdvanced.cc2.moveTo(-10, 10);
                    L11_VogelhausAdvanced.cc2.lineTo(-5, 0);
                    L11_VogelhausAdvanced.cc2.lineTo(0, 10);
                    L11_VogelhausAdvanced.cc2.lineTo(5, 0);
                    L11_VogelhausAdvanced.cc2.lineTo(10, 10);
                    L11_VogelhausAdvanced.cc2.moveTo(0, 10);
                    L11_VogelhausAdvanced.cc2.strokeStyle = "#000";
                    L11_VogelhausAdvanced.cc2.lineWidth = 2;
                    L11_VogelhausAdvanced.cc2.closePath();
                    L11_VogelhausAdvanced.cc2.stroke();
                    let leg = new Path2D();
                    leg.moveTo(0, 0);
                    leg.lineTo(0, -20);
                    L11_VogelhausAdvanced.cc2.save();
                    L11_VogelhausAdvanced.cc2.translate(-5, 0);
                    L11_VogelhausAdvanced.cc2.stroke(leg);
                    L11_VogelhausAdvanced.cc2.translate(10, 0);
                    L11_VogelhausAdvanced.cc2.stroke(leg);
                    L11_VogelhausAdvanced.cc2.restore();
                    L11_VogelhausAdvanced.cc2.translate(0, -25);
                    let bCircle = new Path2D;
                    let hCircle = new Path2D;
                    bCircle.arc(0, 0, r1, 0, 2 * Math.PI);
                    L11_VogelhausAdvanced.cc2.fillStyle = this.color.bColor;
                    L11_VogelhausAdvanced.cc2.fill(bCircle);
                    L11_VogelhausAdvanced.cc2.setTransform(position);
                    L11_VogelhausAdvanced.cc2.translate(0, 5);
                    L11_VogelhausAdvanced.cc2.beginPath();
                    L11_VogelhausAdvanced.cc2.moveTo(0, 0);
                    L11_VogelhausAdvanced.cc2.lineTo(-5, -r1 * 0.8);
                    L11_VogelhausAdvanced.cc2.lineTo(5, -r1 * 0.8);
                    L11_VogelhausAdvanced.cc2.fillStyle = this.beakColor;
                    L11_VogelhausAdvanced.cc2.closePath();
                    L11_VogelhausAdvanced.cc2.fill();
                    L11_VogelhausAdvanced.cc2.setTransform(position);
                    L11_VogelhausAdvanced.cc2.translate(0, -25 / 2);
                    hCircle.arc(0, 0, r1 * 0.8, 0, 2 * Math.PI);
                    L11_VogelhausAdvanced.cc2.fillStyle = this.color.hColor;
                    L11_VogelhausAdvanced.cc2.fill(hCircle);
                    L11_VogelhausAdvanced.cc2.setTransform(transform);
                }
            }
            if (this.action == true && this.velocity.x > 0) {
                let r1 = 15;
                let r2 = r1 * 0.8;
                let bCircle = new Path2D;
                let hCircle = new Path2D;
                let eye = new Path2D;
                let transform = L11_VogelhausAdvanced.cc2.getTransform();
                L11_VogelhausAdvanced.cc2.translate(this.position.x, this.position.y);
                let body = L11_VogelhausAdvanced.cc2.getTransform();
                L11_VogelhausAdvanced.cc2.translate(r1, -r1);
                L11_VogelhausAdvanced.cc2.save();
                L11_VogelhausAdvanced.cc2.beginPath();
                L11_VogelhausAdvanced.cc2.save();
                L11_VogelhausAdvanced.cc2.translate(r2, 0);
                L11_VogelhausAdvanced.cc2.moveTo(0, 0);
                L11_VogelhausAdvanced.cc2.lineTo(r2 / 2, r2 * 0.8);
                L11_VogelhausAdvanced.cc2.lineTo(-r2, r2 * 0.7);
                L11_VogelhausAdvanced.cc2.fillStyle = this.beakColor;
                L11_VogelhausAdvanced.cc2.closePath();
                L11_VogelhausAdvanced.cc2.fill();
                L11_VogelhausAdvanced.cc2.restore();
                L11_VogelhausAdvanced.cc2.beginPath();
                L11_VogelhausAdvanced.cc2.setTransform(body);
                L11_VogelhausAdvanced.cc2.save();
                bCircle.arc(0, 0, r1, 0, 2 * Math.PI);
                L11_VogelhausAdvanced.cc2.fillStyle = this.color.bColor;
                L11_VogelhausAdvanced.cc2.fill(bCircle);
                L11_VogelhausAdvanced.cc2.closePath();
                L11_VogelhausAdvanced.cc2.beginPath();
                L11_VogelhausAdvanced.cc2.save();
                L11_VogelhausAdvanced.cc2.translate(r1, -r1);
                hCircle.arc(0, 0, r1 * 0.8, 0, 2 * Math.PI);
                L11_VogelhausAdvanced.cc2.fillStyle = this.color.hColor;
                L11_VogelhausAdvanced.cc2.fill(hCircle);
                L11_VogelhausAdvanced.cc2.closePath();
                L11_VogelhausAdvanced.cc2.save();
                L11_VogelhausAdvanced.cc2.translate(r2 / 3, -r2 / 4);
                eye.arc(0, 0, r1 * 0.1, 0, 2 * Math.PI);
                L11_VogelhausAdvanced.cc2.fillStyle = this.color.eyeColor;
                L11_VogelhausAdvanced.cc2.fill(eye);
                L11_VogelhausAdvanced.cc2.setTransform(body);
                L11_VogelhausAdvanced.cc2.save();
                L11_VogelhausAdvanced.cc2.scale(1.7, 1.7);
                L11_VogelhausAdvanced.cc2.beginPath();
                L11_VogelhausAdvanced.cc2.moveTo(0, 0);
                L11_VogelhausAdvanced.cc2.bezierCurveTo(r1 / 4, 0, r1 / 2, -r1 / 2, -r1 * 0.2, -r1 / 2);
                L11_VogelhausAdvanced.cc2.lineTo(-r1 * 1.5, -r1);
                L11_VogelhausAdvanced.cc2.bezierCurveTo(-r1, -r1 * 0.8, -r1 * 0.7, 0, 0, 0);
                L11_VogelhausAdvanced.cc2.fillStyle = this.color.hColor;
                L11_VogelhausAdvanced.cc2.closePath();
                L11_VogelhausAdvanced.cc2.fill();
                L11_VogelhausAdvanced.cc2.setTransform(transform);
            }
            if (this.action == true && this.velocity.x <= 0) {
                let r1 = 15;
                let r2 = r1 * 0.8;
                let bCircle = new Path2D;
                let hCircle = new Path2D;
                let eye = new Path2D;
                let transform = L11_VogelhausAdvanced.cc2.getTransform();
                L11_VogelhausAdvanced.cc2.translate(this.position.x, this.position.y);
                L11_VogelhausAdvanced.cc2.scale(-1, 1);
                let body = L11_VogelhausAdvanced.cc2.getTransform();
                L11_VogelhausAdvanced.cc2.translate(r1, -r1);
                L11_VogelhausAdvanced.cc2.save();
                L11_VogelhausAdvanced.cc2.beginPath();
                L11_VogelhausAdvanced.cc2.save();
                L11_VogelhausAdvanced.cc2.translate(r2, 0);
                L11_VogelhausAdvanced.cc2.moveTo(0, 0);
                L11_VogelhausAdvanced.cc2.lineTo(r2 / 2, r2 * 0.8);
                L11_VogelhausAdvanced.cc2.lineTo(-r2, r2 * 0.7);
                L11_VogelhausAdvanced.cc2.fillStyle = this.beakColor;
                L11_VogelhausAdvanced.cc2.closePath();
                L11_VogelhausAdvanced.cc2.fill();
                L11_VogelhausAdvanced.cc2.restore();
                L11_VogelhausAdvanced.cc2.beginPath();
                L11_VogelhausAdvanced.cc2.setTransform(body);
                L11_VogelhausAdvanced.cc2.save();
                bCircle.arc(0, 0, r1, 0, 2 * Math.PI);
                L11_VogelhausAdvanced.cc2.fillStyle = this.color.bColor;
                L11_VogelhausAdvanced.cc2.fill(bCircle);
                L11_VogelhausAdvanced.cc2.closePath();
                L11_VogelhausAdvanced.cc2.beginPath();
                L11_VogelhausAdvanced.cc2.save();
                L11_VogelhausAdvanced.cc2.translate(r1, -r1);
                hCircle.arc(0, 0, r1 * 0.8, 0, 2 * Math.PI);
                L11_VogelhausAdvanced.cc2.fillStyle = this.color.hColor;
                L11_VogelhausAdvanced.cc2.fill(hCircle);
                L11_VogelhausAdvanced.cc2.closePath();
                L11_VogelhausAdvanced.cc2.save();
                L11_VogelhausAdvanced.cc2.translate(r2 / 3, -r2 / 4);
                eye.arc(0, 0, r1 * 0.1, 0, 2 * Math.PI);
                L11_VogelhausAdvanced.cc2.fillStyle = this.color.eyeColor;
                L11_VogelhausAdvanced.cc2.fill(eye);
                L11_VogelhausAdvanced.cc2.setTransform(body);
                L11_VogelhausAdvanced.cc2.save();
                L11_VogelhausAdvanced.cc2.scale(1.7, 1.7);
                L11_VogelhausAdvanced.cc2.beginPath();
                L11_VogelhausAdvanced.cc2.moveTo(0, 0);
                L11_VogelhausAdvanced.cc2.bezierCurveTo(r1 / 4, 0, r1 / 2, -r1 / 2, -r1 * 0.2, -r1 / 2);
                L11_VogelhausAdvanced.cc2.lineTo(-r1 * 1.5, -r1);
                L11_VogelhausAdvanced.cc2.bezierCurveTo(-r1, -r1 * 0.8, -r1 * 0.7, 0, 0, 0);
                L11_VogelhausAdvanced.cc2.fillStyle = this.color.hColor;
                L11_VogelhausAdvanced.cc2.closePath();
                L11_VogelhausAdvanced.cc2.fill();
                L11_VogelhausAdvanced.cc2.setTransform(transform);
            }
            L11_VogelhausAdvanced.cc2.setTransform(saveTransform);
        }
        eat(_timeslice) {
            this.eating = !this.eating;
        }
        fly(_timeslice) {
            let offset = new L11_VogelhausAdvanced.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    L11_VogelhausAdvanced.SitBird = SitBird;
})(L11_VogelhausAdvanced || (L11_VogelhausAdvanced = {}));
//# sourceMappingURL=Birds.js.map