$(document).ready(function () {
    $.get("http://localhost:3000/personas", function (data, status) {
        console.log(status);
        console.log(data);
        var personasCompleto = data;
        var tBodyTable = $('#tBodyTable')[0];
    });
});
