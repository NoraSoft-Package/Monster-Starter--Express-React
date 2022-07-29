/**
 * AppURL v1.1
 * this class is programmed for the api routes or links
 * you can type any api name in this class and import anywhere
 */

class AppURL {
  // your domain name from .env file in the root of the client
  static Base = process.env.REACT_APP_API_URL;

  // the api name
  static BaseURL = `${this.Base}/api`;

  /**
   * CompileURL() v1
   * @param methodName The Name of the method or page after the domain {BaseURL}
   * @returns Full URL Domain + your page or method or url
   */
  static CompileURL = (methodName: string) => `${AppURL.BaseURL}/${methodName}`;

  // the api properties
  static TestURL = AppURL.CompileURL("tests");
}

export default AppURL;
