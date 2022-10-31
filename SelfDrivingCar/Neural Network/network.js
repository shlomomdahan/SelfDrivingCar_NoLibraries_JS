class Level1 {
    constructor(inputCount, outputCount) {
        this.inputs = new Array(inputCount);
        this.output = new Array(outputCount);
        this.biases = new Array(outputCount);

        this.weights = [];
        for (let i = 0; i < inputCount; i++) {
            this.weights[i] = new Array(outputCount);
        }

        Level1.#randomize(this);
    }


    static #randomize(level1) {

    }
}