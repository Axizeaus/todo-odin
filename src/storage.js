export function addTodo(obj, projectName){
  let key = generateKey(projectName);
  console.log(key);
  localStorage.setItem(key, JSON.stringify(obj));
}

export function getTodo(name){
  if(localStorage.getItem(name)){
    return JSON.parse(localStorage.getItem(name))
  } else {
    return; // error message
  }
}

export function modifyTodo(id, fieldName, newValue){
  if(localStorage.getItem(id)){
    let data = JSON.parse(localStorage.getItem(id));
    data[`${fieldName}`] = newValue;
    console.log(data);
    localStorage.setItem(id, JSON.stringify(data))
  }
}

export function deleteTodo(name){
  if(localStorage.getItem(name)){
    localStorage.removeItem(name);
  } else {
    // show error
  }
}

function generateKey(projectName){
  let arr = []
  if(localStorage.getItem(projectName)){
    arr = JSON.parse(localStorage.getItem(projectName));
  } else {
    arr = [];
    localStorage.setItem(projectName, JSON.stringify(arr))
  }
  let value;
  if (arr.length > 0){
    value = arr[arr.length-1];
    value += 1;
  } else {
    value = 0;
  }
  arr[arr.length] = value;
  let modifiedData = arr;
  localStorage.removeItem(projectName);
  localStorage.setItem(projectName, JSON.stringify(modifiedData))
  return `${projectName}+${value}`;
}


// function storageAvailable(type) {
//   'use strict';
//     let storage;
//     try {
//         storage = window[type];
//         const x = '__storage_test__';
//         storage.setItem(x, x);
//         storage.removeItem(x);
//         return true;
//     }
//     catch (e) {
//         return e instanceof DOMException && (
//             // everything except Firefox
//             e.code === 22 ||
//             // Firefox
//             e.code === 1014 ||
//             // test name field too, because code might not be present
//             // everything except Firefox
//             e.name === 'QuotaExceededError' ||
//             // Firefox
//             e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//             // acknowledge QuotaExceededError only if there's something already stored
//             (storage && storage.length !== 0);
//     }
// }

// if (storageAvailable('localStorage')) {
//   // add the functions here
// }
// else {
//   // display error message
// }

// how about we use arrays for each projects?