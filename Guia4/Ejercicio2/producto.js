class Producto {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.detalle = this.precio * this.cantidad
    }
}

export default Producto