class RegexValidation {
    private emailRegex: RegExp;

    constructor() {
        this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    }

    validateEmail(email: string): boolean {
        return this.emailRegex.test(email);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new RegexValidation();
