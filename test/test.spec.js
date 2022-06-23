const { assert, expect } = require("chai")
const request = require("supertest")
const winston = require("winston")
const moment = require("moment")

const baseUrl = "http://www.httpbin.org"
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "combined.log" }),
  ],
})

describe("TEST FEATURE NAME", () => {
  describe("TEST CASE NAME", () => {
    it("Step: Post", async function () {
      const res = await request(baseUrl).post(`/post`).send({
        from: "01/01/2020",
        to: "01/31/2020",
      })

      expect(res.status).to.eql(200)
      logger.info(res)
      console.log("====================")
    })

    it("Step: Get", async function () {
      const res = await request(baseUrl).get(`/get`)

      expect(res.status).to.eql(200)
      logger.debug(res)
      console.log("====================")
    })

    it("Step: Put", async function () {
      const date = moment().add(2, "days").format("DD-MM-YYYY")

      const res = await request(baseUrl).put(`/put`).send({
        from: date,
        to: date,
      })

      expect(res.status).to.eql(200)

      logger.error(res)

      console.log("====================")
    })

    it("Step: Patch", async function () {
      const res = await request(baseUrl).patch(`/patch`).send({
        from: "01/01/2020",
        to: "01/31/2020",
      })
      expect(res.status).to.eql(200)
      console.log("********************")
      logger.info(res)
      console.log("********************")
      logger.debug(res)
      console.log("********************")
      logger.error(res)
      console.log("********************")
    })
  })
})
