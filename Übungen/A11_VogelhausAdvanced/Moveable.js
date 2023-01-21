"use strict";
var L11_VogelhausAdvanced;
(function (L11_VogelhausAdvanced) {
    class Moveable {
        position;
        velocity;
        update;
        expendable = false;
        constructor(_position, _velocity) {
            this.position = _position.copy();
            if (_velocity)
                this.velocity = _velocity.copy();
            else
                this.velocity = new L11_VogelhausAdvanced.Vector(0, 0);
            this.update = true;
        }
    }
    L11_VogelhausAdvanced.Moveable = Moveable;
})(L11_VogelhausAdvanced || (L11_VogelhausAdvanced = {}));
//# sourceMappingURL=Moveable.js.map