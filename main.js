// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var height, width, table;
    
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    table = document.getElementById('pixelCanvas');
    
// Your code goes here!
    table.innerHTML = '';
    var tbody = document.createElement('tbody');
    for (var i = 0; i < height; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < width; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(''));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);

}
$('body').on('click', 'td', function() {
	var color = document.getElementById('colorPicker').value;
    $(this).css('background-color', color);
});