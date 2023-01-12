"use strict";
var L10_2_VogelhausPolymorphie;
(function (L10_2_VogelhausPolymorphie) {
    class Moveable {
        position;
        velocity;
        update;
        constructor(_position, _velocity) {
            this.position = _position.copy();
            if (_velocity)
                this.velocity = _velocity.copy();
            else
                this.velocity = new L10_2_VogelhausPolymorphie.Vector(0, 0);
            this.update = true;
        }
    }
    L10_2_VogelhausPolymorphie.Moveable = Moveable;
})(L10_2_VogelhausPolymorphie || (L10_2_VogelhausPolymorphie = {}));
//# sourceMappingURL=Moveable.js.map