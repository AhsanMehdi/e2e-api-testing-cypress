// import the endpoints 
import { ENDPOINTS } from "./endpoints";

// custom command to create a post
Cypress.Commands.add("create_post", (title, body, userId ) => {
    cy.request({
        method: "POST",
        url: ENDPOINTS.posts.create,
        body: {title, body, userId
            
        }
    });
});