function fn_SubmitDataToArray(){
    var dataArr = new Array();
    dataArr.push("data1");
    dataArr.push("data2");
    dataArr.push("data3");

    dataArr.forEach(element => {
        var str = "<input type='hidden' name='dataArr' value= '"+element+"'>"
        $("#frm").append(str)
    });
    
    document.frm.action = "action/URL";
    document.frm.submit();
   
}