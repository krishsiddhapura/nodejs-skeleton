
module.exports = class Common {
    sendError(res, message, code = 400) {
        res.status(code).json({
            'status' : false,
            'message' : message
        });
    }

    sendSuccess(res, message, code = 200) {
        res.status(code).json({
            'status' : true,
            'message' : message
        });
    }

    sendValidationError(res, errors) {
        res.status(400).json({
            'status' : false,
            'errors' : errors
        });
    }

    sendResponse(res, message, data) {
        res.status(200).json({
            'status' : true,
            'message' : message,
            'data' : data
        });
    }

    sendErrorResponse(res, message, data, code = 400) {
        res.status(code).json({
            'status' : false,
            'message' : message,
            'data' : data
        });
    }

}
