const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Form = require('../models/Forms')
const nodemailer = require("nodemailer")

async function main(mailerid){
    // let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user: 'deepakrajput5122000@gmail.com',
            pass: 'fekyvwoimpfdfpgj'
        }
    });
    
    let info = await transporter.sendMail({
        from: '"Deepak Kumar || Full Stack(MERN) Developer" <deepakmogha11@gmail.com>', // sender address
        to: mailerid, // list of receivers
        subject: "Form Submitted", // Subject line
        text: "These mail is from Deepak Kumar.Your form is successfully submitted."
        // html: "<b>Hello world?</b>", // html body
      });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
main().catch(console.error)

router.get('/fetchall',async(req,res)=>{
    try {
        const forms = await Form.find()
        res.json(forms)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

router.post('/addform',[
    body('name','Enter a valid name').isLength({min:6}),
    body('dob','Enter a dob'),
    body('email','Enter a valid email').isEmail(),
    body('phone_no').isLength({ min: 10 }),
],async(req,res)=>{
    try{
        const {
            name,
            dob,
            email,
            phone_no}=req.body

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array()
                })
            }
            const form =await new Form({
                name,
                dob,
                email,
                phone_no
            })
            const saveform = await form.save()
            res.json(saveform)
            var mailerid=saveform.email
            main(mailerid)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Some error occured");
        }  
    })
    module.exports = router;