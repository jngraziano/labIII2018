


$(document).ready(function () {
    
    $.get("http://localhost:3000/personas",function (data:string,status:string) {
        console.log(status);
        console.log(data);

        let personasCompleto = data;

        let tBodyTable = $('#tBodyTable')[0];
    })

});