//Fetch API (GET)

fetch('pagina1.html')
	.then(resposta =>{
if(resposta.status !== 200) throw new Error('ERRO 404');// aqui o erro ja direciona para o catch
	return resposta.text();// .text() retorna outra promise
})
.then(html => console.log(html))
.catch(e => console.error(e));