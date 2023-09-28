class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicação
    Disponibilidade 
    constructor(titulo, autor , editora, anoDePublicação,disponibilidade = true){
this.Titulo = titulo
this.Autor = autor 
this.Editora = editora
this.AnoDePublicação = anoDePublicação
this.Disponibilidade = disponibilidade
    }
}
class Biblioteca{
    Nome
    Endereço
    Telefone
    AcervoDeLivros = []
    constructor(nome,endereco,telefone,acervo){
        this.Nome = nome
        this.Endereço = endereco
        this.Telefone = telefone
        this.AcervoDeLivros = acervo
    }
          BuscarLivro(titulo) {
            this.AcervoDeLivros.find(livro => { livro.Titulo == titulo
                if (livro.Titulo == titulo) {
                    console.log(livro)
                }
            });
        
  function EmprestarLivro(titulo) {
    let emprestar = false
    this.AcervoDeLivros.forEach(livro => {
    if (livro.Titulo == titulo) {
        if (livro.Disponibilidade === true) {
            livro.Disponibilidade = false
            emprestar = true
        }
    }
});
if (emprestar ) {
    return true
}else{
    return false
}
}
  function DevolverLivro(titulo){
this.AcervoDeLivros.forEach(livro => { livro.Titulo == titulo
if (livro.Titulo == titulo) {
    livro.Disponibilidade = true
    console.log("Livro devolvido")
}
})
  }
  }
  }


arrayObjetosClassLivro = []
arrayObjetosClassLivro.push(new Livro("Livro1" , "autor1" , "editora1" , 1920))
arrayObjetosClassLivro.push(new Livro("Livro2" , "autor2" , "editora2" , 1930))
arrayObjetosClassLivro.push(new Livro("Livro3" , "autor3" , "editora3" , 1940))
arrayObjetosClassLivro.push(new Livro("Livro4" , "autor4" , "editora4" , 1950))

MinhaBiblioteca = new Biblioteca("Nome1" , "Endereço1", "Telefone1" )
MinhaBiblioteca.BuscarLivro("Livro1")
MinhaBiblioteca.EmprestarLivro("Livro2")
MinhaBiblioteca.DevolverLivro("Livro3")


