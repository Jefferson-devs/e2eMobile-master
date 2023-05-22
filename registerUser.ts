Feature('registerUser');

Scenario('Register a new user', ({ I }) => {
  // Preenchendo a primeira parte do formulário
  I.waitForElement('~welcome_signup', 20);
  I.click('~welcome_signup');
  I.waitForElement('~sign_up_cpf', 5);
  I.fillField('~sign_up_cpf', '15226566859');
  I.performSwipe({ x: 1054, y: 964 }, { x: 1037, y: 1421 });
  I.fillField('~sign_up_nome', 'Lusenice Soares da Costa Silva de Souza');
  I.fillField('~sign_up_nascimento', '03081972');
  I.performSwipe({ x: 1054, y: 964 }, { x: 300, y: 300 });
  I.click('Feminino');
  I.wait(2);

  // Preenchendo a segunda parte do formulário
  I.fillField('~sign_up_cep', '03712003'); // Seta os campos Rua, Bairro, Cidade e UF automaticamente
  I.performSwipe({ x: 1048, y: 1634 }, { x: 1051, y: 1103 });
  I.wait(6);
  I.fillField('//android.widget.EditText[@content-desc="sign_up_rua"])[2]', '1153');
  I.wait(10);
  I.fillField('~sign_up_complemento', 'Apartamento 51');
  I.wait(6);
  I.fillField('~sign_up_cell', '11952179177');
  I.fillField('	E-mail', 'Lusenicescss@outlook.com');
});
