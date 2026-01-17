// template pattern

// steps = pedefined in parent class

// SOLID principles

// S - Single Responsibility
// O - 
// L - Liskov
// I - 
// D-

class AuthService {

    login() {
        this.validate();
        this.processCredentials();
        this.createSession();
    }

    validate() {
        console.log("logic related to validation")
    }

    processCredentials() {
        throw new Error("processing needed to be implemented");
    }

    createSession() {
        console.log("logic related to session creating is here");
    }

}

class GoogleAuthService extends AuthService {

    processCredentials() {
        console.log("Implementation for credentials processing - google");
    }

}

class YahooEmailAuthService extends AuthService {
    processCredentials() {
        console.log("Implementation for credentials processing - yahoo");
    }
}

const googleService = new GoogleAuthService();
googleService.login();

const yahooService = new YahooEmailAuthService();
yahooService.login();