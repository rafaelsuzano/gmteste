let ListaUsuario = []
let idusuario =[]
describe('Teste CRUD API de Usuários', () => {


  context('Cadastro de Usuários', () => {

    it('Cadastro de Usuários com fluxo Principal/Alternativo/Exceção', () => {
      cy.fixture('MassaTeste.json').then((dados) => {
        dados.forEach((dados) => {
          cy.log('Cenário ' + dados.cenario)


          cy.Post_CadastraUsuario(dados.nome, dados.login, dados.senha, dados.email, dados.confirmacao_email)
            .then(Response => {
              cy.log(Response.status)
              cy.screenshot()
             expect(Response.status).to.eq(dados.httpCode)

              if (Response.status == 201) {
               

                assert(Response.body['mensagem'], dados.mensagem)
                idusuario.push(JSON.stringify(Response.body['usuario']['id']) ) 
              }
              else {
                assert(Response.body['erro'], dados.mensagem)
                cy.screenshot()

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
              cy.log(idusuario)
              cy.screenshot()

            })
        }



      })
    })



    context('Deleta de Usuários', () => {

      it('Deleta Usuários', () => {

        {

          cy.Delete_Usuario(idusuario)
            .then((Response) => {
              expect(Response.status).to.eq(200)
              cy.log(JSON.stringify(Response.body['mensagem']))
              assert(JSON.stringify(Response.body['mensagem']),'Usuário excluído com sucesso!')
 
              cy.screenshot()




            })
        }



      })
    })
  })
