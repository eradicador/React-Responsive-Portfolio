import React from "react"

function Contact() {
    return (

        <div class="container">
            <div class="row">
                <div class="col-9 bg-light mt-4 p-4 mb-5">
                    <h2 class="h2 font-weight-bolder">Contact</h2>
                    <hr></hr>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputName1">Name</label>
                            <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control" id="exampleInputPassword1"></input>
                            <small id="emailHelp" class="form-text text-muted">I'll never share your email with anyone
                            else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormMessage1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                        </div>
                        <button type="submit" class="btn btn-info">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact