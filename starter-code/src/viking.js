// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;

    }

    attack() {
        return this.strength;
    }

    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
    }
}

// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        // allows us to skip retyping the binding of what we already declared in the super class
        //also gives us all the attributes AND METHODS of super class
        super(health, strength);
        //the new value we are accepting
        this.name = name;
    }

    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
        if (this.health > 0) {
            return this.name + " has received " + theDamage + " points of damage"
        }
        else {
            return this.name + " has died in act of combat";
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(theDamage) {
        this.health = this.health - theDamage;

        if (this.health > 0) {
            return "A Saxon has received " + theDamage + " points of damage"
        }
        else {
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {

        //choose get random value to use as index 
        let randomS = Math.floor(Math.random() * this.saxonArmy.length);
        let randomV = Math.floor(Math.random() * this.vikingArmy.length);

        // get random warrior from the armies at that index
        let randomViking = this.vikingArmy[randomV];
        let randomSaxon = this.saxonArmy[randomS];

        let result = randomSaxon.receiveDamage(randomViking.attack())

        if (result === "A Saxon has died in combat") {

            this.saxonArmy.splice(randomS, 1);

        }

        return result;
    }

    saxonAttack() {

        // choose get random value to use as index 
        let randomS = Math.floor(Math.random() * this.saxonArmy.length);
        let randomV = Math.floor(Math.random() * this.vikingArmy.length);

        // get random warrior from the armies at that index
        let randomViking = this.vikingArmy[randomV];
        let randomSaxon = this.saxonArmy[randomS];

        // result equal to one of the return values of recievedamage method (look above)
        let result = randomViking.receiveDamage(randomSaxon.attack())

        // if result equals the outcome of if where the viking died
        if (result === randomViking.name + " has died in act of combat") {

            //remove that viking from the array
            this.vikingArmy.splice(randomViking, 1);

        }

        // return result 
        return result;
    }

    showStatus() {

        // array or array.length are falsy
        // ⇒ do not attempt to process array
        if (!this.saxonArmy || !this.saxonArmy.length) {
            return "Vikings have won the war of the century!";
        }
        if (!this.vikingArmy || !this.vikingArmy.length) {
            return "Saxons have fought for their lives and survive another day...";
        }
        if( this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1)
        {
            return "Vikings and Saxons are still in the thick of battle.";
        }
        

    }

}
