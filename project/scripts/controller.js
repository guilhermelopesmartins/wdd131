export function getFromLocalStorage(key) {
    const data = JSON.parse(localStorage.getItem(key));
    return Array.isArray(data) ? data : (data ? [data] : []);
}

export function saveInLocalStorage (key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

export function getId(key) {
    const data = getFromLocalStorage(key);
    const lastId = data[data.length - 1]?.id ?? 0;
    return lastId + 1;
}

export function saveData(key, data) {
    let dataArray = getFromLocalStorage(key);
    dataArray.push(data);
    saveInLocalStorage(key, dataArray);
}

export function editData(key, data) {
    let dataArray = getFromLocalStorage(key);
    const index = dataArray.indexOf(dataArray.find(s => s.id === data.id));
    dataArray[index] = data;
    saveInLocalStorage(key, dataArray);
}

export function deleteData(key, id) {
    let dataArray = getFromLocalStorage(key);
    const index = dataArray.indexOf(dataArray.find(s => s.id === id));
    dataArray.splice(index, 1);
    saveInLocalStorage(key, dataArray);
}