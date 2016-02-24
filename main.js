/** 
 * Dataset of people with their connections
 */
var connections = [{
  id: 1,
  name: "Lannister",
  follow: [2, 3]
}, {
  id: 2,
  name: "Mormont",
  follow: [3]
}, {
  id: 3,
  name: "Targaryen",
  follow: [1, 2]
}, {
  id: 4,
  name: "Stark",
  follow: [1, 2]
}];

/** 
 * Function to update list in document
 */
function updateList(innerHtml) {
  var node = document.getElementById('output');
  node.innerHTML = innerHtml;
}

/** 
 * Function handler from clicking submit
 */
function handleSubmit() {
  var node = document.getElementById('text');
  handleInput(node.value);
}

/** =========================== **
 **                             **
 **    Write your code below    **
 **                             **
 ** =========================== **/


function handleInput(value) {

  var data = [];

  for (var i = 0; i < connections.length; i++) {

    if (connections[i].name === value) {

      for (var j = 0; j < connections.length; j++) {

        if (connections[j].follow.indexOf(connections[i].id) >= 0 && connections[i].follow.indexOf(connections[j].id) >= 0) {

          data.push('<li>' + connections[i].name + ' and ' + connections[j].name + ' are following each other.</li>');

        } else if (connections[i].follow.indexOf(connections[j].id) >= 0) {

          data.push('<li>' + connections[i].name + ' follows ' + connections[j].name + '</li>');

        } else if (connections[j].follow.indexOf(connections[i].id) >= 0) {

          data.push('<li>' + connections[i].name + ' is followed by ' + connections[j].name + '</li>');

        }

      }

    }

  }

  updateList(data.join(""));

}