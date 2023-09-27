class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicação
    Disponibilidade 
    constructor(titulo, autor , editora, anoDePublicação,){
this.Titulo = titulo
this.Autor = autor 
this.Editora = editora
this.AnoDePublicação = anoDePublicação
this.Disponibilidade = true 
    }
}
class Biblioteca{
    Nome
    Endereço
    Telefone
    AcervoDeLivros
    constructor(nome,endereco,telefone,acervoDeLivros){
        this.Nome = nome
        this.Endereço = endereco
        this.Telefone = telefone
        this.AcervoDeLivros = acervoDeLivros
    }
}
arrayObjetosClassLivro = []
arrayObjetosClassLivro.push(new Livro("Livro1" , "autor1" , "editora1" , 1920))
arrayObjetosClassLivro.push(new Livro("Livro2" , "autor2" , "editora2" , 1930))
arrayObjetosClassLivro.push(new Livro("Livro3" , "autor3" , "editora3" , 1940))
arrayObjetosClassLivro.push(new Livro("Livro4" , "autor4" , "editora4" , 1950))
