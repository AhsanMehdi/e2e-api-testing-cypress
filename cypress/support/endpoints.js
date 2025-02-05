// received the base url from config file
export const BASE_URL = Cypress.config("baseUrl");

export const ENDPOINTS ={

    posts:{
        create: `/${BASE_URL}/posts`
    }
}
