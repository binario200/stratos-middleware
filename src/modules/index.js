import userRoutes from './users/user.routes';
import resourceRoutes from './resources/resource.routes';

import { authJwt } from "../services/auth.services";

 export default app => {
     app.use('/api/v1/users', userRoutes);
     app.use('/api/v1/resources', resourceRoutes);
     app.get('/hello', authJwt, (req,res)=>{
         res.send('this is private!');
     })
 };