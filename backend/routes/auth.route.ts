import { Router } from 'express';
import passport from 'passport';



const authRouter = Router();

authRouter.get('/google',
    passport.authenticate('google', { scope: ['profile'] })
);

authRouter.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

export default authRouter;