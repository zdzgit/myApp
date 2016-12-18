function getLoginData(){
	var obj={};
	obj.userName=$("#userName").val();
	obj.psw=$("#psw").val();
	obj.url='';
	return obj;
}
function ajaxRequest(obj){
	$.ajax({
		method:'POST',
		url:obj.url,
		data:"username=" + encodeURIComponent(obj.username) + "&psw=" + encodeURIComponent(obj.psw),
		success:function(data){
				console.log(data);
		},
		error:function(){
			console.log('请求失败');
		}

	});
}