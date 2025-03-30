export default function Login() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
          {/* Login Form */}
          <div className="p-8 w-full md:w-2/3 border-r">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Login to Bangladeshi Matrimony
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Matrimony ID / Email"
                className="input input-bordered w-full"
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
              <div className="flex items-center justify-between text-sm text-gray-600">
                <a href="#" className="text-blue-500 hover:underline">
                  Forgot Password?
                </a>
                <label className="flex items-center">
                  <input type="checkbox" className="checkbox checkbox-primary mr-2" />
                  Keep me logged in
                </label>
              </div>
              <button className="btn btn-primary w-full">Login</button>
            </div>
          </div>
  
          {/* Registration Section */}
          <div className="p-8 w-full md:w-1/3 bg-gray-50">
            <h3 className="text-lg font-bold text-blue-500 mb-4">
              JOIN BANGLADESHI MATRIMONY
            </h3>
            <ul className="text-gray-600 text-sm space-y-2 mb-4">
              <li>✅ The Largest & Exclusive Community site for Bangladeshi singles across the world</li>
              <li>✅ Thousands of Bangladeshi profiles worldwide</li>
              <li>✅ Trustworthy, efficient, and confidential</li>
              <li>✅ Best matching profile alerts through Email</li>
            </ul>
            <button className="btn btn-warning w-full">Register FREE</button>
          </div>
        </div>
      </div>
    );
  }
  