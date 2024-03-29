import React from 'react'

const SignIn = ({onRouteChange}) => {
    return (
        <main className="pa4 black-80 flex justify-center">
            <form className=" mw6">
                <fieldset id="sign_up" className="ba b--transparent">
                <legend className="f2 fw6 ph0 mh0 measure center ">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                </div>
                </fieldset>
                <div className="">
                <input onClick={() => {onRouteChange('home')}} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                </div>
                <div className="lh-copy mt3">
                <p onClick={() => {onRouteChange('register')}} className="f6 link dim black db pointer">Register</p>
                </div>
            </form>
        </main>
    );
}
export default SignIn;