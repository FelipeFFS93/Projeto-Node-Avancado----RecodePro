const {query} = require ("../conexao/index")

const selectItens = (req,res) => {
    query('SELECT * FROM cardapio.menu;', (error, result) => {
        res.render('index', {dados:result}); 
 
    })
}


const saveItens = (req,res) => {
    const { prato, descricao, valor } = req.body
    query(`INSERT INTO menu(prato,descricao,valor) VALUES ('${prato}','${descricao}','${valor}')`,res.redirect('/'))
}


module.exports = {selectItens, saveItens}