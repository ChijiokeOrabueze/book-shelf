import { PassportStatic } from "passport";
import passportGoogleOauth from 'passport-google-oauth20';
import axios from 'axios';

const GoogleStrategy = passportGoogleOauth.Strategy;

const GOOGLE_CLIENT_ID = "16406776645-87qcnnbmpalmkku7b24uhqarpl3jdb5q.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

export default (passport: PassportStatic) => {
    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID as string,
        clientSecret: GOOGLE_CLIENT_SECRET as string,
        callbackURL: "/auth/google/callback"
    },
        async (accessToken: string, refreshToken: string, profile: any, cb: any) => {
            // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            //   return cb(err, user);
            // });
            console.log(profile);

            const data = {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                "client_id": 'admin-cli',
                client_secret: "GEJAMJx4oqQVRLyoPUpajn2ZJ5VAwGgG",
                "subject_token": accessToken,
                "subject_issuer": "google",
                "subject_token_type": 'urn:ietf:params:oauth:token-type:access_token'
            };

            const token = await axios({
                url: "http://localhost:8080/realms/myrealm/protocol/openid-connect/token",
                // httpsAgent: agent,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams(data)
            }).then((resp: any) => {
                console.log(resp);
                // return {
                //   access_token: resp?.data?.access_token,
                //   refresh_token: resp?.data?.refresh_token
                // }
            }).catch((err: any) => {

                // if (err?.response?.data?.error_description === "Invalid user credentials"){
                //   return {err: "invalidCredentials"}
                // }
                console.log(err)
                // console.log(err?.response?.data);
                // return {err: "unableToMail"}
            });

            console.log({ token })
            //   if (token && token.err) {
            //     throw token.err
            //   }else {
            //     return token;
            //   }



        }
    ));
}
