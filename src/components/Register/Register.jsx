
const Register = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register</h1>
                        <p className="py-6">
                            Register here to become a member of BDShop and enjoy our exciting deals !
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="Name" />
                                <label className="label">Phone</label>
                                <input type="text" className="input" placeholder="Phone" />
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;