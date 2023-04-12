function $g(selector) {

    let nodelist = document.querySelectorAll(selector);

    if (nodelist.length == 0) {
        return null;
    }

    return nodelist.length == 1 ? nodelist[0] : nodelist;
}

function $drawPieChart(companyArray, dataArray){

    let ctxPie = document.getElementById("mkShare");
    var pieChart = new Chart(ctxPie,{})
}
function $ce(element, text) {
    let el = document.createElement(element);
    //判斷text參數是否合規?
    if (typeof(text) != "undefined" && text != "" && text != null) {
        el.innerHTML = text.trim();
    }

    return el;
}


export { $g,$drawPieChart,$ce };