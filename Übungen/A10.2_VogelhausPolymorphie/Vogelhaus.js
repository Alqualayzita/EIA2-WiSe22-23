"use strict";
/*
Aufgabe: A10.2 VogelhausPolymorphie
Name: Alina Stumpf
Matrikel: 271137
Datum: 12.01.2023
Quellen: -
*/
var L10_2_VogelhausPolymorphie;
(function (L10_2_VogelhausPolymorphie) {
    window.addEventListener("load", handleLoad);
    L10_2_VogelhausPolymorphie.golden = 0.62;
    L10_2_VogelhausPolymorphie.posSnowflakes = new L10_2_VogelhausPolymorphie.Vector(400, 175);
    let moveables = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L10_2_VogelhausPolymorphie.cc2 = canvas.getContext("2d");
        L10_2_VogelhausPolymorphie.drawStatic();
        L10_2_VogelhausPolymorphie.imgData = L10_2_VogelhausPolymorphie.cc2.getImageData(0, 0, L10_2_VogelhausPolymorphie.cc2.canvas.width, L10_2_VogelhausPolymorphie.cc2.canvas.height);
        drawSnowflakes(50, L10_2_VogelhausPolymorphie.posSnowflakes);
        drawBirds(20);
        window.setInterval(update, 20);
    }
    function drawBirds(_nBirds) {
        let ratio = Math.random();
        let nSitting = Math.floor(_nBirds * ratio);
        let nFlying = _nBirds - nSitting;
        for (let drawn = 0; drawn < nSitting; drawn++) {
            L10_2_VogelhausPolymorphie.cc2.save();
            let randomColor = Math.floor(Math.random() * L10_2_VogelhausPolymorphie.color.length);
            let randomBeakColor = Math.floor(Math.random() * L10_2_VogelhausPolymorphie.beakColor.length);
            let maxWidth = 650;
            let minWidth = 100;
            let minHeight = 400;
            let maxHeight = 500;
            let x = randomBetween(minWidth, maxWidth);
            let y = randomBetween(minHeight, maxHeight);
            let birdPos = new L10_2_VogelhausPolymorphie.Vector(x, y);
            let sittingBird = new L10_2_VogelhausPolymorphie.SitBird(birdPos, L10_2_VogelhausPolymorphie.color[randomColor], L10_2_VogelhausPolymorphie.beakColor[randomBeakColor]);
            moveables.push(sittingBird);
            sittingBird.draw();
            L10_2_VogelhausPolymorphie.cc2.restore();
        }
        for (let drawn = 0; drawn < nFlying; drawn++) {
            L10_2_VogelhausPolymorphie.cc2.save();
            let maxWidth = 740;
            let minWidth = 10;
            let minHeight = 0;
            let maxHeight = 225;
            let x = randomBetween(minWidth, maxWidth);
            let y = randomBetween(minHeight, maxHeight);
            let birdPos = new L10_2_VogelhausPolymorphie.Vector(x, y);
            let flyingBird = new L10_2_VogelhausPolymorphie.BirdOnFly(birdPos);
            moveables.push(flyingBird);
            flyingBird.draw();
            L10_2_VogelhausPolymorphie.cc2.restore();
        }
    }
    function update() {
        console.log("Update");
        L10_2_VogelhausPolymorphie.cc2.putImageData(L10_2_VogelhausPolymorphie.imgData, 0, 0);
        updateMoveables();
    }
    function updateMoveables() {
        let transform = L10_2_VogelhausPolymorphie.cc2.getTransform();
        for (let moveable of moveables) {
            if (moveable instanceof L10_2_VogelhausPolymorphie.Snowflake) {
                moveable.letItSnow(1 / 100);
                moveable.draw();
            }
            if (moveable instanceof L10_2_VogelhausPolymorphie.BirdOnFly) {
                moveable.fly(1 / 50);
                moveable.draw();
            }
            if (moveable instanceof L10_2_VogelhausPolymorphie.SitBird) {
                let check = moveable.checkUpdate();
                if (check == true) {
                    moveable.eat(1 / 100);
                    moveable.draw();
                }
                if (check == false) {
                    moveable.draw();
                }
            }
        }
        L10_2_VogelhausPolymorphie.cc2.setTransform(transform);
    }
    function drawSnowflakes(_nFlakes, _position) {
        let transform = L10_2_VogelhausPolymorphie.cc2.getTransform();
        for (let drawn = 0; drawn < _nFlakes; drawn++) {
            L10_2_VogelhausPolymorphie.cc2.save();
            let pos = new L10_2_VogelhausPolymorphie.Vector(randomBetween(0, 325), randomBetween(0, 250));
            let size = new L10_2_VogelhausPolymorphie.Vector(10, 10);
            let snowflake = new L10_2_VogelhausPolymorphie.Snowflake(pos, size);
            snowflake.draw();
            moveables.push(snowflake);
            L10_2_VogelhausPolymorphie.cc2.restore();
        }
        L10_2_VogelhausPolymorphie.cc2.setTransform(transform);
    }
    function randomBetween(_min, _max) {
        let returnNumber = Math.floor(Math.random() * (_max - _min)) + _min;
        return returnNumber;
    }
    L10_2_VogelhausPolymorphie.randomBetween = randomBetween;
    L10_2_VogelhausPolymorphie.directions = ["x", "-x"];
})(L10_2_VogelhausPolymorphie || (L10_2_VogelhausPolymorphie = {}));
//# sourceMappingURL=Vogelhaus.js.map