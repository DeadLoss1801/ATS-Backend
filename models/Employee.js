const mongoose = require('mongoose');
const validator = require('validator');


const employeeSchema = new mongoose.Schema({
    job_title: {
        type: String,
        required: true
    },
    date_of_application: {
        type: String,
        required: true
    },
    source_of_application: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
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
    phone: {
        type: String,
        required: true
    },
    currentLocation: {
        type: String,
        required: true
    },
    preferredLocation: {
        type: String,
        required: true
    },
    totalExperience: {
        type: Number,
        min: 0
    },
    relevantExperience: {
        type: Number,
        min: 0
    },
    reason_for_change: {
        type: String
    },
    current_company_name: String,
    current_company_designation: String,
    Department: {
        type: String
    },
    Role: String,
    Industry: String,
    skills: [{
        types: String
    }],
    ctc: {
        type: Number
    },
    expected_ctc: {
        type: Number,
        required: true
    },
    notice_period: {
        type: String,
        required: true
    },
    last_working_day: {
        type: String
    },
    undergraduate_Degree: {
        type: String,
        required: true
    },
    ug_specialization: {
        type: String
    },
    postgraduation_degree: {
        type: String
    },
    pg_specialization: {
        type: String
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
    },
    martial_status: {
        type: String,
        required: true,
        enum: ['single', 'married', 'divorced', 'widowed']
    },
    home_city: {
        type: String,
        required: true
    },
    currentLocation: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }
})

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;