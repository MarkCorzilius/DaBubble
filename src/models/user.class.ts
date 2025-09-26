export class User {
  name: string;
  email: string;
  passwort: string;

  constructor(obj?: any) {
    this.name = obj?.name ?? '';    
    this.email = obj?.email ?? '';
    this.passwort = obj?.passwort ?? '';    
  }

  public toJSON() {
    return {
      name: this.name,
      email: this.email,
      passwort: this.passwort
    };
  }
}