var tg = window.Telegram.WebApp;

function sendData()
{
    let data = {};
    if (MODE == "phis")
    {
        // reading data and validating it

        // parsing passport data
        let passport = document.getElementById("passport").value;
        let passport_series = Number(passport.split(" ")[0]);
        let passport_number = Number(passport.split(" ")[1]);

        data = {
            "first_name" : document.getElementById("first_name").value,
            "last_name" : document.getElementById("last_name").value,
            "fathers_name" : document.getElementById("fathers_name").value,
            "passport_series" : passport_series,
            "passport_number" : passport_number, 
            "address" : document.getElementById("address"),
            "inn" : Number(document.getElementById("inn").value),
            "phone_number" : document.getElementById("phone_number")
        };
    }
    else if (MODE == "urid")
    {
        
    }

    return data;
}

tg.onEvent('mainButtonClicked', sendData);
tg.ready();