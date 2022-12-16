"use strict";
/*
Aufgabe: A09.2 VogelhausClasses
Name: Alina Stumpf
Matrikel: 271137
Datum: 15.12.2022
Quellen: -
*/
var L09_2_VogelhausClasses;
(function (L09_2_VogelhausClasses) {
    window.addEventListener("load", handleLoad);
    L09_2_VogelhausClasses.golden = 0.62;
    let posSnowflakes = new L09_2_VogelhausClasses.Vector(400, 175);
    let snowflakes = [];
    let flyingBirds = [];
    let sittingBirds = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L09_2_VogelhausClasses.cc2 = canvas.getContext("2d");
        L09_2_VogelhausClasses.drawStatic();
        L09_2_VogelhausClasses.imgData = L09_2_VogelhausClasses.cc2.getImageData(0, 0, L09_2_VogelhausClasses.cc2.canvas.width, L09_2_VogelhausClasses.cc2.canvas.height);
        drawSnowflakes(50, posSnowflakes);
        drawBirds(20);
        window.setInterval(update, 20);
        window.setInterval(updateBird, 500);
    }
    function drawBirds(_nBirds) {
        let ratio = Math.random();
        let nSitting = Math.floor(_nBirds * ratio);
        let nFlying = _nBirds - nSitting;
        for (let drawn = 0; drawn < nSitting; drawn++) {
            L09_2_VogelhausClasses.cc2.save();
            let randomColor = Math.floor(Math.random() * L09_2_VogelhausClasses.color.length);
            let randomBeakColor = Math.floor(Math.random() * L09_2_VogelhausClasses.beakColor.length);
            let maxWidth = 650;
            let minWidth = 100;
            let minHeight = 400;
            let maxHeight = 500;
            let x = randomBetween(minWidth, maxWidth);
            let y = randomBetween(minHeight, maxHeight);
            let birdPos = new L09_2_VogelhausClasses.Vector(x, y);
            let sittingBird = new L09_2_VogelhausClasses.SitBird(birdPos, L09_2_VogelhausClasses.color[randomColor], L09_2_VogelhausClasses.beakColor[randomBeakColor]);
            sittingBirds.push(sittingBird);
            sittingBird.draw();
            L09_2_VogelhausClasses.cc2.restore();
        }
        for (let drawn = 0; drawn < nFlying; drawn++) {
            L09_2_VogelhausClasses.cc2.save();
            let maxWidth = 740;
            let minWidth = 10;
            let minHeight = 0;
            let maxHeight = 225;
            let x = randomBetween(minWidth, maxWidth);
            let y = randomBetween(minHeight, maxHeight);
            let birdPos = new L09_2_VogelhausClasses.Vector(x, y);
            let flyingBird = new L09_2_VogelhausClasses.BirdOnFly(birdPos);
            flyingBirds.push(flyingBird);
            flyingBird.draw();
            L09_2_VogelhausClasses.cc2.restore();
        }
    }
    function update() {
        L09_2_VogelhausClasses.cc2.putImageData(L09_2_VogelhausClasses.imgData, 0, 0);
        updateSnowflakes(posSnowflakes);
        updateBirdsOnFly();
        updateSittingBird(false);
    }
    function updateBird() {
        updateSittingBird(true);
    }
    function updateSittingBird(_update) {
        if (_update == false) {
            for (let bird of sittingBirds) {
                bird.draw();
            }
        }
        if (_update == true) {
            for (let bird of sittingBirds) {
                bird.eat(1 / 100);
                bird.draw();
            }
        }
    }
    function updateBirdsOnFly() {
        for (let bird of flyingBirds) {
            L09_2_VogelhausClasses.cc2.save();
            bird.fly(1 / 50);
            bird.draw();
            L09_2_VogelhausClasses.cc2.restore();
        }
    }
    function updateSnowflakes(_position) {
        let transform = L09_2_VogelhausClasses.cc2.getTransform();
        L09_2_VogelhausClasses.cc2.translate(_position.x, _position.y);
        for (let snow of snowflakes) {
            snow.letItSnow(1 / 100);
            snow.draw();
        }
        L09_2_VogelhausClasses.cc2.setTransform(transform);
    }
    function drawSnowflakes(_nFlakes, _position) {
        let transform = L09_2_VogelhausClasses.cc2.getTransform();
        L09_2_VogelhausClasses.cc2.translate(_position.x, _position.y);
        for (let drawn = 0; drawn < _nFlakes; drawn++) {
            L09_2_VogelhausClasses.cc2.save();
            let pos = new L09_2_VogelhausClasses.Vector(randomBetween(0, 325), randomBetween(0, 250));
            let size = new L09_2_VogelhausClasses.Vector(10, 10);
            let snowflake = new L09_2_VogelhausClasses.Snowflake(pos, size);
            snowflake.draw();
            snowflakes.push(snowflake);
            L09_2_VogelhausClasses.cc2.restore();
        }
        L09_2_VogelhausClasses.cc2.setTransform(transform);
    }
    function randomBetween(_min, _max) {
        let returnNumber = Math.floor(Math.random() * (_max - _min)) + _min;
        return returnNumber;
    }
    L09_2_VogelhausClasses.randomBetween = randomBetween;
    L09_2_VogelhausClasses.directions = ["x", "-x"];
})(L09_2_VogelhausClasses || (L09_2_VogelhausClasses = {}));
//# sourceMappingURL=Vogelhaus.js.map