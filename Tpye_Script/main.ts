export {}
// const user : {id:number,userName:string}={
// id:1,
// userName:"việt hà"
// }
// console.log(user)


// function sum(a:number,b:number) : number{
  
//     let result = a+10
//     return result
// }
// sum(10,20)



// function lamGiau(tienBanXe:number,tienVayBan:number,tienBanLap:number){
   
//     let congthuc = (tienBanXe+tienVayBan+tienBanLap)*80;
//  console.log(congthuc)
// }

// lamGiau(600000,100000,100000)


// const project :{id:number,name:string,image:string,link:string,status:string}={
//     id:1,
//     name:"HTML",
//     image:"dsad",
//     link:"https://tailwindcss.com/docs/border-radius",
//     status:"downloaded"
// }


// const getData =(proj:{id:number,name:string,image:string,link:string,status:string}):{id:number,name:string,image:string,link:string,status:string}=>{

//     return proj
// }
// getData(project)





// interface Project  {
// id:number | string,
// name:string,
// image?: string
// } 

// const getData =(props:Project[]): Project[]=>{
//     console.log(props)
// return props
// }


// const projectList : Project[] /*Array<projectList>*/ =[
//     {id:1,name:"hà",image:"http"},
//     {id:2,name:"việt",image:"http"}
// ]

// getData(projectList)



type ProjectList = {
    id: number,
    name: string
}

const projectList: ProjectList[] = [
    { id: 1, name: "Du an mau" },
    { id: 2, name: "Du an 1" },
    { id: 3, name: "Du an tot nghiep" }
]





function displayProjectNames(projectList: ProjectList[]) {
    const projectNames = projectList.map(project => project.name);
    const projectId = projectList.map(project => project.id);
    console.log(projectNames,projectId);
  }
  
 
  displayProjectNames(projectList);
  





//   funtion

