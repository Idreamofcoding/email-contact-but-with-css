function contact(event) {
    event.preventDefault();
    emailjs
    .sendForm(
        'service_31v8w1d',
        'template_rpme5is',
        event.target,
        'user_t3nFbX13MAKY12BvzXcfL'
    ).then(() => {
            console.log("carrots")
        }).catch(() => {
            alert(
                "The email service is temporarily unavailable. Please contact me directly at rocharocharocha95@gmail.com"
            );
        })
    }