/*
Name  
Email  
Phone
Address
Website(link)
Industry
Size
Founded !
Description 
Employees (number)
Reviews !
Rating !
Services  
Packages! 
Social media links 
Images
*/


const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');


const employerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name should be present"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email should be present"],
        lowercase: true,
        validate: {
            validator: validator.isEmail,
            message: "Invalid email address"
        }
    },
    password: {
        type: String,
        required: [true, "Password should be present"],
        minLength: 8
    },
    confirmPassword: {
        type: String,
        required: [true, "confirm the password"],
        minLength: 8,
        validate: {
            validator: function (v) {
                return v === this.password;
            },
            message: "Confirm Password must match Password"
        }
    },
    phone: {
        type: String,
        required: [true, "Phone Number should be present"]
    },
    address: {
        type: String,
        required: [true, "Address should be present"]
    },
    website: {
        type: String,
        required: [true, "Website link should be present"]
    },
    industry: {
        type: String, // field
        required: [true, "Industry should be mentioned"]
    },
    size: {
        type: String,
    },
    founded: {
        type: Date
    },
    description: {
        type: String
    },
    employees: {
        type: Number // no. of employess
    },
    socialMediaLinks: {
        type: mongoose.Schema.Types.Mixed,
    },
    logo: {
        type: String
    },
    images: [{
        type: String
    }]

})


employerSchema.pre('save', async (next) => {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next();

    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    // Delete Confirmpassword field
    this.confirmPassword = undefined;
    next();
})


// this is to compare the password 
employerSchema.method.comparePassword = async (
    candidatePassword,
    userPassword
) => {
    return await bcrypt.compare(candidatePassword, userPassword);
};

