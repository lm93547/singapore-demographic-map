import { authenticateApi } from '../../utils/API/authenticateApi';
import * as ky from 'ky';

const mock = jest.mock('ky')
mock.spyOn(ky.default, 'post').mockImplementation(() => {
    return {
        json: () => {
            return {
                token: 'token'
            }
        }
    } as any
})

describe("The authenticator API tests", ()=>{    
    test("Auth OneMap returns a mocked token", async ()=>{
        const response = await authenticateApi('onemap');
        console.log("🚀 ~ file: authenticateApi.test.ts ~ line 5 ~ test ~ response", response)
        expect(response).toStrictEqual({token: "token"});
    })
})