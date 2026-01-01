class UserProfiless {


 protected email: string;
  constructor( email: string) {
   this.email = email;
 }
 printEmail():void{
   console.log(`Password : ${this.email}`);
 }


}
const objcomas = new UserProfiless("2gmail");
objcomas.printEmail();


class UserProfilesub extends UserProfiless {
 constructor(email: string) {
   super(email);
 }
 printPassword(): void {
   console.log(`Password : ${this.email}`);
 }
}


const c1 = new UserProfilesub("3gmail");
c1.printPassword();
