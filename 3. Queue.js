/* Queue */

function Queue() {
	var collection = [];

	this.print = function() {
		console.log(collection);
	}

	// Insert an item into the back of the queue 

	this.enqueue = function(element) {
		collection.push(element);
	}

	// Removing the front item

	this.dequeue = function() {
		return collection.shift();
	}

	// Return first element of queue

	this.front = function() {
		return collection[0];
	}

	// Return size of queue

	this.size = function() {
		return collection.length;
	}

	this.isEmpty = function() {
		return (collection.length === 0);
	}
}

var queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.size());
console.log(queue.isEmpty());
queue.print();

/* Priority Queue */

function priorityQueue() {
	var collection = [];

	this.print = function() {
		console.log(collection);
	}

	// Insert an item into the back of the queue 

	this.enqueue = function(element){
        if (this.isEmpty()){ 
            collection.push(element);
        } else {
            var added = false;
            for (var i = 0; i < collection.length; i++) {
                 if (element[1] < collection[i][1]) { //checking priorities
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }

            if (!added) {
                collection.push(element);
            }
        }
    }

	// Removing the front item

	this.dequeue = function() {
		var value = collection.shift();
		return value;
	}

	this.isEmpty = function() {
		return (collection.length === 0);
	}

	// Return first element of queue

	this.front = function() {
		return collection[0];
	}

	// Return size of queue

	this.size = function() {
		return collection.length;
	}
}

var pq = new priorityQueue();
pq.enqueue(['A', 1]);
pq.enqueue(['B', 3]);
pq.enqueue(['C', 2]);
console.log(pq.dequeue());
pq.print();
console.log(pq.front());
console.log(pq.size());
