/**
 * AppURL v1.0
 * this class is programmed for the api routes or links
 * you can type any api name in this class and import anywhere
 */

class AppURL {
  // your domain name
  static Base = "http://127.0.0.1:8000";
  // the api name
  static BaseURL = `${this.Base}/api`;

  /**
   * CompileURL() v1
   * @param methodName The Name of the method or page after the domain {BaseURL}
   * @returns Full URL Domain + your page or method or url
   */
  static CompileURL = (methodName: string) => `${AppURL.BaseURL}/${methodName}`;

  // the api properties
  static TestURL = AppURL.CompileURL("test");
}

export default AppURL;
