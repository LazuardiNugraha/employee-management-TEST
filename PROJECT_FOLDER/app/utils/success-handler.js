const success = (res, {
    status = 200,
    message = "Success",
    data = null,
    meta = null
} = {}) => {
    const payload = {
        success: true,
        message,
        data
    };

    if (meta) payload.meta = meta;

    return res.status(status).json(payload);
};

const created = (res, data, message = "Data Created Successfully") => {
    return success(res, {
        status: 201,
        message,
        data
    });
};

module.exports = {
    success,
    created
}