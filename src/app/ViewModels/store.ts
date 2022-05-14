export class Store {

    name: string;
   logo:string;
    branches: string[];
   constructor( x:string , y:string, branch: string[])
   {
       this.name=x;
       this.logo=y;
       this.branches=branch;
   }

}
