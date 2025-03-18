import * as controller from '../scripts/controller.js';

const studentsKey = 'students';

loadTable(studentsKey);

const arrayMedicine = controller.getFromLocalStorage('medicine');
const medicineSelect = document.getElementById('medicine-options');
const defaultOption = document.createElement('option');
defaultOption.value = 'Nothing';
defaultOption.textContent = 'Nothing';
arrayMedicine.forEach(m => {
    const option = document.createElement('option');
    option.value = m.name;
    option.textContent = `${m.name} - ${m.price}`
    medicineSelect.appendChild(option);
})

document.getElementById("add-student").addEventListener("click", () => {
    const dialog = document.getElementById("student-dialog");
    dialog.value = 0;
    document.getElementById('new-name').value = "";
    document.getElementById('new-date').value = "";
    document.getElementById('medicine-options').value = "";
    dialog.show();
});

document.getElementById("cancel-student").addEventListener("click", () => {
    const dialog = document.getElementById("student-dialog");
    dialog.close();
});

document.getElementById("save-student").addEventListener("click", () => {
    const dialog = document.getElementById("student-dialog");
    const student = {
        name: document.getElementById('new-name').value,
        date: document.getElementById('new-date').value,
        medicine: document.getElementById('medicine-options').value
    };
    if (dialog.value === 0) {
        student.id = controller.getId(studentsKey);
        controller.saveData(studentsKey, student);
    } else {
        student.id = dialog.value;
        controller.editData(studentsKey, student);
    }
    loadTable(studentsKey)
    dialog.close();
});

function loadTable(key) {
    const data = controller.getFromLocalStorage(key);
    const table = document.getElementById('table');
    table.innerHTML = '';
    const tr = document.createElement('tr');
    ['Name', 'Sick date', 'Medicine taken', 'Actions'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text; 
        tr.appendChild(th);    
    });
    table.appendChild(tr);

    if (data.length === 0)
        return;
    data.forEach(resp => {
        const tr = document.createElement('tr');
        const name = document.createElement('td');
        const date = document.createElement('td');
        const medicine = document.createElement('td');
        const actions = document.createElement('td');
        const btnEdit = document.createElement('button');
        const btnDelete = document.createElement('button');
        const iEdit = document.createElement('i');
        const iDelete = document.createElement('i');
        name.textContent = resp.name;
        date.textContent = resp.date;
        medicine.textContent = resp.medicine;
        btnEdit.addEventListener("click", () => {
            const dialog = document.getElementById("student-dialog");
            dialog.value = resp.id;
            document.getElementById('new-name').value = resp.name;
            document.getElementById('new-date').value = resp.date;
            document.getElementById('medicine-options').value = resp.medicine;
            dialog.show();
        });
        btnEdit.className = "edit-button";
        btnDelete.addEventListener('click', () => {
            controller.deleteData(studentsKey, resp.id);
            loadTable(studentsKey);
        });
        btnDelete.className = "delete-button";
        iEdit.className="fa-solid fa-pen-to-square fa-sm";
        iDelete.className="fa-solid fa-trash fa-sm";
        btnEdit.appendChild(iEdit);
        btnDelete.appendChild(iDelete);
        actions.appendChild(btnEdit);
        actions.appendChild(btnDelete);
        tr.appendChild(name);
        tr.appendChild(date);
        tr.appendChild(medicine);
        tr.appendChild(actions);
        table.appendChild(tr);
    });
}

document.getElementById('menuButton').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
});