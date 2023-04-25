import express from 'express';
import handleErrorAsync from '../service/handleErrorAsync';
import usersControllers from '../controllers/users';
import { isAuth } from '../service/auth';


const router = express.Router();

/* GET users listing. */

router.post('/sign_up', handleErrorAsync(usersControllers.signUp));
router.post('/sign_in', handleErrorAsync(usersControllers.signIn));
router.get('/profile', isAuth, handleErrorAsync(usersControllers.getProfile));
router.patch('/profile', isAuth, handleErrorAsync(usersControllers.patchProfile));
router.post('/updatePassword', isAuth, handleErrorAsync(usersControllers.updatePassword));

module.exports = router;
