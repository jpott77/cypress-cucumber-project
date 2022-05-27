class Authentication{
    get userName(){
        return '#user-name'
    }

    get password(){
        return '#password'
    }

    get loginButton(){
        return '#login-button'
    }

    get error(){
        return '.error-message-container  h3'
    }

    /**
     *  Logins in with a user
     * @param {String} userType - type of user to log in with
     * 
     */
    login(userType,password) {
        cy.get(this.userName).type(userType)
        cy.get(this.password).type(password)
        cy.get(this.loginButton).click()
    }
}
module.exports = new Authentication()