//General shape constructor
function shapeConstructor(name, sides){
    this.name = name;
    this.sides = sides;
}

//General rectangle constructor 
function rectangleConstructor(height, width, name, sides){
    this.height = height;
    this.width = width;
    shapeConstructor.call(this, name, sides);
}

//designates rectangle prototype as a specific shape
Rectangle.prototype = Object.create(Shape.prototype);

//creates a prototype for the area of a rectangle
rectangleConstructor.prototype.area = function(){
    console.log(this.height*this.width);
}

//creates a prototype for the perimeter of a rectangle
rectangleConstructor.prototype.perimeter = function(){
    console.log(this.height*2 + this.width*2);
}

//General square constructor 
function squareConstructor(height, name, sides){
    rectangleConstructor.call(this, height, width, name, sides);
}

//designates square prototype as a specific rectangle
Square.prototype = object.create(Rectangle.prototype);