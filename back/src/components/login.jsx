import React from 'react';
import {Link} from 'react-router-dom'

export default ({handleSubmit,user}) => (
    <div className="d-flex justify-content-center">
        {user.id?(<h1>{`Ya estas Loggeado ${user.id}`}</h1>):(<form onSubmit={handleSubmit} method="POST">
            <div className="form-group">
                <label >Email address</label>
                <input name="email" type="email" className="form-control" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" className="form-control" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button><Link to={`/register`}><button className="btn btn-primary">Register</button></Link> 
        </form>)}
    </div>
);