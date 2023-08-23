var tg = window.Telegram.WebApp;

function fetchData()
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
            "user_type" : MODE,
            "first_name" : document.getElementById("first_name").value,
            "last_name" : document.getElementById("last_name").value,
            "fathers_name" : document.getElementById("fathers_name").value,
            "passport_series" : passport_series,
            "passport_number" : passport_number, 
            "address" : document.getElementById("address").value,
            "inn" : Number(document.getElementById("inn").value),
            "phone_number" : document.getElementById("phone_number").value
        };
    }
    else if (MODE == "urid")
    {
        data = {
            "user_type" : MODE,
            "name" : document.getElementById("name").value,
            "ogrn" : Number(document.getElementById("ogrn").value),
            "address" : document.getElementById("address").value,
            "inn" : document.getElementById("inn").value
        };
    }

    data["web_app_name"] = "user_registration";

    return data;
}

function sendData()
{
    let data = fetchData();
    tg.sendData(JSON.stringify(data));
}

tg.onEvent('mainButtonClicked', sendData);
tg.ready();