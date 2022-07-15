import ky from 'ky';

export const authenticateApi = async (type: 'onemap' | 'ura') => {
    if(type === 'onemap'){
        const token = 
            await ky.post(
                'https://developers.onemap.sg/privateapi/auth/post/getToken', 
                {json: 
                    {email: process.env.REACT_APP_EMAIL, 
                    password: process.env.REACT_APP_PASSWORD}}
                ).json();
        
        return token;
    }
}