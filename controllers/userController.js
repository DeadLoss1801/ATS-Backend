const Employee = require('../models/Employee');


// code for creating user
exports.createUser = async (req, res) => {
    try {
        const candidate = await Employee.create(req.body);

        res.status(201).json({
            message: "Candidate profile created",
            data: {
                candidate
            }
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

// access the user by the ID
exports.getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const candidate = await Employee.findById(id);

        res.status(200)
            .json({
                message: "Success",
                data: {
                    candidate
                }
            })

    } catch (error) {
        res.status(400)
            .json({
                message: error.message
            })
    }
}