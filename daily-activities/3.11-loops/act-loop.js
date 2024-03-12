let Execute = document.getElementById("btnExecute");

Execute.addEventListener('click', function () {
    let rownumber = document.getElementById("rownum").value;
    let colnumber = document.getElementById("colnum").value;
    let product = "";

    for (var x = 1; x <= rownumber; x++) {
        product += "<tr>";
            for (var y = 1; y <= colnumber; y++) {
                product += "<td>" + x * y + "</td>";
            }
            product += "</tr>";
    }
    
    document.getElementById("result-table").innerHTML = product;
    // console.log(product);
})
