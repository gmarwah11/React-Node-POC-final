const express = require('express');
const app = express();

    
/**
 * @swagger
 * /api/account/add:
 *   post:
 *     tags:
 *       - Documents
 *     description: Creates a new Documents
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: fname
 *         in: formData
 *         type: string
 *         require: true
 *       - name: lname
 *         in: formData
 *         type: string
 *       - name: roleId
 *         in: formData
 *         type: string
 *       - name: company
 *         in: formData
 *         type: string
 *       - name: country
 *         in: formData
 *         type: string
 *         enum: [ "USA", "Singapore", "Brazil"]
 *     responses:
 *       200:
 *         description: status
 */

