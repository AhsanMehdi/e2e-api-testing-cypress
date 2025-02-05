// call the post method using custom command to create posts
describe ("Create Post API", ()=>{
    it ("creatomg mew post", ()=>{
        cy.create_post('hello','to demo test', 1)
            .then((response)=>{
                cy.log(`post created with id :${response.status}`)
            }) 
    })
})

