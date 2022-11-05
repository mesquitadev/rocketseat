import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333", //Url da tua api
});



novoObj = []

const obj = api.get('rota', response => response.data)

obj.atributo = novo



export default api;
