const asyncWrapper = (fn) => {

    return async(req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {

            next(eror)
            
        }
    }
}

module.exports = asyncWrapper