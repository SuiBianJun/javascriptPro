function doCheck() {

    let form = document.getElementById('id_register');

    let phone_number = document.getElementById('id_phone_number');
    let phone_number_regexp = new RegExp("\\d{11}");

    let email = document.getElementById('id_email');
    let email_regexp = new RegExp("^[0-9a-zA-Z]{1,20}@(qq|163).(com|cn)");

    let password = document.getElementById('id_password');
    let password_regexp = new RegExp("\\w{8,20}");
    let password2 = document.getElementById('id_password2');

    let name = document.getElementById('id_name');
    let name_regexp = new RegExp("\\w{3,10}");

    //console.log(typeof phone_number.value);

    if(phone_number_regexp.test(phone_number.value)){
        console.log('phone number ok');
        if(email_regexp.test(email.value)){
            console.log('email ok');
            if(password_regexp.test(password.value)){
                console.log('password ok');
                if(password.value === password2.value){
                    console.log('password2 ok');
                    if(name_regexp.test(name.value)){
                        form.submit();
                    }else{
                        console.log('name error');
                    }
                }else{
                    console.log('password2 not like password');
                }
            }else{
                console.log('password error');
            }
        }else{
            console.log('email error');
        }

    }else{
        console.log('phone number error');
    }

}