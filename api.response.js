function create(statusCode, status){
    return {
        statusCode: statusCode,
        status: status
    }
}

const OK = create(0, "OK");
const NULL_ENTRY = create(1001, "NULL ENTRY");
const CREATE_FAILED = create(1002, "CREATE FAILED");
const UPDATE_FAILED = create(1003, "UPDATE FAILED");
const DELETE_FAILED = create(1004, "DELETE FAILED");
const USER_EXISTS = create(2001, "USER EXISTS");
const PASSWORD_MISMATCH = create(2002, "PASSWORD MISMATCH");

module.exports.create = create;
module.exports.OK = OK;
module.exports.CREATE_FAILED = CREATE_FAILED;
module.exports.UPDATE_FAILED = UPDATE_FAILED;
module.exports.DELETE_FAILED = DELETE_FAILED;
module.exports.NULL_ENTRY = NULL_ENTRY;
module.exports.USER_EXISTS = USER_EXISTS;
module.exports.PASSWORD_MISMATCH = PASSWORD_MISMATCH;