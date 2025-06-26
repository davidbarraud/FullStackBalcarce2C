var Televisor = /** @class */ (function () {
    function Televisor(brand) {
        this.volume = 0;
        this.channel = 1;
        this.isOn = false;
        this.brand = brand;
    }
    Televisor.prototype.switchPower = function () {
        this.isOn = !this.isOn;
    };
    Televisor.prototype.getTime = function () {
        var fullDate = new Date();
        return "".concat(fullDate.getHours(), ":").concat(fullDate.getMinutes());
    };
    Televisor.prototype.info = function () {
        if (this.isOn === false) {
            return;
        }
        else {
            console.log("\n                Channel: ".concat(this.channel, "\n                Volume: ").concat(this.volume, "\n                Hour: ").concat(this.getTime(), "\n                -----------\n"));
        }
    };
    Televisor.prototype.channelUp = function () {
        if (this.channel === 99) {
            this.channel = 1;
        }
        else {
            this.channel += 1;
        }
    };
    Televisor.prototype.channelDown = function () {
        if (this.channel === 1) {
            this.channel = 99;
        }
        else {
            this.channel -= 1;
        }
    };
    Televisor.prototype.selectChannel = function (channelNumber) {
        if (channelNumber > 0 && channelNumber <= 99) {
            this.channel = channelNumber;
        }
    };
    return Televisor;
}());
