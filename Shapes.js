class Shape {
    area;
    color;
    point;
    shape;
    constructor(area, color, point, shape) {
        this.area = area;
        this.color = color;
        this.point = point;
        this.shape = shape;
    }
    get area() {
        return this.area;
    }
    get color() {
        return this.color;
    }
    get point() {
        return this.point;
    }
    get shape(){
        return this.shape;
    }
    move(point) {
        this.point = point;
    }
    print(){
        console.log(JSON.stringify(this));
    }
}

class Point{
    xt;
    yt;
    constructor(xt, yt) {
        this.xt = xt;
        this.yt = yt;
    }
    get xt() {
        return this.xt();
    }
    get yt() {
        return this.yt();
    }
    toString(){
        return `(${this.xt}, ${this.yt})`;
    }
}

class Circle extends Shape{
    radius;
    constructor(area, color, point,radius) {
        super(area, color, point, "circle");
        this.radius = radius;
    }
    get radius() {
        return this.radius();
    }
}

class Square extends Shape{
    rib;
    constructor(area, color, point, rib) {
        super(area, color, point, "square");
        this.rib = rib;
    }
    get radius() {
        return this.rib();
    }
}
class Rectangle extends Shape{
    length;
    width;
    constructor(area, color, point, length, width) {
        super(area, color, point, "rectangle");
        this.length = length;
        this.width = width;
    }
    get length() {
        return this.length();
    }
    get width() {
        return this.width();
    }
}
