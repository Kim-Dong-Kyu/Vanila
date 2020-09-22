$.ajax({
    url:"/score/ajax/research",
    type:"POST",
    success: function(result) {
        if (result) {
        } else {
            alert("불러오기 실패");
        }
    }
});