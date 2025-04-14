function sendEmail() {
    const email_to = document.querySelector('.email');
    const subject = document.querySelector('.subject');
    const message = document.querySelector('.message');
    const submit = document.querySelector('.submit');
    const mail_data = document.querySelector('.mail-data');
    document.querySelector('.mail-data').style.color = "red"
    mail_data.innerHTML = '';
    
    submit.onclick = () => {
    
        if (email_to.value.length == 0 || subject.value.length == 0 || message.value.length == 0)
            submit.type = 'submit';
        else {
            submit.type = 'button';
    
            fetch('https://movers-san-francisco.com/email_sender.php', {
                 method:   'POST',
                 'Accept': 'application/json',
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                 body:     'email_message=' + JSON.stringify({
                           'mail_to': email_to.value,
                           'mail_subject': subject.value,
                           'mail_message': message.value
                          })
            }).then(response => response.json()).then(data => {
                
                if (data.result == 'success') {
                    // mail_data.innerHTML = `Email was successfully sent to ${data.email_to}<br>` + mail_data.innerHTML;
                    // mail_data.style.color='red'          
                    location.replace('succes-email')     
                }
                else
                    mail_data.innerHTML = 'Error sending an email!<br>' + mail_data.innerHTML;
                    mail_data.style.color='red' 
    
            })
        }
    }
    
}