// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push(name);
}
function destructivelyPrependDriver(name){
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver(name){
  drivers.pop(name);
}
function destructivelyRemoveFirstDriver(name){
  drivers.shift(name);
}
function appendDriver(name){
  const copyDrivers=drivers.slice();
  copyDrivers.push(name);
  return copyDrivers;
}
function prependDriver(name){
  const copyDrivers2=drivers.slice();
  copyDrivers2.unshift(name);
  return copyDrivers2;
}
function removeLastDriver(name){
  const copyDrivers3=drivers.slice();
  copyDrivers3.drivers.pop(name);
  return copyDrivers3;
}
