var list = ['test', 34, {name:'Guilherme'}];

for (var i in list) {
    //console.log(list[i]);
}

for(let i of list){
    console.log(i);
}