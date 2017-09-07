var recipes = {
  breakfast :'first',
  dinner: 'second'
}
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;

}
function updateObjectWithKeyAndValue(object, key, value) {
  var newKey = key;
  object[newKey] = value;
  return object;

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;

}

function deleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

function deleteFromObjectByKey() {

}
function destructivelyDeleteFromObjectByKey(object, key) {

}

function destructivelyDeleteFromObjectByKey(object, key) {

}
