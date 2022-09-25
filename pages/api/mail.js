// import nodemailer from "nodemailer"

// export default async function mail(req,res){
//   const transporter=nodemailer.createTransport({
//     port:587,
//     host:"smtp.redwine.digital",
//     auth:{
//       user: process.env.MAIL__ID,
//       pass:process.env.MAIL__PASSWORD
//     },
//     tls:{
//         rejectUnauthorized:true
//     }
//   })

//   const mailData={
//     from: req.body.email,
//     to:process.env.MAIL__ID,
//     subject: `Message from ${req.body.name}`,
//     text:req.body.message + " | Sent from: " + req.body.email,
//     html:`<h2>Sender Mail: ${req.body.email}</h2><br /><h3>Sender Name: ${req.body.name}</h3> <br /> <p>Sender Message: ${req.body.message}</p>`
//   }


//   try {
//     const emailRes=await transporter.sendMail(mailData)
//     res.status(201).json({message:"Email Sent",data: emailRes})
//   } catch (error) {
//     console.log(error)
//     res.status(501).json({message:"Error Occured",error})
    
//   }
// }