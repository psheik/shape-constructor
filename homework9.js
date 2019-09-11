function shapeConstructor(name, sides){
    this.name = name;
    this.sides = sides;
}

function rectangleConstructor(height, width, name, sides){
    this.height = height;
    this.width = width;
    Shape.call(this, name, sides);
}

Rectangle.prototype = Object.create(Shape.prototype);

RectangleConstructor.prototype.area = function(){
    console.log(this.height*this.width);
}

RectangleConstructor.prototype.perimeter = function(){
    console.log(this.height*2 + this.width*2);
}

function Square(height, name, sides){
    rectangleConstructor.call(this, height, width, name, sides);
}

Square.prototype = object.create(Rectangle.prototype);