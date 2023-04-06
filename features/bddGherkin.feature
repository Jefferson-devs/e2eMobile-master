Feature: Autenticação de usuário no ApCap da Sorte
  Como um usuário do ApCap da Sorte
  Eu quero poder me autenticar no aplicativo utilizando meu CPF e senha de 4 dígitos
  Para que eu possa acessar as funcionalidades exclusivas do aplicativo.

  Scenario: Login do usuário com CPF e senha de 4 dígitos
    Given que o usuário está na tela de login do aplicativo ApCap da sorte
    And o usuário tem um CPF válido e uma senha de 4 dígitos válida
    When o usuário inserir o CPF e a senha corretos nos campos correspondentes
    And clicar no botão Entrar
    And o usuário deverá ser autenticado com sucesso
    Then redirecionado para a página principal do aplicativo.

  Scenario: Tentativa de login com CPF inválido
    Given  que o usuário está na tela de login do aplicativo ApCap da sorte
    And o usuário tem um CPF válido e uma senha de 4 dígitos válida
    When o usuário inserir um CPF inválido no campo correspondente
    And clique no botão Entrar
    Then o usuário não deverá ser autenticado com sucesso
    And uma mensagem de erro deve ser exibida na tela, informando que o CPF está incorreto.

  Scenario: Tentativa de login com senha inválida
    Given que o usuário está na tela de login do aplicativo ApCap da sorte
    And o usuário tem uma senha inválido de 4 dígitos
    When o usuário inserir o email corretamente
    And a senha inválido no campo correspondente
    And clicar no botão Entrar
    Then o usuário não deverá ser autenticado com sucesso
    And uma mensagem de erro deve ser exibida na tela, informando que a senha está inválida.
