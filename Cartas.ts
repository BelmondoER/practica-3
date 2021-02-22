class Carta {
    private estado: boolean = false;
    private valor: number = 0;
    private posicion: number = 0;

    constructor(valor: number) {
        this.valor = 1*(2**(valor-1));
    }
    getValor(): number {return this.valor};
    setEstado(): boolean{return this.estado = !(this.estado)};
    mostrarValor(){
        this.posicion++
        let texto:string = "";
        if (this.posicion %  this.valor===0){
            this.setEstado();
        }
        this.estado== true ? texto += `     1    `: texto += `     0    `;
        return texto;
    }
    
}

function inicializador (cantidad:number){

    const cartas = [];
    let i = cantidad-1;
    let valores:string= " ";
    console.log();
    while (i >=0) {
        const carta = new Carta (i+1);
        cartas.unshift(carta);           
        valores += ` I--${carta.getValor()}--I `;
        i--;
    };
    valores += ` Las cartas sobre la mesa son ${cantidad}`;
    console.log(valores);
    console.log();
        
    return cartas;

}

function secuenciador(cartas:Array<Carta>,hastaNumero:number){
    for(let j=1;j<hastaNumero+1;j++){
        let texto:string="";
        for (let i=cartas.length; i>0; i--){
           texto += cartas[i-1].mostrarValor();
        }  
        texto += ` El resultado en decimal es ${j}`;
        console.log(texto);
        console.log();
    }
}




const cartasEnMesa = inicializador(6); // Aqui ponemos la cantidad de cartas en la mesa
secuenciador(cartasEnMesa,50);// Hasta que numero se desea representar

