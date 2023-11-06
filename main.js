const form = document.querySelector("#form")
const tarefaInput = document.querySelector("#tarefa-input")
const tarefasLista = document.querySelector("tarefas-lista")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelaEdit = document.querySelector("#cancela-edit")
const buscarInput = document.querySelector("#buscar-input")
const limpar = document.querySelector("#limpar")
const filtroSelecao = document.querySelector("filtro-selecao")

let antigoInput

const salvar = (text, done = 0, save = 1) => {
    const tarefa = document.createElement("div")
    tarefa.classList.add("tarefa")
    //cria div HTML class = tarefa

    const tarefaTitulo = document.createElement("h3")
    tarefaTitulo.innerHTML = text
    tarefa.appendChild(tarefaTitulo)
    //dentro div tarefa cria h3

    const feita = document.createElement("button")
    feita.classList.add("feita")
    feita.innerHTML = 'Feita'
    tarefa.appendChild(feita)

    const editar = document.createElement("button")
    editar.classList.add("editar")
    editar.innerHTML = 'Editar'
    tarefa.appendChild(editar)

    const apagar = document.createElement("button")
    apagar.classList.add("apagar")
    apagar.innerHTML = 'Apagar'
    tarefa.appendChild(apagar)

    //utiliza dados fdo localStorage
}