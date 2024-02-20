export class Jwt {
  claims: Record<string, object>;
  constructor(public raw: string) {
    this.claims = Jwt.parseJwt(raw);
  }

  static parseJwt = (token: string) => {
    const b64DecodeUnicode = (str: string) =>
      decodeURIComponent(
        Array.prototype.map
          .call(
            atob(str),
            (c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
          )
          .join('')
      );

    return JSON.parse(
      b64DecodeUnicode(token.split('.')[1].replace('-', '+').replace('_', '/'))
    ) as Record<string, object>;
  };
}

export type OidcClaims = Record<string, object> & {
  name: string;
  picture: string;
};
export type OidcJwt = Jwt & { claims: OidcClaims };
