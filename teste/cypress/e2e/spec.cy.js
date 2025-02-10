let ListaUsuario = []
describe('Teste CRUD API de Usuários', () => {


  context('Cadastro de Usuários', () => {

    it('Cadastro de Usuários com fluxo Principal/Alternativo/Exceção', () => {
      cy.fixture('MassaTeste.json').then((dados) => {
        dados.forEach((dados) => {
          cy.log(dados.cenario)


          cy.Post_CadastraUsuario(dados.nome, dados.login, dados.senha, dados.email, dados.confirmacao_email)
            .then(Response => {
              cy.log(Response.status)
             expect(Response.status).to.eq(dados.httpCode)

              if (Response.status == 200) {


                // ListaUsuario.push(Response.body['id'])

              }
              else {
                assert(Response.body['erro'], dados.mensagem)

              }
            })

        })


      })
    })
  })

    context('Consulta de Usuários', () => {

      it('Lista Usuários', () => {

        {

          cy.Get_ListaUsuarios()
            .then((Response) => {
              expect(Response.status).to.eq(200)
              cy.log(JSON.stringify(Response.body))

            })
        }



      })
    })
  })
