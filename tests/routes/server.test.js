describe('Server Litmus test', () => {
    it('should test that the environment is in test mode', () => {
        expect(process.env.NODE_ENV).toBe('test')
    })
})