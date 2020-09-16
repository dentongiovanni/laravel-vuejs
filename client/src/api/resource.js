import rest from './header';


export const Resource = {
    query,
    save,
    update,
    destroy,

};

async function query(address) {
      return await rest.get(`api/${address}`).then(response =>response.data).catch(response =>  console.log(response));

}
async function save(payload) {
   return await rest.post(`api/${payload.query}`,payload).then(response => response.data).catch(response => console.log(response));
}

async function update(payload) {
   return  await rest.put(`api/${payload.query}/${payload.id}`,payload).then(response =>response.data).catch(response =>  console.log(response));
}

async function destroy(payload) {
   return  await rest.delete(`api/${payload.query}/${payload.id}`).then(response =>response.data).catch(response =>  console.log(response));
}

