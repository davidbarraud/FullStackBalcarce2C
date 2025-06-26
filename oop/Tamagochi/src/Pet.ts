export abstract class Pet{
    protected name: string;
    protected hunger: number;
    protected energy: number;
    protected happiness: number;
    constructor (name:string){
        this.name= name;
        this.hunger = 50;
        this.energy = 50;
        this.happiness = 50;
    }

    public feed():void{
        this.hunger = Math.max(0, this.hunger -10);
    }

    public play(): void{
        this.happiness = Math.min(100, this.happiness + 10);
        this.energy -= 5;
    }
    public rest(): void{
        this.energy = Math.min(100, this.energy + 15);
    }

    public updateStats():void{
        this.hunger +=5;
        this.happiness -=3;
        this.energy -=2;
    }
    public getStats():string{
        return this.hunger;
    }
    abstract displayPet():string;


}