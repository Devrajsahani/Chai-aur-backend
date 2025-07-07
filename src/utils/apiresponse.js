class apiresponse{
    constuctor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data=data
        this.message= message;
    }

}
// there are different types of api errors which are known as server error and each of them have a different meaning