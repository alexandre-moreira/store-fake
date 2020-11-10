import axios from 'axios';

const uri = 'https://fakestoreapi.com';

const connection = axios.create({
    baseURL: uri,
  });

const implantations = {
  async storeUser(user){
    try{
      const response = await connection.post('/users', user);
      if(response.status !== 201){
        throw new Error("Não foi possivel cadastrar o usuário, tente novamente")
      }

      return {
        error: false,
        Details:"Usuario cadastrado com Sucesso!",
        response:data,

    }catch(err){
     error: false,
     
     data: response.data,
    }
}
export default apiFakeStore;