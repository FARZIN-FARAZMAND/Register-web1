$(document).ready(function(){
$("#name").keyup(function(){  
$("#name").attr('maxlength','8');
if($("#name").val().length <3);
$("p.nametext").text("تعداد کاراکتر نام کم است");
if($("#name").val().length <4);
if($("#name").val().length <5);
else{
$("p.nametext").text("");
}; 
});
$("#Familyname").keyup(function(){ 
$("#Familyname").attr('maxlength','10');
if($("#Familyname").val().length >3);
$("p.Familynametext").text("تعداد کاراکتر نام کم است");
if($("#Familyname").val().length >-0)
if($("#Familyname").val().length <5);
else{
$("p.Familynametext").text("");
}; 
});
$(function(){
for(let faraz=1340; faraz<=1402;faraz++){
$("select.tim").append(`<option value="${faraz}">${faraz}</option>`)   
};
});
$(function(){
for(let f=1; f<=12;f++){
$("#farazselect").append(`<option value="${f}">${f}</option>`)
};
});
$(function(){
for(let f=1; f<=30;f++){
$("#tim30").append(`<option value="${f}">${f}</option>`)
};
});
$("#password").keyup(function(){
$("#password").attr('maxlength','15');
if($("#password").val().length >3)
$("p.passwordtext").text("رمز خیلی ضعیف است");
if($("#password").val().length >5)
$("p.passwordtext").text(" رمز ضعیف است").addClass("passwordtextcolor2");
if($("#password").val().length >8)
$("p.passwordtext").text("رمز قوی است").removeClass("passwordtextcolor2").addClass("passwordtextcolor3");
else{
$("p.passwordtext").removeClass("passwordtextcolor3");       
}
});

// لینک سایت این کد  https://stackoverflow.com/questions/8760070/how-to-format-a-phone-number-with-jquery

$(function () {
$('#phone').on('input', function() {
var number = $(this).val().replace(/[^\d]/g, '')
if (number.length == 7) {
number = number.replace(/(\d{3})(\d{4})/, "$1-$2");
} else if (number.length == 5) {
number = number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}
$(this).val(number)
});
});




$("#email").blur(function() {
    var email = $(this).val();
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      // Display error message or take appropriate action
    }
  });













});
//farzin farazmand