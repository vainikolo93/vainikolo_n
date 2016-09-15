function clicked(){

    let user = document.getElementById('username');
    let pass = document.getElementById('password');

    let coruser = "test";
    let corpass = "123";

    if(user.value == coruser){
        if(pass.value == corpass){
            window.alert("You are logged in as" + user.value);
        }else {
            window.alert("Incorrect username or password!");
        }
    }else{
         window.alert("Incorrect username or password!");
    }


}