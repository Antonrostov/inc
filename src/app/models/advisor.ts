export class Advisor {
  lastName: string;
  firstName: string;
  description: string;
  constructor(
    lastName: string = "",
    firstName: string = "",
    description: string = ""
  ) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.description = description;
  }
}
