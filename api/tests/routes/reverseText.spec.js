/* eslint-disable */
const { expect } = require('chai')
const session = require('supertest-session')
const app = require('../../src/app.js')
// const reverseText = require("../../src/routes/reverseText.js");

const request = session(app)

// Test case: 1

// Test case: 2
const str2 = 'CopyWrite'

// Test case: 3
const str3 = 'Arroz con leche'

// Test case: 4
const str4 = 'arenera'

// Test case: 5
const str5 = 'sometemos'

describe(`Reverse string test`, () => {
  it("should responds with an error 'no text'", (done) => {
    request.get(`/iecho?text=`).end(function (err, res) {
      console.log(res.body)
      expect(res.body).to.have.property('error').to.be.equal('no text')
      done()
    })
  })

  it('should responds with status code 400', (done) => {
    request.get(`/iecho?text=`).end(function (err, res) {
      console.log(res.body)
      expect(res.status).to.equal(400)
      done()
    })
  })

  it('should responds with reverse string of CopyWrite', (done) => {
    request.get(`/iecho?text=${str2}`).end(function (err, res) {
      console.log(res.body)
      expect(res.body).to.have.property('text').to.be.equal('etirWypoC')
      expect(res.body).to.have.property('palindrome').to.be.equal(false)
      expect(res.status).to.equal(200)
      done()
    })
  })

  it('should responds with reverse string of Arroz con Leche', (done) => {
    request.get(`/iecho?text=${str3}`).end(function (err, res) {
      console.log(res.body)
      expect(res.body).to.have.property('text').to.be.equal('ehcel noc zorrA')
      expect(res.body).to.have.property('palindrome').to.be.equal(false)
      expect(res.status).to.equal(200)
      done()
    })
  })

  it('should responds with reverse string of arenera', (done) => {
    request.get(`/iecho?text=${str4}`).end(function (err, res) {
      console.log(res.body)
      expect(res.body).to.have.property('text').to.be.equal('arenera')
      expect(res.body).to.have.property('palindrome').to.be.equal(true)
      expect(res.status).to.equal(200)
      done()
    })
  })

  it('should responds with reverse string of sometemos', (done) => {
    request.get(`/iecho?text=${str5}`).end(function (err, res) {
      console.log(res.body)
      expect(res.body).to.have.property('text').to.be.equal('sometemos')
      expect(res.body).to.have.property('palindrome').to.be.equal(true)
      expect(res.status).to.equal(200)
      done()
    })
  })
})
