"use strict";
/*
Aufgabe: L11 Vogelhaus Advanced
Name: Alina Stumpf
Matrikel: 271137
Datum: 21.01.2023
Quellen:
*/
var L11_VogelhausAdvanced;
(function (L11_VogelhausAdvanced) {
    window.addEventListener("load", handleLoad);
    L11_VogelhausAdvanced.directions = ["x", "-x"];
    L11_VogelhausAdvanced.golden = 0.62;
    L11_VogelhausAdvanced.horizon = L11_VogelhausAdvanced.cc2.canvas.height * L11_VogelhausAdvanced.golden;
    L11_VogelhausAdvanced.posSnowflakes = new L11_VogelhausAdvanced.Vector(400, 175);
    let moveables = [];
    function handleLoad(_event) {
        L11_VogelhausAdvanced.drawStatic();
        L11_VogelhausAdvanced.imgData = L11_VogelhausAdvanced.cc2.getImageData(0, 0, L11_VogelhausAdvanced.cc2.canvas.width, L11_VogelhausAdvanced.cc2.canvas.height);
        drawSnowflakes(50, L11_VogelhausAdvanced.posSnowflakes);
        drawBirds(10);
        window.setInterval(update, 20);
        L11_VogelhausAdvanced.canvas.addEventListener("mouseup", clickCanvas);
    }
    function clickCanvas(_event) {
        let hotspot = new L11_VogelhausAdvanced.Vector(_event.clientX - L11_VogelhausAdvanced.cc2.canvas.offsetLeft, _event.clientY - L11_VogelhausAdvanced.cc2.canvas.offsetTop);
        let birdHit = getBirdHit(hotspot);
        if (birdHit)
            killBird(birdHit);
        else {
            createBird(hotspot);
        }
    }
    function createBird(_hotspot) {
        let randomColor = Math.floor(Math.random() * L11_VogelhausAdvanced.color.length);
        let randomBeakColor = Math.floor(Math.random() * L11_VogelhausAdvanced.beakColor.length);
        let bird = new L11_VogelhausAdvanced.SitBird(_hotspot, L11_VogelhausAdvanced.color[randomColor], L11_VogelhausAdvanced.beakColor[randomBeakColor]);
        moveables.push(bird);
    }
    function getBirdHit(_hotspot) {
        for (let moveable of moveables) {
            if (moveable instanceof L11_VogelhausAdvanced.SitBird && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function killBird(_bird) {
        _bird.expendable = true;
    }
    function drawBirds(_nBirds) {
        for (let drawn = 0; drawn < _nBirds; drawn++) {
            L11_VogelhausAdvanced.cc2.save();
            let randomColor = Math.floor(Math.random() * L11_VogelhausAdvanced.color.length);
            let randomBeakColor = Math.floor(Math.random() * L11_VogelhausAdvanced.beakColor.length);
            let maxWidth = 650;
            let minWidth = 100;
            let minHeight = 100;
            let maxHeight = 500;
            let x = randomBetween(minWidth, maxWidth);
            let y = randomBetween(minHeight, maxHeight);
            let birdPos = new L11_VogelhausAdvanced.Vector(x, y);
            let sittingBird = new L11_VogelhausAdvanced.SitBird(birdPos, L11_VogelhausAdvanced.color[randomColor], L11_VogelhausAdvanced.beakColor[randomBeakColor]);
            moveables.push(sittingBird);
            L11_VogelhausAdvanced.cc2.save();
            sittingBird.draw();
            L11_VogelhausAdvanced.cc2.restore();
        }
    }
    function update() {
        console.log("Update");
        L11_VogelhausAdvanced.cc2.putImageData(L11_VogelhausAdvanced.imgData, 0, 0);
        updateMoveables();
        deleteExpandables();
    }
    function updateMoveables() {
        let transform = L11_VogelhausAdvanced.cc2.getTransform();
        for (let moveable of moveables) {
            if (moveable instanceof L11_VogelhausAdvanced.Snowflake) {
                moveable.letItSnow(1 / 100);
                moveable.draw();
                L11_VogelhausAdvanced.cc2.setTransform(transform);
            }
            if (moveable instanceof L11_VogelhausAdvanced.SitBird) {
                moveable.checkState();
                let check = moveable.checkUpdate();
                if (moveable.isFlying == true) {
                    moveable.checkDistance();
                    moveable.fly(1 / 100);
                    moveable.draw();
                    L11_VogelhausAdvanced.cc2.setTransform(transform);
                }
                else {
                    if (check == true) {
                        moveable.eat(1 / 100);
                        moveable.draw();
                        L11_VogelhausAdvanced.cc2.setTransform(transform);
                    }
                    if (check == false) {
                        moveable.draw();
                        L11_VogelhausAdvanced.cc2.setTransform(transform);
                    }
                }
                moveable.checkTargetDistance();
            }
        }
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }
    function drawSnowflakes(_nFlakes, _position) {
        let transform = L11_VogelhausAdvanced.cc2.getTransform();
        for (let drawn = 0; drawn < _nFlakes; drawn++) {
            L11_VogelhausAdvanced.cc2.save();
            let pos = new L11_VogelhausAdvanced.Vector(randomBetween(0, 325), randomBetween(0, 250));
            let size = new L11_VogelhausAdvanced.Vector(10, 10);
            let snowflake = new L11_VogelhausAdvanced.Snowflake(pos, size);
            snowflake.draw();
            moveables.push(snowflake);
            L11_VogelhausAdvanced.cc2.restore();
        }
        L11_VogelhausAdvanced.cc2.setTransform(transform);
    }
    function randomBetween(_min, _max) {
        let returnNumber = Math.floor(Math.random() * (_max - _min)) + _min;
        return returnNumber;
    }
    L11_VogelhausAdvanced.randomBetween = randomBetween;
})(L11_VogelhausAdvanced || (L11_VogelhausAdvanced = {}));
//# sourceMappingURL=Vogelhaus.js.map