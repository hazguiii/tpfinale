function sign_up(){
    var fs = require('fs');

    fs.appendFile('accounts.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

}


function sign_in(email,password){
    jQuery.get('accounts.txt',function(txt){
        let accounts=txt.split('/') //all accounts in one list   
        let i
        let login=false
        for (i=0;i<accounts.length-1;i++){//iterate all the existing accounts
            if (email==accounts[i].split(':')[0] && password==accounts[i].split(':')[1]){
                console.log('logged in successfully')
                login=true;
                break

            }
            else {
                console.log('incorrect password')
                }

    }})        
}
$(document).ready(function () {
    $(".incorrect-content").hide();
    setTimeout(function(){
        $(".trythis-image").fadeOut(3000);

    },5000)
});
function show(){
    $(".incorrect-content").slideDown();
    setTimeout(function(){
        $(".incorrect-content").slideUp();
    },3000)
}