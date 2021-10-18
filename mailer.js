var mailer = function() {
    var nodemailer = require('nodemailer');
    
    var transporter;

    var init = function(emailHost, emailUser, emailPassword, emailPort, emailSecure) {
        var isSecure = false;
        var portNumber = 25;
        if (emailSecure == "true") {
            isSecure = true;
        }

        if (emailPort != null && emailPort != undefined && emailPort.length > 0) {
            portNumber = parseInt(emailPort);
        }

        transporter = nodemailer.createTransport({
            host: emailHost,
            port: portNumber,
            secure: isSecure,
            auth: {
                user: emailUser,
                pass: emailPassword
            }
        });
    }
    
    var sendEmail = function(fromAddress, toAddress, mailSubject, mailMessage, htmlContent, pdfFile, callback, errorCallback) {        
        var mailOptions = {
            from: fromAddress,
            to: toAddress,
            subject: mailSubject,
            text: mailMessage,
            html: htmlContent,
            attachments: [
                {   // filename and content type is derived from path
                    path: pdfFile
                }
            ]
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              errorCallback();
            } else {
              console.log('Email sent: ' + info.response);
              callback();
            }
        });
    }

    return {
        sendEmail: sendEmail,
        init: init
	};
    
}();
module.exports = mailer;