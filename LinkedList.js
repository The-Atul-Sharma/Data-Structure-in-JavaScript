/* Linked List */

function LinkedList() {
	var length = 0;
	var head = null;

	var Node = function(element) {
		this.element = element;
		this.next = null;
	}

	// Find size of LinkedList

	this.size = function() {
		return length;
	}

	// head of LinkedList

	this.head = function() {
		return head;
	}

	// Add a element in LinkedList

	this.add = function(element) {
		var node = new Node(element);
		if (head === null) {
			head = node;
		} else {
			var currentNode = head;

			while (currentNode.next) {
				currentNode = currentNode.next;
			}

			currentNode.next = node;
		}

		length++;
	}

	// Remove a element in LinkedList

	this.remove = function(element) {
		var currentNode = head;
		var previousNode;

		if (currentNode === head) {
			head = currentNode.next;
		} else {
			while (currentNode.next !== element) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			
			previousNode.next = currentNode.next;
		}

		length--;
	}

	// Find list is empty or not

	this.isEmpty = function() {
		return length === 0;
	}

	// Find index of a element

	this.indexOf = function(element) {
		var currentNode = head;
		var index = -1;

		while (currentNode) {
			index++;
			if (currentNode.element === element) {
				return index;
			}

			currentNode = currentNode.next;
		}

		return -1;
	}

	// Find element at any position

	this.elementAt = function(index) {
		var currentNode = head;
		var count = 0;

		while (count < index) {
			count++;
			currentNode = currentNode.next
			;
		}

		return currentNode.element;
	}

	// Add a element at any position

	this.addAt = function(index, element){
    	var node = new Node(element);
		var currentNode = head;
	    var previousNode;
	    var currentIndex = 0;

	    if(index > length) {
	        return false;
	    }

	    if(index === 0) {
	        node.next = currentNode;
	        head = node;
	    } else {
	        while (currentIndex < index) {
	            currentIndex++;
	            previousNode = currentNode;
	            currentNode = currentNode.next;
	        }

	        node.next = currentNode;
	        previousNode.next = node;
    	}

    	length++;
  	}

	// Remove a element at any position

	this.removeAt = function(index) {
	    var currentNode = head;
	    var previousNode;
	    var currentIndex = 0;
    	if (index < 0 || index >= length) {
        	return null
    	}
    	
    	if (index === 0) {
        	head = currentNode.next;
    	} else {
        	while (currentIndex < index) {
            	currentIndex ++;
            	previousNode = currentNode;
            	currentNode = currentNode.next;
        	}

        	previousNode.next = currentNode.next
    	}

    	length--;
    	return currentNode.element;
  	}
}

var list = new LinkedList();
list.add('A');
list.add('B');
list.add('C');
list.remove('A');
list.add('E');
console.log(list.size());
console.log(list.head());
console.log(list.isEmpty());
console.log(list.indexOf('B'));
console.log(list.addAt(2, 'C'));
console.log(list.removeAt(2));