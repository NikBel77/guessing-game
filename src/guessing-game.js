class GuessingGame {
    constructor() {
        this.maxNum = 0;
        this.minNum = 0;
    }

    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
    }

    guess() {
        return Math.ceil((this.maxNum - ((this.maxNum - this.minNum) / 2)));
    }

    lower() {
        this.maxNum = Math.ceil((this.maxNum - ((this.maxNum - this.minNum) / 2)));
        return Math.ceil((this.maxNum - ((this.maxNum - this.minNum) / 2)));
    }

    greater() {
        this.minNum = Math.ceil((this.maxNum - ((this.maxNum - this.minNum) / 2)));
        return Math.ceil((this.maxNum - ((this.maxNum - this.minNum) / 2)));
    }
}

module.exports = GuessingGame;
