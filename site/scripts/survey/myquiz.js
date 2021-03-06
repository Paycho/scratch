$(document).ready(function() {
    $("#submit").click(
        function() {
            storeIt($('input[name=a]:checked', '#survey').val(),
                $('input[name=b]:checked', '#survey').val());
        }
    );
});
    
function storeIt(firstAnswer, secondAnswer) {
    ++firstAnswer;
    ++secondAnswer;
    $("#result").html(firstAnswer + "<br>" + secondAnswer);
}

function test_it(entry) {
    if (entry.value !== null && entry.value.length !== 0) {
        entry.value = entry.value.toString();
    }
    computeForm(entry.form);
}

function computeForm(form) {
    var total = 0;

    for (var count = 0; count < 5; count++) {
        if (form.a[count].checked) {
            total = total + parseInt(form.a[count].value);
        }
    }

    for (count = 0; count < 5; count++) {
        if (form.b[count].checked) {
            total = total + parseInt(form.b[count].value);
        }

    }
}