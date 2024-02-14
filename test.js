export const AdminPath = [
    {
      path: 'dashboard',
      element: "AdminDashboard" ,
    },
    {
      path: 'create-student',
      element: "CreateStudent" ,
    },
    {
      path: 'create-admin',
      element: "CreateAdmin" ,
    },
    {
      path: 'create-faculty',
      element: "CreateFaculty" ,
    },
  ]


const newarray = AdminPath.reduce((acc, item) =>{
  if(item.path && item.element){
    acc.push({
      path: item.path,
      element: item.element
    })
  }
  return acc;
},[])

console.log(newarray);






