const express = require('express');
const app = express();

    
/**
 * @swagger
 * /api/document/upload:
 *   post:
 *     tags:
 *       - Documents
 *     description: Creates a new Documents
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: documents
 *         type: file
 *       - name: id
 *         in: formData
 *         type: integer
 *       - name: title
 *         in: formData
 *         type: string
 *         require: true
 *       - name: description
 *         in: formData
 *         type: string
 *       - name: type
 *         in: formData
 *         type: string
 *         enum: [ "Regulation", "Report", "other"]
 *       - name: authority
 *         in: formData
 *         type: string
 *       - name: source
 *         in: formData
 *         type: string
 *       - name: market
 *         in: formData
 *         type: string
 *       - name: language
 *         in: formData
 *         type: string
 *         enum: [ "English", "Hindi", "other"]
 *       - name: country
 *         in: formData
 *         type: string
 *       - name: uploadedBy
 *         in: formData
 *         type: integer
 *     responses:
 *       ..:
 *         description: ..
 */


/**
 * @swagger
 * /api/documents/fetch/{fn}:
 *   get:
 *     tags:
 *       - Documents
 *     description: Returns a single USer
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: fn
 *         description: USer's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single Users
 */

/**
 * @swagger
 * /api/documents/list:
 *   get:
 *     tags:
 *       - Documents
 *     description: List
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A List Of Documents
 */

 /**
 * @swagger
 * /api/documents/search/{q}:
 *   get:
 *     tags:
 *       - Documents
 *     description: Returns a documents
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: q
 *         description: search
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Search successfull
 */



