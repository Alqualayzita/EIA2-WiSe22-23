"use strict";
var L09_2_VogelhausClasses;
(function (L09_2_VogelhausClasses) {
    function drawStatic() {
        let horizon = L09_2_VogelhausClasses.cc2.canvas.height * L09_2_VogelhausClasses.golden;
        let sunPosition = new L09_2_VogelhausClasses.Vector(75, 100);
        let positionMountain = new L09_2_VogelhausClasses.Vector(0, horizon);
        let cloudPos = new L09_2_VogelhausClasses.Vector(550, 150);
        let cloudSize = new L09_2_VogelhausClasses.Vector(325, 125);
        let treeMaxScale = new L09_2_VogelhausClasses.Vector(0.5, 0.5);
        let snowmanPos = new L09_2_VogelhausClasses.Vector(L09_2_VogelhausClasses.randomBetween(10, 325), 425);
        let aviaryPos = new L09_2_VogelhausClasses.Vector(L09_2_VogelhausClasses.randomBetween(335, 700), 450);
        drawBackground();
        drawSun(sunPosition);
        drawMountains(positionMountain, 50, 135, "#80DCFA", "#E4F9F4");
        drawMountains(positionMountain, 35, 85, "#E0F6F7", "#F7F7EE");
        drawCloud(cloudPos, cloudSize, 40, 60);
        drawTrees(5, positionMountain, treeMaxScale);
        drawSnowman(snowmanPos);
        drawAviary(aviaryPos, 1);
    }
    L09_2_VogelhausClasses.drawStatic = drawStatic;
    function drawBackground() {
        let gradient = L09_2_VogelhausClasses.cc2.createLinearGradient(0, 0, 0, L09_2_VogelhausClasses.cc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L09_2_VogelhausClasses.golden, "white");
        gradient.addColorStop(1, "HSLA(122, 11%, 79%, 1)");
        L09_2_VogelhausClasses.cc2.fillStyle = gradient;
        L09_2_VogelhausClasses.cc2.fillRect(0, 0, L09_2_VogelhausClasses.cc2.canvas.width, L09_2_VogelhausClasses.cc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun");
        let r1 = 20;
        let r2 = 150;
        let gradient = L09_2_VogelhausClasses.cc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "#F1FA76");
        gradient.addColorStop(1, "HSLA(60, 0%, 90%, 0)");
        L09_2_VogelhausClasses.cc2.save();
        L09_2_VogelhausClasses.cc2.translate(_position.x, _position.y);
        L09_2_VogelhausClasses.cc2.fillStyle = gradient;
        L09_2_VogelhausClasses.cc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_2_VogelhausClasses.cc2.fill();
        L09_2_VogelhausClasses.cc2.restore();
    }
    function drawCloud(_position, _size, _nParticles, _radiusParticle) {
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = L09_2_VogelhausClasses.cc2.createRadialGradient(0, 0, 0, 0, 0, _radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L09_2_VogelhausClasses.cc2.save();
        L09_2_VogelhausClasses.cc2.translate(_position.x, _position.y);
        L09_2_VogelhausClasses.cc2.fillStyle = gradient;
        for (let drawn = 0; drawn < _nParticles; drawn++) {
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L09_2_VogelhausClasses.cc2.save();
            L09_2_VogelhausClasses.cc2.translate(x, y);
            L09_2_VogelhausClasses.cc2.fill(particle);
            L09_2_VogelhausClasses.cc2.restore();
        }
        L09_2_VogelhausClasses.cc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L09_2_VogelhausClasses.cc2.save();
        L09_2_VogelhausClasses.cc2.translate(_position.x, _position.y);
        L09_2_VogelhausClasses.cc2.beginPath();
        L09_2_VogelhausClasses.cc2.moveTo(0, 0);
        L09_2_VogelhausClasses.cc2.lineTo(0, -_max);
        do {
            x += stepMin + L09_2_VogelhausClasses.randomBetween(stepMin, stepMax);
            let y = -_min - L09_2_VogelhausClasses.randomBetween(_min, _max);
            L09_2_VogelhausClasses.cc2.lineTo(x, y);
        } while (x < L09_2_VogelhausClasses.cc2.canvas.width);
        L09_2_VogelhausClasses.cc2.lineTo(x, 0);
        L09_2_VogelhausClasses.cc2.closePath();
        let gradient = L09_2_VogelhausClasses.cc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        gradient.addColorStop(1, "#FFFFFF");
        L09_2_VogelhausClasses.cc2.fillStyle = gradient;
        L09_2_VogelhausClasses.cc2.fill();
        L09_2_VogelhausClasses.cc2.restore();
    }
    function drawTrees(_nTrees, _position, _maxScale) {
        let transform = L09_2_VogelhausClasses.cc2.getTransform();
        L09_2_VogelhausClasses.cc2.translate(_position.x, _position.y);
        for (let drawn = 0; drawn < _nTrees; drawn++) {
            let x = L09_2_VogelhausClasses.randomBetween(0, 750);
            let y = L09_2_VogelhausClasses.randomBetween(10, 30);
            let scale = new L09_2_VogelhausClasses.Vector(y / 50, y / 50);
            L09_2_VogelhausClasses.cc2.save();
            L09_2_VogelhausClasses.cc2.scale(scale.x, scale.y);
            L09_2_VogelhausClasses.cc2.translate(x, y);
            drawTree(L09_2_VogelhausClasses.randomBetween(0.2, 0.8));
            L09_2_VogelhausClasses.cc2.restore();
        }
        L09_2_VogelhausClasses.cc2.setTransform(transform);
    }
    function drawTree(_snowPart) {
        let nBranches = 30;
        let maxRadius = 50;
        let whiteBranches = nBranches * _snowPart;
        let greenBranches = nBranches - whiteBranches;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        L09_2_VogelhausClasses.cc2.fillStyle = "#B96526";
        L09_2_VogelhausClasses.cc2.fillRect(0, 0, 20, -200);
        L09_2_VogelhausClasses.cc2.save();
        L09_2_VogelhausClasses.cc2.translate(0, -120);
        for (let drawn = 0; drawn < greenBranches; drawn++) {
            let y = Math.random() * 350;
            let size = 1 - y / 700;
            let x = (Math.random() - 0.5) * 2 * maxRadius;
            L09_2_VogelhausClasses.cc2.save();
            L09_2_VogelhausClasses.cc2.translate(0, -y);
            L09_2_VogelhausClasses.cc2.scale(size, size);
            L09_2_VogelhausClasses.cc2.translate(x, 0);
            let color = "#12BD4B";
            L09_2_VogelhausClasses.cc2.fillStyle = color;
            L09_2_VogelhausClasses.cc2.fill(branch);
            L09_2_VogelhausClasses.cc2.restore();
        }
        for (let drawn = 0; drawn < whiteBranches; drawn++) {
            let y = Math.random() * 350;
            let size = 1 - y / 700;
            let x = (Math.random() - 0.5) * 2 * maxRadius;
            L09_2_VogelhausClasses.cc2.save();
            L09_2_VogelhausClasses.cc2.translate(0, -y);
            L09_2_VogelhausClasses.cc2.scale(size, size);
            L09_2_VogelhausClasses.cc2.translate(x, 0);
            let color = "HSLA(132, 50%, 100%, 0.7)";
            L09_2_VogelhausClasses.cc2.fillStyle = color;
            L09_2_VogelhausClasses.cc2.fill(branch);
            L09_2_VogelhausClasses.cc2.restore();
        }
        L09_2_VogelhausClasses.cc2.restore();
    }
    function drawSnowman(_position) {
        let r1 = 60;
        let r2 = r1 * 0.8;
        let r3 = r2 * 0.8;
        let x1 = new L09_2_VogelhausClasses.Vector(0, r1);
        let x2 = new L09_2_VogelhausClasses.Vector(0, r1 * 0.75);
        let x3 = new L09_2_VogelhausClasses.Vector(0, r2);
        let color = "#FFF";
        let transform = L09_2_VogelhausClasses.cc2.getTransform();
        let circle1 = new Path2D();
        let circle2 = new Path2D();
        let circle3 = new Path2D();
        let eye = new Path2D();
        let pupil = new Path2D();
        let cylinder = new Path2D();
        L09_2_VogelhausClasses.cc2.save();
        L09_2_VogelhausClasses.cc2.translate(_position.x, _position.y);
        L09_2_VogelhausClasses.cc2.translate(x1.x, -x1.y);
        circle1.arc(0, 0, r1, 0, 2 * Math.PI);
        L09_2_VogelhausClasses.cc2.fillStyle = color;
        L09_2_VogelhausClasses.cc2.fill(circle1);
        L09_2_VogelhausClasses.cc2.translate(x2.x, -x2.y);
        circle2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_2_VogelhausClasses.cc2.fillStyle = color;
        L09_2_VogelhausClasses.cc2.fill(circle2);
        pupil.arc(0, 0, r3 / 15, 0, 2 * Math.PI);
        L09_2_VogelhausClasses.cc2.fillStyle = "#000";
        L09_2_VogelhausClasses.cc2.fill(pupil);
        L09_2_VogelhausClasses.cc2.save();
        L09_2_VogelhausClasses.cc2.translate(x2.x, x2.y);
        pupil.arc(0, 0, r3 / 15, 0, 2 * Math.PI);
        L09_2_VogelhausClasses.cc2.fillStyle = "#000";
        L09_2_VogelhausClasses.cc2.fill(pupil);
        L09_2_VogelhausClasses.cc2.restore();
        L09_2_VogelhausClasses.cc2.translate(x3.x, -x3.y);
        let head = L09_2_VogelhausClasses.cc2.getTransform();
        circle3.arc(0, 0, r3, 0, 2 * Math.PI);
        L09_2_VogelhausClasses.cc2.fillStyle = color;
        L09_2_VogelhausClasses.cc2.fill(circle3);
        L09_2_VogelhausClasses.cc2.save();
        L09_2_VogelhausClasses.cc2.translate(r3 / 2, -r3 / 4);
        eye.arc(0, 0, r3 / 6, 0, 2 * Math.PI);
        L09_2_VogelhausClasses.cc2.strokeStyle = "#000";
        L09_2_VogelhausClasses.cc2.stroke(eye);
        pupil.arc(0, 0, r3 / 15, 0, 2 * Math.PI);
        L09_2_VogelhausClasses.cc2.fillStyle = "#000";
        L09_2_VogelhausClasses.cc2.fill(pupil);
        L09_2_VogelhausClasses.cc2.translate(-r3, 0);
        eye.arc(0, 0, r3 / 6, 0, 2 * Math.PI);
        L09_2_VogelhausClasses.cc2.strokeStyle = "#000";
        L09_2_VogelhausClasses.cc2.stroke(eye);
        pupil.arc(0, 0, r3 / 15, 0, 2 * Math.PI);
        L09_2_VogelhausClasses.cc2.fillStyle = "#000";
        L09_2_VogelhausClasses.cc2.fill(pupil);
        L09_2_VogelhausClasses.cc2.restore();
        L09_2_VogelhausClasses.cc2.setTransform(head);
        L09_2_VogelhausClasses.cc2.translate(0, -(r3 * 0.8));
        let cWidth = r3 * 1.2;
        let cHeight = r3 * 1.1;
        cylinder.moveTo(-(cWidth / 2), 0);
        cylinder.lineTo(-(cWidth / 2), -cHeight);
        cylinder.lineTo(cWidth / 2, -cHeight);
        cylinder.lineTo(cWidth / 2, 0);
        L09_2_VogelhausClasses.cc2.fillStyle = "#000";
        L09_2_VogelhausClasses.cc2.fill(cylinder);
        L09_2_VogelhausClasses.cc2.beginPath();
        L09_2_VogelhausClasses.cc2.moveTo(-r3, 0);
        L09_2_VogelhausClasses.cc2.lineTo(r3, 0);
        L09_2_VogelhausClasses.cc2.lineWidth = 10;
        L09_2_VogelhausClasses.cc2.strokeStyle = "#000";
        L09_2_VogelhausClasses.cc2.closePath();
        L09_2_VogelhausClasses.cc2.stroke();
        L09_2_VogelhausClasses.cc2.strokeStyle = "#FFF";
        L09_2_VogelhausClasses.cc2.setTransform(transform);
    }
    function drawAviary(_position, _nBirds) {
        console.log("Aviary");
        let transform = L09_2_VogelhausClasses.cc2.getTransform();
        L09_2_VogelhausClasses.cc2.translate(_position.x, _position.y);
        let colorFill = "#C46C11";
        let colorStroke = "#B34F00";
        let t1 = new L09_2_VogelhausClasses.Vector(-45, 30);
        let t2 = new L09_2_VogelhausClasses.Vector(0, -30);
        let t3 = new L09_2_VogelhausClasses.Vector(45, 30);
        L09_2_VogelhausClasses.cc2.beginPath();
        L09_2_VogelhausClasses.cc2.moveTo(0, 0);
        L09_2_VogelhausClasses.cc2.lineTo(0, -120);
        L09_2_VogelhausClasses.cc2.strokeStyle = colorFill;
        L09_2_VogelhausClasses.cc2.lineWidth = 8;
        L09_2_VogelhausClasses.cc2.closePath();
        L09_2_VogelhausClasses.cc2.stroke();
        L09_2_VogelhausClasses.cc2.translate(0, -150);
        L09_2_VogelhausClasses.cc2.beginPath();
        L09_2_VogelhausClasses.cc2.moveTo(t1.x, t1.y);
        L09_2_VogelhausClasses.cc2.lineTo(t1.x / 2, 0);
        L09_2_VogelhausClasses.cc2.lineTo(t3.x / 2, 0);
        L09_2_VogelhausClasses.cc2.lineTo(t3.x, t3.y);
        L09_2_VogelhausClasses.cc2.fillStyle = colorFill;
        L09_2_VogelhausClasses.cc2.strokeStyle = colorStroke;
        L09_2_VogelhausClasses.cc2.lineWidth = 8;
        L09_2_VogelhausClasses.cc2.closePath();
        L09_2_VogelhausClasses.cc2.stroke();
        L09_2_VogelhausClasses.cc2.fill();
        L09_2_VogelhausClasses.cc2.beginPath();
        L09_2_VogelhausClasses.cc2.moveTo(t1.x / 2, 0);
        L09_2_VogelhausClasses.cc2.lineTo(t2.x, t2.y);
        L09_2_VogelhausClasses.cc2.lineTo(t3.x / 2, 0);
        L09_2_VogelhausClasses.cc2.closePath();
        L09_2_VogelhausClasses.cc2.stroke();
        L09_2_VogelhausClasses.cc2.beginPath();
        L09_2_VogelhausClasses.cc2.moveTo(t3.x / 2, 0);
        L09_2_VogelhausClasses.cc2.lineTo(t3.x / 2 + 25, 0);
        L09_2_VogelhausClasses.cc2.lineWidth = 5;
        L09_2_VogelhausClasses.cc2.closePath();
        L09_2_VogelhausClasses.cc2.stroke();
        L09_2_VogelhausClasses.cc2.setTransform(transform);
    }
})(L09_2_VogelhausClasses || (L09_2_VogelhausClasses = {}));
//# sourceMappingURL=Background.js.map