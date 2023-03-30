/// <reference types='codeceptjs' />
type metodosFile = typeof import('./metodosFile');
type realizarLogin = typeof import('./realizarLogin');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
    0: metodosFile;
    1: realizarLogin;
  }
  interface Methods extends Appium {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
