(function () {
    "use strict"

    function getStudentById(id) {
        $.ajax({
            method: "GET",
            url: "/api/students/" + id
        })
        .done(student => {
            $('#nome').text(student.name);
            $('#email').text(student.email);
            $("#photo").attr("src",student.photo);
            
           // $('#status').text(calculaSituacao(student));
           $('#status').text(student.status);
         
            
            console.log(student)
           
        });
    }

    $("form").on("submit", event => {
        let id = $("#studentId").val()
        getStudentById(id)
        //alert("Merda")
        return false
    })
    
})()

function calculaSituacao(student){
    alert(student)
    
       
}