var mentors = [];

function addStudent(form) {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<li>" + form.studentName.value +
        " <button class='btn btn-default btn-sm' onclick='checkStudent(\"" +
        form.studentCity.value + "\");'>Check</button></li>";
    document.getElementById("students").appendChild(listItem);
}

function addMentor(form) {
    mentors.push(
        {
            name: form.mentorName.value,
            phone: form.mentorPhone.value,
            city: form.mentorCity.value
        }
    );
    var listItem = document.createElement("li");
    listItem.innerHTML = "<li>" + form.mentorName.value + "</li>";
    document.getElementById("mentors").appendChild(listItem);
}

function checkStudent(studentCity) {
    var message = "";
    if(mentors.length !== 0) {
        message += "The following mentors are available: \n ";
        for (var i = 0; i < mentors.length; i++) {
            if(studentCity.toLowerCase() === mentors[i].city.toLowerCase()) {
                message += mentors[i].name + " - " + mentors[i].phone + "\n ";
            }
        }
    } else {
        message += "Sorry. No mentors are available.";
    }
    alert(message);
}
