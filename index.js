const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/', function(req, res) {
    res.send('welcome to Team Logistics Nig ltd form')
})

app.post('/api/forminfo', async (req,res) => {
//   console.log(res);
    let data = await req.body;
    
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        secure: true,
        port:465,
        auth:{
            user: 'testwilliamscode@gmail.com',
            pass: process.env.PASSWORD
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
            secureProtocol: "TLSv1_method"
        },
    });

    let mailOptions = {
        from:data.email,
        to:'info@teamlogisticsng.com',
        subject: `Message from ${data.companyName}`,
        html:`
        
        <h3>Shipper's information</h3>
            <u>
                <li>companyName:${data.companyName}</li>
                <li>address:${data.address}</li>
                <li>city:${data.city}</li>
                <li>state:${data.state}</li>
                <li>country:${data.country}</li>
                <li>zipCode:${data.zipCode}</li>
                <li>phone:${data.phone}</li>
                <li>fax:${data.fax}</li>
                <li>contactPerson:${data.contactPerson}</li>
                <li>email:${data.email}</li>
                <li>actualwt:${data.actualwt}</li>
                <li>volumewt:${data.volumewt}</li>
                <li>expectedwt:${data.expectedwt}</li>
                <li>pieces:${data.pieces}</li>
                <li>dg:${data.dg}</li>
                <li>expectedDate:${data.expectedDate}</li>
                <li>description:${data.description}</li>
                <li>modeOfShipping:${data.modeOfShipping}</li>
            </ul>

            <h3>Consignee's information</h3>

            <ul>
                <li>consigneeCompanyName:${data.consigneeCompanyName}</li>
                <li>fullAdress:${data.fullAddress}</li>
                <li>tel:${data.tel}</li>
                <li>consigneeFax:${data.consigneeFax}</li>
                <li>consigneeContactPerson:${data.consigneeContactPerson}</li>
                <li>consigneeEmail:${data.consigneeEmail}</li>
            </ul>

        `
    };
    // console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, (error,response) => {
        
        if(error){
         res.send(error)
        } else {
            res.send('Success')
        }
    })

    smtpTransport.close();


})

const PORT = process.env.PORT||3001;

app.listen(PORT,() => {
    console.log(`Server starting at port ${PORT}`);
})