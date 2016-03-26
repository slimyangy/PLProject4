// Fred Yang

"use strict";

var list = function() {
    var list = function () {
        function Node(data) {
            this.data = data;
            this.next = null;
        }

        var l = {
            length: 0,
            currentNode: null,
            head: new Node(null),
            add: function(e) {
                if (l.currentNode === null) { // This is true the first time
                    l.head.data = e;
                    l.currentNode = new Node(null);
                    l.head.next = l.currentNode;
                    l.length++;
                }
                else {
                    l.currentNode.data = e;
                    var node = new Node(null);
                    l.currentNode.next = node;
                    l.currentNode = node;
                    l.length++;
                }
            },
        };

        var F = function () {
        };
        var f = new F();

        // public data
        f.run = function (e) {
            return l[e];
        };
        f.first = f.car = function () {
            return l.head.data
        };
        f.rest = f.cdr = function () {
            if(l.length > 0) {
                l.head = l.head.next;
                l.length--;
            }
            return this;
        }
        f.concat = f.cons = function(e){
            if (typeof e === 'string' || e instanceof String) {l.add(e);}
            else {
                var n = e.run('head');
                for(var i = 0; i < e.run('length'); i++) {
                    l.add(n.data);
                    n = n.next;
                }
            }
        }
        f.length = function(){return l.length}
        f.map = function(f) {
            if (f instanceof Function) {
                var n = l.head;
                for(var i = 0; i < l.length; i++) {
                    n.data = f(n.data);
                    n = n.next;
                }
            }
        }

        // the iterator method
        // name function and instantiate in a closure
        f.iterate = (function () {
            var initialNode = null;
            return function () {
                // if initial node is null make it the head
                if (initialNode == null) {
                    initialNode = l.head;
                }
                // if initial node is not go next
                else {
                    initialNode = iNode.next;
                }
                // return data
                return initialNode.data;
            }
        })();
        // finish the functions applications
        return f;
    }();
    return list;
};


var l0 = new list();
var l1 = new list();
l0.cons('a')
l0.cons('b')
l0.cons('c')
l1.cons(l1);

document.writeln("<BR>this is the original list (for comparison): " + l0.car());
while(l0.length() > 1) {
    document.writeln(", " + l0.cdr().car());
}

document.writeln("<BR>call the iterator method: " + l1.iterate());
document.writeln("<BR>call it a second time: " + l1.iterate());
document.writeln("<BR>call it a third time: " + l1.iterate());