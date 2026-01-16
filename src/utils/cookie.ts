import Cookies from "js-cookie";

export const cookie = {
  set(name: string, value: string, expires?: number) {
    const lifetime = expires ?? 24;
    Cookies.set(name, value, {
      expires: new Date(Date.now() + lifetime * 60 * 60 * 1000),
    });
  },

  get(name: string) {
    return Cookies.get(name);
  },

  remove(name: string) {
    Cookies.remove(name);
  },
};
