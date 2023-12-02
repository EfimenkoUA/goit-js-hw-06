console.log('TASK 3');

class StringBuilder {
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.value;
    }

    padEnd(str) {
        this.value = this.value.split(' ');
        this.value.push(str);
        this.value = this.value.join('');
        return this.value;
    }

    padStart(str) {
        this.value = this.value.split(' ');
        this.value.unshift(str);
        this.value = this.value.join('');
        return this.value;
    }

    padBoth(str) {
        this.value = this.value.split(' ');
        this.value.unshift(str);
        this.value.push(str);
        this.value = this.value.join('');
        return this.value;
    }

    get value() {
        return this.#value;
    }

    set value(newValue) {
        this.#value = newValue;
    }

}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="