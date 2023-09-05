exports.paginaInicial = (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rotas</title>
    </head>
    <body>
        <form action="/" method="post">
            Nome do cliente: <input type="text" name="qualquercoisa"><br>
            outro campo: <input type="text" name="aquioutrocampo">
            <button>enviar</button>
    
        </form>
    </body>
    </html>`);
}
exports.trataPost = (req, res)=> {
    res.send('Nova rota de post')
}