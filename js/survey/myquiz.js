window.onload=init;

function init() {
    document.getElementByID("submit").onClick=function(){storeIt(form);};
}

    
function storeIt(form) {

    for (counter = 0; counter < 10; counter++)
    var testarray = document.getElementById("quiz").value;
    var testarray2 = testarray + document.getElementById("quiz2").value;
    document.getElementById("result").innerHTML = (testarray + testarray2);
}

function test_it(entry) {
    if (entry.value != null && entry.value.length != 0) {
        entry.value = "" + eval(entry.value);
    }
    computeForm(entry.form);
}

function computeForm(form) {
    var total = 0

    for (var count = 0; count < 5; count++) {
        if (form.a[count].checked) {
            var total = total + parseInt(form.a[count].value);
        }
    }

    for (var count = 0; count < 5; count++) {
        if (form.b[count].checked) {
            var total = total + parseInt(form.b[count].value);
        }

    }