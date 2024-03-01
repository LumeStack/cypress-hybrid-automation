

Cypress.Commands.add('login', (email, password) => {
  cy.request("POST", "https://serverest.dev/login", {
    email: email,
    password: password
  }).then((response) => {
    cy.log(response.body.authorization)
    window.localStorage.setItem("serverst/userToken", response.body.authorization)
  })
})

Cypress.Commands.add('cadastroProduto', (name, price, description, quantity) => {
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/produtos',
    body: {
      nome: name,
      preco: price,
      descricao: description,
      quantidade: quantity,
    },

    headers: {
      Authorization: window.localStorage.getItem("serverest/userToken")
    }

  })
})
