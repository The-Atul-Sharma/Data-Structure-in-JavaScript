/* Stack */

var Stack = function() {
	this.count = 0;
	this.storage = {};

	// Length of stack

	this.size = function() {
		return this.count;
	}

	// Add a value onto the end of the stack

	this.push = function(value) {
		this.storage[this.count] = value;
		this.count++;
	}

    // Removes and returns the value at the end of the stack

    this.pop = function() {
    	if (this.count === 0) {
    		return undefined;
    	}

    	this.count--;
    	var result = this.storage[this.count];
    	delete this.storage[this.count];
    	return result;
    }

	// Returns the value at the end of the stack

	this.peek = function() {
		return this.storage[this.count-1];
	}
}

var stack = new Stack();

stack.push('A');
stack.push('B');
stack.push('C');
stack.push('D');
console.log(stack.pop());
console.log(stack.peek());