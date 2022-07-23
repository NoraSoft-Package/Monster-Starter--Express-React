import { Platform } from "react-native";

/**
 * API_Handler() v1.0
 * For handling the web backend and the phones backend in development mode
 * @param goTo the api name
 * @returns String
 */
const API_Handler = (goTo: string) => {
  // the web backend url
  const webURL = "http://localhost:5000/api";
  // the phone backend url
  const phoneURL = "https://e60c-197-37-119-159.eu.ngrok.io/api";

  // if it's web
  if (Platform.OS === "web") {
    return `${webURL}/${goTo}`;
  }

  // if it's not web
  return `${phoneURL}/${goTo}`;
};

export default API_Handler;
