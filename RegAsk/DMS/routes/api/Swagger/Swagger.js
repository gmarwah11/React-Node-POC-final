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
 * /api/document/fetch/{fn}:
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
 * /api/document/list:
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
 * /api/document/search/{q}:
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
 
/**
 * @swagger
 * /user/account/signup:
 *   post:
 *     tags:
 *       - Account
 *     description: Signup
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: formData
 *         name: username
 *         type: string
 *       - name: firstname
 *         in: formData
 *         type: string
 *       - name: lastname
 *         in: formData
 *         type: string
 *         require: true
 *       - name: ex
 *         in: formData
 *         type: string
 *       - name: phone
 *         in: formData
 *         type: string
 *         enum: [ "Regulation", "Report", "other"]
 *       - name: location
 *         in: formData
 *         type: string
 *       - name: industry
 *         in: formData
 *         type: string
 *       - name: role
 *         in: formData
 *         type: string
 *       - name: company
 *         in: formData
 *         type: string
 *         enum: [ "English", "Hindi", "other"]
 *     responses:
 *       ..:
 *         description: ..
 */

 /**
 * @swagger
 * /user/account/session:
 *   get:
 *     tags:
 *       - Account
 *     description: Current Session
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Current Session
 */

 /**
 * @swagger
 * /user/account/login:
 *   post:
 *     tags:
 *       - Account
 *     description: Login
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: formData
 *         name: username
 *         type: string
 *         require: true
 *       - name: password
 *         in: formData
 *         type: string
 *         require: true
 *     responses:
 *       ..:
 *         description: ..
 */

 /**
 * @swagger
 * /user/account/changePassword:
 *   post:
 *     tags:
 *       - Account
 *     description: Change Password
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: formData
 *         name: tempPassword
 *         type: string
 *         require: true
 *       - name: newPassword
 *         in: formData
 *         type: string
 *         require: true
 *       - name: userName
 *         in: formData
 *         type: string
 *         require: true
 *     responses:
 *       ..:
 *         description: ..
 */

 /**
 * @swagger
 * /user/account/logout:
 *   post:
 *     tags:
 *       - Account
 *     description: Logout
 *     consumes:
 *       - application/json
 *     responses:
 *       ..:
 *         description: ..
 */