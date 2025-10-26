import  cypressCommands  from '../support/commands'

describe('Restful API Dev single endpoint test', () => {
  const baseUrl = 'https://api.restful-api.dev/objects';

  it('should fetch a known object successfully', () => {
    cy.request('GET', `${baseUrl}/7`).then((response) => {
    //  Check the HTTP status
      expect(response.status).to.eq(200);

    //  Check that the response has expected structure
      expect(response.body).to.have.property('id', '7');
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('data');
  
    });
    
    it('should return 404 for a non-existent object', () => {
    //  Check that the error response works
    cy.request({
      method: 'GET',
      url: `${baseUrl}/9999`,
      failOnStatusCode: false, 
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
  });
});