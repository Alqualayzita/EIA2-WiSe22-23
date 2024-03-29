namespace L11_VogelhausAdvanced {

    export class Snowflake extends Moveable {
        size: Vector;
        radiusParticle: number;
        xy: Vector;

        constructor(_position: Vector, _size: Vector) {

            super(_position);
            this.size = _size;
            this.radiusParticle = 10;
            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 100, "y");
        }

        letItSnow(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.y > 250)
                this.position.y -= 250;
        }

        draw(): void {
            let radiusParticle: number = 40;

            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = cc2.createRadialGradient(0, 0, 0, 0, 0, this.radiusParticle);
            let start: DOMMatrix = cc2.getTransform();
            cc2.translate(posSnowflakes.x, posSnowflakes.y);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            cc2.save();
            cc2.translate(this.position.x, this.position.y);

            cc2.fillStyle = gradient;

            if (this.xy == undefined) {
                let x: number = (Math.random() - 0.5) * this.size.x;
                let y: number = - (Math.random() * this.size.y);
                this.xy = new Vector(x, y);
                cc2.save();
                cc2.translate(x, y);
                cc2.fill(particle);
                cc2.restore();
            }

            else {
                cc2.save();
                cc2.translate(this.xy.x, this.xy.y);
                cc2.fill(particle);
                cc2.restore();
            }
            cc2.restore();

            cc2.setTransform(start);
        }
    }
}