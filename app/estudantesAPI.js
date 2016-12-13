"use strict"

// dependencies
const express = require("express")
const router = express.Router()
const alunoDB = require("./studentsDB.json")

// private
function procuraAluno(alunoMatricula) {
    //console.log("merda: "+alunoMatricula);
    return alunoDB.find(aluno => aluno.id === alunoMatricula)
}

// public api
router.get("/", (request, response) => {
    response.json(alunoDB)
})

function calcularMedia(aluno){
    let result = 0;
    let i = 0;
    for(; i < 4; i++){
        result += aluno.grades[i];
    }
        result /= 4;

        if (result >= 60) return "Aprovado"
        else if (result >=50) return "Final"
        else return "Reprovado"
}

router.get("/:alunoMatricula", (request, response) => {
    let alunoMatricula = request.params.alunoMatricula
    let alunoData = procuraAluno(alunoMatricula)
    
    if(alunoData) {
        //let alunoDataWithStatus = calcularMedia(alunoData)
        //console.log(media)
        alunoData.status = calcularMedia(alunoData)
        response.json(alunoData)
    }
    else {
        response
        .status(404)
        .send("Not Found!")
    }
})



// export router
module.exports = router