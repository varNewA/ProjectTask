export default [
  
  {
    path:'/',
    component: '../layouts/',
    routes: [
      { path: '/', redirect: '/index' },
      { path: '/login', component: './Login'},
      { path: '/index', component: './Index' },
      { path: '/registe', component: './Registe'},
      { path: '/information/:id', redirect: '/information/:id/list'},
      { path: '/information/:id/list', component: './Details/information'},
      { path: '/showform', component: './ShowForm' },
      { path: '/dateform', component: './DateForm' },
      { path: '/packageform', component: './PackageForm' },
      { path: '/billform', component: './BillForm' },
      
    ]
  }
]