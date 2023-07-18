function Punto(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
    
    this.suma = function(punto) {
      return new Punto(this.p1 + punto.p1, this.p2 + punto.p2);
    }
  
    this.poString = function() {
      return `(${this.p1}, ${this.p2})`;
    }
  }
  
  let p1 = new Punto(1, 2);
  let p2 = new Punto(2, 3);
  console.log(p1.suma(p2).poString());