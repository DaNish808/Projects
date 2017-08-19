createGrid(5,5);

function createGrid(rowNum, colNum) {

    var r = [];
    var c = [];

    var grid = document.getElementById('grid');

    for(var i = 0; i < rowNum; i++) {
        r[i] = document.createElement('tr');
        for(var j = 0; j < colNum; j++) {
            r[i].innerHTML = '<td onclick="test(' + i + ', ' + j + ')><td/>';
            // c[j] = document.createElement('td');
            // c[j].addEventListener('click', 'test', false);
            // console.log(c[j].innerHTML);
            // r[i].appendChild(c[j]);
        }
        grid.appendChild(r[i]);
    }
}

function test() {
    alert("click");
    // var grid = document.getElementById('grid');
    // grid[2][2].style = "background: blue;";
}