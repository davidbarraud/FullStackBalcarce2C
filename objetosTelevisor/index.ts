class Televisor {
    private brand: string
    private volume: number = 0
    private channel: number = 1
    private isOn: boolean = false
   
    public constructor(brand: string) {
        this.brand = brand
    }
    public switchPower(): void {
        this.isOn = !this.isOn
    }
    private getTime(): string {
        const fullDate = new Date()
        return `${fullDate.getHours()}:${fullDate.getMinutes()}`


    }
    public info(): void {
        if (this.isOn === false) {
            return
        } else {
            console.log(`
                Brand: ${this.brand} 
                Channel: ${this.channel}
                Volume: ${this.volume}
                Hour: ${this.getTime()}
                -----------\n`)
        }
    }
    public channelUp(): void {
        if (this.channel === 99) {
            this.channel = 1
        } else {
            this.channel += 1
        }
    }
    public channelDown(): void {
        if (this.channel === 1) {
            this.channel = 99
        } else {
            this.channel -= 1
        }
    }
    public selectChannel(channelNumber: number) {
        if (channelNumber > 0 && channelNumber <= 99) {
            this.channel = channelNumber
        }
    }

    public volumenUp(): void {
       if (this.volume === 99 ) {
        return        
       } else {
        this.volume +=1;
       }
    }

    public volumenDown(): void {
        if (this.volume ===0 ) {
          return       
        } else {
         this.volume -=1;
        }
     }



}

const tv1 = new Televisor("Samsung");
tv1.switchPower();
tv1.info();
tv1.channelUp();
tv1.channelUp();
tv1.volumenUp();
tv1.volumenUp();
tv1.volumenDown();

