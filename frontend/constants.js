export const API_URL = process.env.API_URL

export const URLS = {
    googleLogin: `${process.env.API_URL}connect/google`,
    socialLoginCallback: (provider) => `${process.env.API_URL}auth/${provider}/callback`,
}