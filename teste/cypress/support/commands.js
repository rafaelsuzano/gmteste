Cypress.Commands.add('Get_ListaUsuarios', () =>
    cy.api({
        method:'GET', url:'/usuarios',
  
        headers:{'Content-Type':'application/json',
        
        },
        failOnStatusCode:false
    })
)

Cypress.Commands.add('Delete_Usuario', (idusuario) =>
    cy.api({
        method:'Delete', url:'/usuarios/'+idusuario,
  
        headers:{'Content-Type':'application/json',
        
        },
        failOnStatusCode:false
    })
)

Cypress.Commands.add('Post_CadastraUsuario', (nome,login,senha,email,confirmacao_email) =>
    cy.api({
        method:'Post', url:'/cadastrar',
  
        body:{
           
                "nome": nome,
                "login":login,
                "senha": senha,
                "email": email,
                "confirmacao_email": confirmacao_email
          
            

        },
        headers:{'Content-Type':'application/json',
        




        },
        failOnStatusCode:false
    })
)