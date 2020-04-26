const request = require("supertest");
const goodUser = require("./goodUser");
const app = require("../../src/app");
let api = request(app);
const mongoose = require("mongoose");

describe("User endpoints", () => {
    it("should create a new User", async () => {
        const res = await api.post("/users").send(goodUser);
        expect(res.status).toBe(201);
    });

    it("should NOT allow a duplicate User", async () => {
        let dupeUser = {
            ...goodUser,
            username: "immaDupe",
            email: "dupe@test.com",
        };
        const res1 = await api.post("/users").send(dupeUser);
        expect(res1.status).toBe(201);

        dupeUser = {
            ...goodUser,
            username: "immaDupe", // Both username and email must be unique
            email: "different@email.com",
        };

        const res2 = await api.post("/users").send(dupeUser);
        expect(res2.status).toBe(400);

        dupeUser = {
            ...goodUser,
            username: "immaDupeNot",
            email: "dupe@test.com", // Both username and email must be unique
        };
        const res3 = await api.post("/users").send(dupeUser);
        expect(res3.status).toBe(400);
    });

    it("should NOT create users that do not pass validation", async () => {
        let badUser = {
            ...goodUser,
            email: "somemail@email.com",
        };

        badUser = {
            ...goodUser,
            username: "iAmAVeryLongUsernameThatSHouldNotWork", //More than 15 chars
        };
        const res1 = await api.post("/users").send(badUser);
        expect(res1.status).toBe(400);

        badUser = {
            ...goodUser,
            username: "Th!s^I$.N*tOk", //Username may only contain letters, numbers, and underscores
        };
        const res2 = await api.post("/users").send(badUser);
        expect(res2.status).toBe(400);

        badUser = {
            ...goodUser,
            username: "no", //Less than 3 chars
        };
        const res3 = await api.post("/users").send(badUser);
        expect(res3.status).toBe(400);

        badUser = {
            ...goodUser,
            password: "pass", //Pass less than 8 chars
        };
        const res4 = await api.post("/users").send(badUser);
        expect(res4.status).toBe(400);

        badUser = {
            ...goodUser,
            email: "email", //Not an email address
        };
        const res5 = await api.post("/users").send(badUser);
        expect(res5.status).toBe(400);
    });

    it("should NOT authenticate non-existant users", async () => {
        const { password } = goodUser;
        const authUser = {
            username: "DoIEvenExist",
            password,
        };

        const res1 = await api.post("/users").send(authUser);
        expect(res1.status).toBe(400);
    });

    it("should NOT authenticate users with invalid credentials", async () => {
        let authUser = {
            ...goodUser,
            username: "iForgotMypass",
            email: "iforgotmy@email.com",
        };

        const res1 = await api.post("/users").send(authUser);
        expect(res1.status).toBe(201);

        const { username } = authUser;
        let authLogin = {
            username,
            password: "iForgotIt",
        };

        const res2 = await api.post("/users").send(authLogin);
        expect(res2.status).toBe(400);
    });

    it("should authenticate users with valid credentials", async () => {
        let authUser = {
            ...goodUser,
            email: "otherAuth1@email.com",
            username: "authMan1",
        };

        const res1 = await api.post("/users").send(authUser);
        expect(res1.status).toBe(201);

        const { username, password } = authUser;
        let authLogin = {
            username,
            password,
        };

        const res2 = await api.post("/users").send(authLogin);
        expect(res2.status).toBe(400);
    });

    it("should authenticate users with either email OR username", async () => {
        let authUser = {
            ...goodUser,
            email: "otherAuth2@email.com",
            username: "authMan2",
        };

        const res1 = await api.post("/users").send(authUser);
        expect(res1.status).toBe(201);

        authUser = {
            ...authUser,
            password: "iForgotIt",
        };

        const res2 = await api.post("/users").send(authUser);
        expect(res2.status).toBe(400);
    });

    afterAll(async (done) => {
        await mongoose.disconnect();
        done()
    });
});
