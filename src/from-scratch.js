class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4;
  }
}


class Rectangle extends Quadrilateral {
  constructor(side1, side2) {
    super(side1, side2, side1, side2);
  }

  getArea() {
    return this.side1 * this.side2;
  }
}

class Square extends Rectangle{
  constructor(side){
    super(side, side);
    this.side = side;
  }
  /** FEEDBACK: To pass the only test that is missing, remove these two methods from here since we can use the ones from the quadrilateral and Rectangle instead! */
  getPerimeter(){
    return 4 * this.side;
  }

  getArea(){
    return this.side * this.side;
  }

  getDiagonal(){
    return Math.sqrt(2) * this.side;
  }

}

/* Be creative with this one! */
class Person {

}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
