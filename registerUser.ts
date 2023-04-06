Feature('registerUser');

Scenario('Register a new user', ({ I }) => {
  I.waitForElement('~welcome_signup', 10);
  I.click('~welcome_signup');
  I.waitForElement('~sign_up_cpf', 5);
  I.fillField('~sign_up_cpf', '15226566859');
  I.fillField('~sign_up_nome', 'Lusenice Soares da Costa');
  I.fillField('~sign_up_nascimento', '03081972');
  I.click('Feminino');
});
