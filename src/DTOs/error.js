/**
 * @swagger
 * components:
 *  schemas:
 *      Error:
 *          type: object
 *          properties:
 *              type:
 *                  anyOf:
 *                      - type: integer
 *                      - type: string
 *                  example: 413
 *              message:
 *                  type: string
 *                  example: I'm a teapot
 */