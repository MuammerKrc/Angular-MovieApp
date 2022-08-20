export class UserModel {
  constructor(public email: string, public tokenExpirationDate: Date, public idToken: string, public localId: string, public refreshToken: string) { }

  get token() {
    if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
      return null;
    }
    else {
      return this.idToken;
    }
  }
  
}
