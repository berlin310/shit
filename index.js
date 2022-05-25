const http = require('http');
const fs = require('fs');

const a = `<!doctype>
<html>
    <head>
        <meta charset="utf-8">
        <title>Redice Studio - Homepage.</title>
    </head>
    <body>
        <style>
            body {
              background-image: url('https://i.imgur.com/QX3YHKm.png');
              background-repeat: no-repeat;
              background-attachment: fixed;
              background-size: cover;
            }
        </style> 

        <style>
            .button {   
                background-image: url('https://i.imgur.com/HlnbVNB.jpg');   
                width: 30px;   
                height: 30px;    
                background-size: 100% 100%;
                position: absolute;
                right: 15;
                bottom: 15;
            }
        </style>

        <form>
            <input class="button" title="You can a look at our Telegram Channel!" type="button" onclick="window.location.href = 'https://t.me/rdcstd';" />
        </form>
        
    </body>
</html>`

http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(a);
    console.log("html sended.");

}).listen(8080, () => console.log("Server Work!"));