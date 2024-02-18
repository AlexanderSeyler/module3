class Character{
    constructor(name){
        this.name = name;
        this.inventory = [];
    }  

addItem(item){
    this.inventory.push(item);
}
removeLastItem(){
    this.inventory.pop();
}
useFirstItem(){
    this.inventory.shift();
}
quickAddItem(item){
    this.inventory.unshift(item);
}
displayInventory(){
    this.inventory.forEach(item => {
        console.log(`${item.ItemName} (${item.ItemType}): ${item.ItemEffect}`)
    });
}
filterConsumables(){
    let consumables  = this.inventory.filter(item => item.ItemType == 'Consumable')
    console.log('Your list of consumables');
    consumables.forEach(item => {
        console.log(`${item.ItemName} (${item.ItemType}): ${item.ItemEffect}`);
      });
}
sortInventory(){
    console.log('Sorting your inventory ... ');
    this.inventory.sort((firstItem, secondItem) => firstItem.ItemName.localeCompare(secondItem.ItemName))
    this.displayInventory();
}

fullItem(){
    this.inventory = this.inventory.splice(0,2);
    console.log('Your bag after removing items due to being full');
    this.displayInventory();
}
checkWeapons(){
    
    const bag1 = this.inventory.slice(0,2);
    const bag2 = this.inventory.slice(3,5);
    console.log('Your first bag contents' + bag1);
    console.log('Your second bag contents' + bag2);
}
}

class Item{
    constructor(name, type, effect){
        this.ItemName = name;
        this.ItemType = type;
        this.ItemEffect = effect;
    }
}

// Usage example
var bilbo = new Character('Bilbo');
var sword = new Item('Broad Sword','Weapon','+8');
var dagger = new Item('Small Dagger','Weapon','+5dmg');
var healingPotion = new Item('Healing Potion','Consumable','10hp');
var smallHealingPotion = new Item('Small Healing Potion','Consumable','5hp');
var regenerationPotion = new Item('Regeneration Potion','Consumable','15hp');
bilbo.addItem(sword);
bilbo.addItem(dagger);
bilbo.removeLastItem();
bilbo.addItem(dagger);
bilbo.useFirstItem();
bilbo.quickAddItem(healingPotion);
bilbo.displayInventory();
bilbo.quickAddItem(smallHealingPotion);
bilbo.quickAddItem(regenerationPotion);
bilbo.filterConsumables();
bilbo.sortInventory();
bilbo.fullItem();
bilbo.addItem(sword);
bilbo.addItem(dagger);
bilbo.checkWeapons();