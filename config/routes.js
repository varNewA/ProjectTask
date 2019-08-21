export default [
  
  {
    path:'/',
    component: '../layouts/',
    routes: [
      { path: '/', redirect: '/index' },
      { path: '/login', component: './Login'},
      { path: '/index', component: './Index' },
      { path: '/registe', component: './Registe'},
    ]
  }
]