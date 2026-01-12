import Cookies from "js-cookie";

const COOKIE_DUETIME = 7;

export const cookie = {
  set(name: string, value: string) {
    const expires = new Date(Date.now() + COOKIE_DUETIME * 24 * 60 * 60 * 1000);
    Cookies.set(name, value, { expires });
  },

  get(name: string) {
    return Cookies.get(name);
  },

  remove(name: string) {
    Cookies.remove(name);
  }
};