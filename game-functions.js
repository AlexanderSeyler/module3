class Weapon{
    constructor(name,type,damage,crit){
        this.itemWeapon = name;
        this.itemType = type;
        this.itemDamage = damage;
        this.itemCrit = crit;
    }
}
class Armor{
    constructor(name,type,defense){
        this.itemArmor = name;
        this.itemType = type;
        this.itemDefense = defense;
    }
}

class Character{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.defense= 5;
        this.strength = 10;
        this.critChance = 1.1;
        this.items = [];
        this.equippedArmor = new Equipment(this.items);
        this.equippedWeapon = new Equipment(this.items);
    }
    attackedPlayer1(){
        if(Player2.equippedWeapon.items[0].itemType == 1){
            if(Player1.equippedArmor.items[1].itemType == 1){
                this.health = (this.health + Player1.equippedArmor.items[1].itemDefense - this.strength - Player2.equippedWeapon.items[0].itemDamage);
            }
            else{
                this.health = (this.health - this.strength - this.equippedWeapon.items[0].itemDamage);
            }
        }
        else{
            if(Player1.equippedArmor.items[1].itemType == 1){
                this.health = (this.health + Player1.equippedArmor.items[1].itemDefense - this.strength);
            }
            else{
                this.health = (this.health - this.strength);
            }
        }
    }
    attackedPlayer2(){
        if(Player1.equippedWeapon.items[0].itemType == 1){
            if(Player2.equippedArmor.items[1].itemType == 1){
                this.health = (this.health + Player2.equippedArmor.items[1].itemDefense - this.strength - Player1.equippedWeapon.items[0].itemDamage);
            }
            else{
                this.health = (this.health - this.strength - this.equippedWeapon.items[0].itemDamage);
            }
        }
        else{
            if(Player2.equippedArmor.items[1].itemType == 1){
                this.health = (this.health + Player2.equippedArmor.items[1].itemDefense - this.strength);
            }
            else{
                this.health = (this.health - this.strength);
            }
        }
    }
}


class Equipment{
    constructor(items){
        this.items= items;
    }

    add(equip){
        this.items.push(equip);
    }
    remove(unequip){
        this.items.push(unequip);
    }
}

let Player1 = new Character('Player1');
let Player2 = new Character('Player2');
let weapon = new Weapon('Short Sword',1,5,1.2);
let armor = new Armor('Plate Chest Piece',1,10);
let noarmor= new Armor('Nothing',1,0);
Player1.equippedWeapon.add(weapon);
Player1.equippedArmor.add(armor);
Player2.equippedWeapon.add(weapon);
Player2.equippedArmor.remove(noarmor);


console.log(Player2);
// console.log(Player1.equippedWeapon.items[0].itemDamage);
// console.log(Player1.equippedArmor.items[1].itemDefense);
// console.log(Player2.equippedArmor.items[1].itemDefense);
console.log('player1 health ' + Player1.health);
console.log('player2 health ' + Player2.health);
Player1.attackedPlayer2();
Player2.attackedPlayer1();
Player1.attackedPlayer2();
console.log('player2 health ' + Player1.health);
console.log('player1 health ' + Player2.health);
