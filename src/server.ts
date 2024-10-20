import * as http from "http";
import { app } from "./app";

// O http.IncomingMessage objeto representa as 
// informações de solicitação do cliente recebidas pelo servidor. 
// Veja este link para os documentos da API do Node . 
// Então, este objeto contém coisas como os cabeçalhos, 
// o método (GET, POST, etc...), a URL solicitada, 
// etc... Ele implementa a ReadableStreaminterface -- 
// o que significa que você pode ler dados dela usando um fluxo -- 
// e tem vários eventos, métodos e propriedades. (muitos para listar aqui...)

// O ServerResponse objeto representa a resposta do 
// servidor http ao cliente. Veja este link para os documentos da API do Node . 
// Com este objeto, você pode definir os cabeçalhos que serão enviados ao cliente, 
// o código de status e a mensagem de status da resposta, bem como quaisquer dados 
// a serem retornados. Ele implementa a WritableStreaminterface -- o que significa 
// que você pode escrever nela usando um fluxo -- e também tem vários eventos, métodos e propriedades.

const server = http.createServer(app)

const port = process.env.PORT

server.listen(port, ()=>{

    console.log(`servidor iniciado na porta ${port}`)
})