class apierror extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        error=[],
        statck=""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null,
        this.message= message,
        this.sucess = false;
        this.error = this.errors
        if ( statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this,this.constuctor)
        }
    }
}
export {apierror}