const request = require("supertest");
const app = require("../src/app");
const api = request(app);
const mongoose = require("mongoose");

describe("Server Litmus test", () => {
    it("should test that the environment is in test mode", () => {
        expect(process.env.NODE_ENV).toBe("test");
    });

    it("should return 404 for the index address", async () => {
        const res = await api.get("/");
        expect(res.status).toBe(404);
    });

    afterAll(async (done) => {
        await mongoose.disconnect();
        done()
    });
});
