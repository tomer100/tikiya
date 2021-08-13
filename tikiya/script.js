(function setup() {
    "use strict";
    var pNameElem = document.getElementById("pName");
    var pPriceElem = document.getElementById("pPrice");
    var pCategoryElem = document.getElementById("pCategory");
    var pPictureElem = document.getElementById("pPicture");
    document.getElementById("addaproduct").addEventListener("click", function () {
        var newRow = tableElem.insertRow(-1);
        var newCell = newRow.insertCell(0);
        var newText = document.createTextNode(pPriceElem.value + " " + pNameElem.value + " " + pCategoryElem + " " pPictureElem.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(1);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(2);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(3);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(4);
        pNameElem.value = " ";
        pPriceElem.value = " ";
        pCategoryElem.value = " ";
        pPictureElem.value = " ";
        tableElem.value = "";
    });
})();