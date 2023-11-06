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
    if (done) {
        tarefa.classList.add("done")
    }
    if (save) {
        saveTarefaLocalStorage({ text, done: 0 })
    }

    tarefasLista.appendChild(tarefa)
    tarefaInput.value = ""
}

const trocaForms = () => {
    editForm.classList.toggle("hide")
    form.classList.toggle("hide")
    tarefasLista.classList.toggle("hide")
}

const updateTarefa = (text) => {
    const tarefas = document.querySelectorAll(".tarefa")

    tarefas.forEach((tarefa) => {
        let tarefaTitulo = tarefa.querySelector("h3")

        if (tarefaTitulo.innerHTML === antigoInput) {
            tarefaTitulo.innerHTML = text

            updateTarefaLocalStorage(antigoInput, text)
        }
        updateTarefaLocalStorage
    })
}

const pesquisar = (buscar) => {
    const tarefas = document.querySelectorAll(".tarefa")

    tarefas.forEach((tarefa) => {
        const tarefaTitulo = tarefa.querySelector("h3").innerText.toLowerCase()

        tarefa.style.display = "flex"
        console.log(tarefaTitulo)

        if (!tarefaTitulo.includes(buscar)) {
            tarefa.style.display = "none"
        }
    })
}

const filtrarTarefa = (filtrar) => {
    const tarefas = document.querySelectorAll(".tarefa")

    switch (filtrar) {
        case "all":
            tarefas.forEach((tarefa) => (tarefa.style.display = "flex"))
            break

        case "done":
            tarefas.forEach((tarefa) => {
                if (tarefa.classList.contains("done")) {
                    tarefa.style.display = "flex"
                }
                else {
                    tarefa.style.display = "none"
                }
            })
            break;

        case "todo":
            tarefas.forEach((tarefa) => {
                if (!tarefa.classList.contains("done")) {
                    tarefa.style.display = "flex"
                } else {
                    tarefa.style.display = "none"
                }
            })
            break;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = tarefaInput.value
    if (inputValue) {
        salvar(inputValue)
    }
})

document.addEventListener("click", (e) => {
    const targetElemento = e.target
    const parentElemento = targetElemento.closest("div")
    let tarefaTitulo

    if (parentElemento && parentElemento.querySelector("h3")) {
        tarefaTitulo = parentElemento.querySelector("h3").innerHTML || ""
    }

    if (targetElemento.classList.contains("feita")) {
        parentElemento.classList.toggle("done")
        updateTarefaLocalStorage(tarefaTitulo)
    }

    if (targetElemento.classList.contains("apagar")) {
        parentElemento.remove()
        apagaTarefaLocalStorage(tarefaTitulo)
    }
})

