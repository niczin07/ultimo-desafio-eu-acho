class typeHero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

 toString() {
    return `O herói ${this.name} tem ${this.age} e é do tipo ${this.type}`
    }
}

let heroAdventure = new typeHero("Nic", "16", "Mago")

console.log(heroAdventure.toString())

for (let golpes = 1; golpes <= 6; golpes++) {
    console.log (`O herói deu mais um golpe! é o golpe nº ${golpes}!`);
}

if (this.type = "Mago") {
    console.log("O mago atacou usando magia. Foram várias Bolas de Fogo!")
} else if (this.type = "Guerreiro") {
    console.log("O guerreiro atacou usando sua espada.")
} else if (this.type = "Monge") {
    console.log("O monge atacou usando artes marciais.")
} else if (this.type = "Ninja") {
    console.log("O ninja atacou usando suas shurikens. QUe precisão!")
}

