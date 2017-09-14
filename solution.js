/**
 * Created by nikita on 7/3/17.
 */
'use strict';

function drawNestedSetsTree(data, node) {
    data.sort(function(a,b) {
        return a.left - b.left;
    });
    for(let i = 0 ,key = 1; i < data.length; key++, i++) {
        data[i].id = key;
        data[i].children = [];
    }
    var array = [];
    array.push(data[0]);
    var  children = {},
        root = [];

    for (let i = 0; i < data.length;  i++) {
        while (array[array.length - 1].right < data[i].left) {
                array.pop();
        }
        if (i == 0) {
            data[i].parent = 0;
        } else {
            data[i].parent = array[array.length - 1].id;
            data[array[array.length - 1].id].children.push(data[i].id);
        }
        array.push(data[i]);
        let index = array[array.length - 1].parent,
            link = index ? (children[index] || (children[index] = [])) : root;
        link.push({id: array[array.length - 1].id, title: array[array.length - 1].title});
    }
    function createTree(parent) {
        if(children[parent.id]) {
            parent.children = children[parent.id];
            for(let i = 0; i <= children[parent.id].length - 1; i++) {
                createTree(children[parent.id][i]);
            }
        } else {
            parent.children = children[0];
        }
    }
    children[0] = [{}];
    createTree(root[0]);
    function foundChildren(arr) {
        if (arr.children) {
            return false;
        }
        return true;
    }
    function treeDoom(arr) {

        if (foundChildren(arr[0]))return;
        var ul = document.createElement('ul');
        for (var i = 0; i <= arr.length -1 ; i++) {
            var li = document.createElement('li');
            li.textContent = arr[i].title;
            var childrenUl = treeDoom(arr[i].children);
            if (childrenUl) li.appendChild(childrenUl);

            ul.appendChild(li);

        }
        return ul;
    }
    node.appendChild(treeDoom(root));
}

var node = document.getElementById("node");
//var fff = document.getElementById("fff");
var x = drawNestedSetsTree(
    [
    {
        title: "Одежда",
        left: 1,//li
        right: 22 //</li>
    },
    {
        title: "Мужская",
        left: 2,
        right: 9
    },
    {
        title: "Женская",
        left: 10,
        right: 21
    },
    {
        title: "Костюмы",
        left: 3,
        right: 8
    },
    {
        title: "Платья",
        left: 11,
        right: 16
    },
    {
        title: "Юбки",
        left: 17,
        right: 18
    },
    {
        title: "Блузы",
        left: 19,
        right: 20
    },
    {
        title: "Брюки",
        left: 4,
        right: 5
    },
    {
        title: "Жакеты",
        left: 6,
        right: 7
    },
    {
        title: "Вечерние",
        left: 12,
        right: 13
    },
    {
        title: "Летние",
        left: 14,
        right: 15
    }
], node
);

const demoData = [
    {
        title: "Секции",
        left: 1,
        right: 32
    },
    {
        title: "Секция 1",
        left: 2,
        right: 9
    },
    {
        title: "Секция 2",
        left: 10,
        right: 23
    },
    {
        title: "Секция 3",
        left: 24,
        right: 31
    },
    {
        title: "Секция 1.1",
        left: 3,
        right: 8
    },
    {
        title: "Секция 2.1",
        left: 11,
        right: 12
    },
    {
        title: "Секция 2.2",
        left: 13,
        right: 20
    },
    {
        title: "Секция 2.3",
        left: 21,
        right: 22
    },
    {
        title: "Секция 3.1",
        left: 25,
        right: 30
    },
    {
        title: "Секция 1.1.1",
        left: 4,
        right: 5
    },
    {
        title: "Секция 1.1.2",
        left: 6,
        right: 7
    },
    {
        title: "Секция 2.2.1",
        left: 14,
        right: 15
    },
    {
        title: "Секция 2.2.2",
        left: 16,
        right: 17
    },
    {
        title: "Секция 2.2.3",
        left: 18,
        right: 19
    },
    {
        title: "Секция 3.1.1",
        left: 26,
        right: 27
    },
    {
        title: "Секция 3.1.2",
        left: 28,
        right: 29
    }
];
 