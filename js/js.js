// Configurações:
const url_API = "https://92a88a0b-abe3-4a6c-92a6-c27f223f7dd7.mock.pstmn.io/veiculos";

//

/*
async function API(){
    let resp = await fetch(url_API).then(result=>result.json());
    JSON.parse(resp);
    console.log(resp);
}
API();
*/

let resp = fetch(url_API)
.then((resultado)=>resultado.json())
.then((resultado)=>{
    console.log(resultado);

})