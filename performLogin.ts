Feature('Autenticação de usuário no ApCap da Sorte');

Scenario('Login with sucess', ({ I }) => {
  // Efetuando o login com sucesso.
  I.waitForElement('~welcome_login', 10);
  I.click('~welcome_login');
  I.fillField('//android.widget.EditText[@content-desc="login_cpf"]', '42467937879');
  I.wait(1);
  I.waitForElement('~login_password', 5); //implementar a secret login para nao mostrar senha nos logs
  I.fillField('~login_password', '2023');
  I.tap('ENTRAR');
  I.wait(6);
  I.tap('[949,277][1054,382]');
});

Scenario('Login with error in cpf', ({ I }) => {
  // Tentativa de login com cpf inválido.
  I.waitForElement('~welcome_login', 10);
  I.click('~welcome_login');
  I.fillField('//android.widget.EditText[@content-desc="login_cpf"]', '4246793787');
  I.wait(1);
  I.waitForElement('~login_password', 5);
  I.fillField('~login_password', '2023');
  I.tap('ENTRAR');
});

Scenario('login with password error', ({ I }) => {
  // Tentativa de login com senha inválida.
  I.waitForElement('~welcome_login', 10);
  I.click('~welcome_login');
  I.fillField('//android.widget.EditText[@content-desc="login_cpf"]', '42467937879');
  I.wait(1);
  I.waitForElement('~login_password', 5);
  I.fillField('~login_password', '0101');
  I.tap('ENTRAR');
});
