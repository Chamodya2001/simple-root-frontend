getAllEmployees();
function Savecustomer() {

    let Name = $('#exampleFormControlInput2').val();
    let Address = $('#exampleFormControlInput3').val();

    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/user/save",
        async: true,
        data: JSON.stringify({
            "name": Name,
            "address": Address
        }),
        success: function (data) {
            alert("You are registered");
            getAllEmployees()
        },
        error: function (xhr, exception) {
            alert("Save error");
        }
    });
}

function Updatecustomer() {
    let Id = $('#exampleFormControlInput1').val();
    let Name = $('#exampleFormControlInput2').val();
    let Address = $('#exampleFormControlInput3').val();

    $.ajax({
        method: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/user/update",
        async: true,
        data: JSON.stringify({
            "id": Id,
            "name": Name,
            "address": Address
        }),
        success: function (data) {
            alert("Update success!");
            getAllEmployees()
        },
        error: function (xhr, exception) {
            alert("Update error");
        }
    });
}

function Clearcustomer() {
    let Id = $('#exampleFormControlInput1').val();

    $.ajax({
        method: "DELETE",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/user/delete/" + Id, // Added "/" before Id
        async: true,
        data: JSON.stringify({
            "id": Id
        }),
        success: function (data) {
            alert("Delete success!");
            getAllEmployees()
        },
        error: function (xhr, exception) {
            alert("Delete error");
        }
    });
}

function getAllEmployees(){

    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/user/get",
        async:true,
        success: function (data) {
            if (data.code==="00"){
                $('#empTable').empty();
                for (let emp of data.content){
                    let empID=emp.id
                    let name=emp.name
                    let address=emp.address


                    var row=`<tr><td>${empID}</td><td>${name}</td><td>${address}</td></tr>`;
                    $('#empTable').append(row);
                }
            }
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })



}
// $(document).ready(function () {
//     $(document).on('click', '#empTable tr', function () {
//         var col0 = $(this).find('td:eq(0)').text();
//         var col1 = $(this).find('td:eq(1)').text();
//         var col2 = $(this).find('td:eq(2)').text();
//         var col3 = $(this).find('td:eq(3)').text();
//
//         $('#exampleFormControlInput1').val(col0);
//         $('#exampleFormControlInput2').val(col1);
//         $('#exampleFormControlInput3').val(col2);
//         $('#exampleFormControlInput4').val(col3);
//
//     })
// })