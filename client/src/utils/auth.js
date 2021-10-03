import decode from 'jwt-decode';

class AuthService {

    getProfile() {
        return decode(this.getToken())
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/Home');
    }

    loggedIn() {
        const token = this.getToken();
        if (token && !this.isTokenExpired(token)) {
            return true
        }
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }

}

export default new AuthService();