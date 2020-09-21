jQuery().ready(function(){
    /*그리드 선언 시작*/
    jQuery("#Grid").jqGrid({
        url:'/control/getGridList.do',
        datatype:"json", //get 데이터 타입 xml, json, local....
        heigth:300,
        colNames:['체크박스','학교','성명','수학','국어','영어','총점','key'],
        colModel:[
            {name:'checkBox', index:'checkBox', width:70, align:'center'},
            {name:'school', index:'school',    width:120, align:'center'},
            {name:'name',     index:'name',    width:120, align:'center'},
            {name:'math',    index:'math',     width:100, align:'right'},
            {name:'lang',    index:'lang',     width:100, align:'right'},
            {name:'eng',     index:'eng',      width:100, align:'right'},
            {name:'total',   index:'total',    width:100, align:'right'},
            {name:'key',    index:'key',     hidden},
        ],
        mtype:"POST",    //요청방식 get/post
        
    });
});
 
function checkBox(cellvalue, options, rowObject){
    var name = rowObject['name'];
    var str = "<input type=\"checkbox\"name=\"chk\"value="+name+">";
    
    return str;
}


