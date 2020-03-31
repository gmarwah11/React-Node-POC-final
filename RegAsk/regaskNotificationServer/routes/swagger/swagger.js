/**
 * @swagger
 * /sendEmail:
 *   post:
 *     tags:
 *       - EmailNotification
 *     description: Send a mail to User
 *     parameters:
 *       - in: formData
 *         name: emailId
 *         type: string
 *         require: true
 *       - name: subject
 *         in: formData
 *         type: string
 *         require: true
 *       - name: tempPassword
 *         in: formData
 *         type: string
 *         require: true 
 *     responses:
 *       ..:
 *         description: ..
 */