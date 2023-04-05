Feature('realizarLogin');

Scenario('Login with sucess', ({ I }) => {
  I.wait(5);
  I.waitForElement('~welcome_login', 5);
  I.tap('~welcome_login');
  I.fillField('//android.widget.EditText[@content-desc="login_cpf"]', '42467937879');
  I.wait(1);
  I.waitForElement('~login_password', 5);
  I.fillField('~login_password', '2016');
  I.tap('ENTRAR');
});

Scenario('Login with error in cpf', ({ I }) => {
  I.wait(5);
  I.waitForElement('~welcome_login', 5);
  I.tap('~welcome_login');
  I.fillField('//android.widget.EditText[@content-desc="login_cpf"]', '4246793787');
  I.wait(1);
  I.waitForElement('~login_password', 5);
  I.fillField('~login_password', '2016');
  I.tap('ENTRAR');
});

Scenario('login with password error', ({ I }) => {
  I.wait(5);
  I.waitForElement('~welcome_login', 5);
  I.tap('~welcome_login');
  I.fillField('//android.widget.EditText[@content-desc="login_cpf"]', '42467937879');
  I.wait(1);
  I.waitForElement('~login_password', 5);
  I.fillField('~login_password', '201');
  I.tap('ENTRAR');
});
