var tg = window.Telegram.WebApp;

function sendData()
{
    let data = {};
    if (MODE == "phis")
    {

    }
    else if (MODE == "urid")
    {

    }

    return data;
}

tg.onEvent('mainButtonClicked', sendData);
tg.ready();