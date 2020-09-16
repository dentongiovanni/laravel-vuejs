import rest from './header';

export const Auth = {
    login,
    logout

};

async function login(payload) {
    payload = {...payload};  
   await rest.post('api/auth/login',payload)
    .then(response =>{
      if (response.data.access_token) {
            localStorage.clear();
            localStorage.setItem('user', JSON.stringify(response.data.access_token));
        }
        return response;
    })
    .catch(response => this.handleResponse(response));
}

function logout() {
    localStorage.clear();
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}