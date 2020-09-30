export class User {

  id: number;
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  mobilePhone: number;
  officePhone: number;
  address: any;

  constructor(id: number,
              userId: string,
              email: string,
              firstName: string,
              lastName: string,
              company: string,
              mobilePhone: number,
              officePhone: number,
              address: any) {
    this.id = id;
    this.userId = userId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
    this.mobilePhone = mobilePhone;
    this.officePhone = officePhone;
    this.address = address;
  }

  static getBlankUser(): User {
    return new User(
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null);
  }
}
