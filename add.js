var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["song"] = document.getElementById("song").value;
    formData["artist"] = document.getElementById("artist").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["release"] = document.getElementById("release").value;
    formData["rating"] = document.getElementById("rating").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.song;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.artist;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dob;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.release;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.rating;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("song").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("release").value = "";
    document.getElementById("rating").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("song").value = selectedRow.cells[0].innerHTML;
    document.getElementById("artist").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[2].innerHTML;
    document.getElementById("release").value = selectedRow.cells[3].innerHTML;
    document.getElementById("rating").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.song;
    selectedRow.cells[1].innerHTML = formData.artist;
    selectedRow.cells[2].innerHTML = formData.dob;
    selectedRow.cells[3].innerHTML = formData.release;
    selectedRow.cells[4].innerHTML = formData.rating;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("song").value == "") {
        isValid = false;
        document.getElementById("songValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("songValidationError").classList.contains("hide"))
            document.getElementById("songValidationError").classList.add("hide");
    }
    return isValid;
}