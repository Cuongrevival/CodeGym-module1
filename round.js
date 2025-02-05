class Round {
    constructor(radius) {
        this.radius = radius;
    }

    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius = radius;
    }
    getArea(){
        return this.radius * this.radius * Math.PI;
    }
    getPerimeter(){
        return this.radius * 2 * Math.PI;
    }
}
export default Round;