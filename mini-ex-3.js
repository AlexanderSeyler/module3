class Tree{
    constructor(hasLeaves, hasShade, fruit, largeFruit, name){
        this.hasLeaves = hasLeaves;
        this.plant = name;
        this.hasShade = hasShade;
        this.fruit = fruit;
        this.danger = largeFruit;
    }
    plantName(){
        if(this.plant.charAt()=="a"||this.plant.charAt()=="e"||this.plant.charAt()=="i"||this.plant.charAt()=="o"||this.plant.charAt()=="u"){
            return 'an ' + this.plant;
        }
        else{
            return 'a ' + this.plant;
        }
    }
    isAlive(){
        if(this.hasLeaves == true){
            return 'alive';
        }
        else{
            return 'dead';
        }
    }
    isNice(){
        if((this.hasShade && this.hasLeaves) && (this.fruit == 0 || !this.danger)){
            return 'comfortable';
        }
        else{
            return 'terrible';
        }
    }
    isFlowering(){
        if(this.fruit > 0){
            return 'has';
        }
        else{
            return 'does not have';
        }
    }
    describe(){
        console.log(`This is ${this.plantName()} that is ${this.isAlive()}, it ${this.isFlowering()} fruits. It is a ${this.isNice()} spot to rest under.` );
    }
}

let sappling = new Tree(true,false,0,false,'sappling');
let oakTree = new Tree(true,true,5,false,'oak tree');
let coconutTree = new Tree(true,true,0,true,'coconut tree');
let durianFruitTree = new Tree(true,true,10,true,'durian tree');
let witheringTree = new Tree(false,true,0,false,'withering tree');

sappling.describe();
oakTree.describe();
witheringTree.describe();
coconutTree.describe();
durianFruitTree.describe();