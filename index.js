var recipes = {
  breakfast :'first',
  dinner: 'second'
}
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;

}
function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = object;
  newObject[Key] = value;
  return newObject;

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;

}
function deleteFromObjectByKey(object, key) {
  delete object[key]
  return object;
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  object[key] = {};
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
