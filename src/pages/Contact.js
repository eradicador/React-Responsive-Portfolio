import React from "react"

function Contact() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-9 bg-light mt-4 p-4 mb-5">
                    <h2 className="h2 font-weight-bolder">Contact</h2>
                    <hr></hr>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputName1">Name</label>
                            <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="exampleInputPassword1"></input>
                            <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone
                            else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormMessage1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                        </div>
                        <button type="submit" className="btn btn-info">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact