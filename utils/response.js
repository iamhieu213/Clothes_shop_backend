// Centralized response utilities for API consistency
export const sendSuccess = (res, status = 200, data, message) => {
    const response = {
        success: true,
        data,
        message: message || "Operation completed successfully"
    };
    return res.status(status).json(response);
};

export const sendError = (res, error, defaultStatus = 500) => {
    const status = error.status || defaultStatus;
    const message = error.message || "Operation failed";
    
    return res.status(status).json({
        success: false,
        message,
        error: process.env.NODE_ENV === 'development' ? message : undefined
    });
};

export const sendValidationError = (res, errors) => {
    const message = Array.isArray(errors) 
        ? errors.map(err => err.message || err).join(', ')
        : errors.message || errors || "Validation failed";
    
    return res.status(400).json({
        success: false,
        message,
        errors: Array.isArray(errors) ? errors : undefined
    });
};

