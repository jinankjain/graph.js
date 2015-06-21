// Implementation of Union by Rank Disjoint Set Data Structure

function disjointSet(){
    this.node = [];
}

// Creates disjoint Set of N elements
disjointSet.prototype.createSet = function(x){
    for (var i = 0; i < x; i++){
       this.makeSet(i); 
    }
};

// Helper Function to initialize parent and rank
disjointSet.prototype.makeSet = function(x) {
    var temp;
    temp.parent = x;
    temp.rank = 0;
    this.node.push(temp);
};

// Helper function to find parent of particular node
disjointSet.prototype.findParent = function(x) {
    if(this.node[x].parent != x){
        this.node[x].parent = findParent(this.node[x].parent)
    }
    return this.node[x].parent;
};

// Helper Function to take Union of Two Sets
disjointSet.prototype.union = function(x, y){
    var xSet = this.findParent(x);
    var ySet = this.findParent(y);

    // Attach smaller rank tree under root of high rank tree
    // (Union by Rank)

    if(this.node[xSet].rank < this.node[ySet].rank){
        this.node[xSet].parent = ySet;
    }
    else if(this.node[xSet].rank > this.node[xSet].rank){
        this.node[ySet].parent = xSet;
    }
    else{
        this.node[ySet].parent = xSet;
        this.node[xSet].rank++;
    }
};