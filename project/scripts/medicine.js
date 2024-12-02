import * as controller from '../scripts/controller.js';

const medicineKey = 'medicine';

loadTable(medicineKey);

document.getElementById("add-medicine").addEventListener("click", () => {
    const dialog = document.getElementById("medicine-dialog");
    dialog.value = 0;
    document.getElementById('new-name').value = "";
    document.getElementById('new-description').value = "";
    document.getElementById('new-price').value = "";
    dialog.show();
});

document.getElementById("cancel-medicine").addEventListener("click", () => {
    const dialog = document.getElementById("medicine-dialog");
    dialog.close();
});

document.getElementById("save-medicine").addEventListener("click", () => {
    const dialog = document.getElementById("medicine-dialog");
    const medicine = {
        name: document.getElementById('new-name').value,
        description: document.getElementById('new-description').value,
        price: document.getElementById('new-price').value
    };
    if (dialog.value === 0) {
        medicine.id = controller.getId(medicineKey);
        controller.saveData(medicineKey, medicine);
    } else {
        medicine.id = dialog.value;
        controller.editData(medicineKey, medicine);
    }
    loadTable(medicineKey)
    dialog.close();
});

function loadTable(key) {
    const data = controller.getFromLocalStorage(key);
    if (data.length === 0)
        return;
    const table = document.getElementById('table');
    table.innerHTML = '';
    const tr = document.createElement('tr');
    ['Name', 'Description', 'Price', 'Actions'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text; 
        tr.appendChild(th);    
    });
    table.appendChild(tr);

    data.forEach(resp => {
        const tr = document.createElement('tr');
        const name = document.createElement('td');
        const description = document.createElement('td');
        const price = document.createElement('td');
        const actions = document.createElement('td');
        const btnEdit = document.createElement('button');
        const btnDelete = document.createElement('button');
        name.textContent = resp.name;
        const iEdit = document.createElement('i');
        const iDelete = document.createElement('i');
        description.textContent = resp.description;
        price.textContent = resp.price;
        btnEdit.addEventListener("click", () => {
            const dialog = document.getElementById("medicine-dialog");
            dialog.value = resp.id;
            document.getElementById('new-name').value = resp.name;
            document.getElementById('new-description').value = resp.description;
            document.getElementById('new-price').value = resp.price;
            dialog.show();
        });
        btnEdit.className = "edit-button"
        btnDelete.addEventListener('click', () => {
            controller.deleteData(medicineKey, resp.id);
            loadTable(medicineKey);
        });
        btnDelete.className = "delete-button";
        iEdit.className="fa-solid fa-pen-to-square fa-sm";
        iDelete.className="fa-solid fa-trash fa-sm";
        btnEdit.appendChild(iEdit);
        btnDelete.appendChild(iDelete);
        actions.appendChild(btnEdit);
        actions.appendChild(btnDelete);
        tr.appendChild(name);
        tr.appendChild(description);
        tr.appendChild(price);
        tr.appendChild(actions);
        table.appendChild(tr);
    });
}

document.getElementById('menuButton').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
});