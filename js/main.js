//contructor de objetos

function productos(nombre,precio,categoria){
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
}

//productos

const globosCristal = new productos("globos Cristal",580,"globos");
const velas = new productos("vela estrella",320,"velas");
const nieveLoca = new productos("nieve loca", 1500, "carioca");
const globosPerlados = new productos("globo perlado",1400,"globos");
const setGlobos = new productos("set de globos",1100,"globos");
const banioReposteroAguila = new productos("baño repostero",300,"reposteria comestible");
const disfrazPolicia = new productos("disfraz de polica",6000,"disfraces");
const adornoDePlimPlim = new productos("adorno de plim plim",500,"adornos");
const mangaDeReposteria = new productos("manga de reposteria",1600,"reposteria");

//array con los productos
const listaDeProductos=[globosCristal,velas,nieveLoca,globosPerlados,setGlobos,banioReposteroAguila,disfrazPolicia,adornoDePlimPlim,mangaDeReposteria];

//buscador

var hacerUnaBusqueda = prompt("Quiere utilizar nuestro buscador? si o no "); 

while(hacerUnaBusqueda == "si"){

var tipoDeBusqueda = prompt("desea buscar por nombre ,categoria o precio");

if(tipoDeBusqueda == "nombre"){
    var busqueda = prompt("ingrese el nombre del producto que desea buscar");

const buscador = listaDeProductos.filter((productos) => productos.nombre.includes(busqueda));

console.log(buscador);

}else if(tipoDeBusqueda == "categoria"){

    var categorias = prompt("cual es la categoria del producto?. globos,velas,disfraces,reposteria,reposteria comestible,adornos,carioca");

    const buscadorPorCategoria = listaDeProductos.filter((productos) => productos.categoria.includes(categorias));

    console.log(buscadorPorCategoria);
    
}else{
    var tipoDePrecio = prompt("sabe el presio exacto o aproximado?");
    if(tipoDePrecio == "exacto"){
        var precio = prompt("cual es el precio del producto?");

        const buscadorPorPrecio = listaDeProductos.filter((productos)=> productos.precio == precio);

        console.log(buscadorPorPrecio);
    }else{
        var rangoDePrecioMayor = prompt("ingrese mayor a cuanto es el precio");
        var rangoDePrecioMenor = prompt ("ingrese menor a cuanto es el precio");
        
        const buscadorPorRangoDePrecio = listaDeProductos.filter((productos)=> productos.precio < rangoDePrecioMenor && productos.precio > rangoDePrecioMayor);

        console.log(buscadorPorRangoDePrecio);
    }
    
}

    hacerUnaBusqueda = prompt("queire seguir usando nuestro buscardor? si o no");
}









