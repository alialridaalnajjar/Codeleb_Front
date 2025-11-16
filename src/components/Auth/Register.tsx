import { useState } from "react";
import { Link } from "react-router-dom";
import { RoleType } from "../../utils/Types";
import { type UserRole } from "../../utils/Types";
export default function Register() {
  const [user, setUser] = useState<UserRole>({
    username: "",
    email: "",
    password: "",
    role: RoleType.USER,
    created_at: new Date(),
    profile_photo_url: null,
    DOB: null,
    location: null,
    first_name: "",
    last_name: "",
  });
  const handleRegister = async () => {
    fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        alert("Registration successful!");
      } else {
        alert("Registration failed.");
      }
    });
  };
  return (
    <>
      <div className="lg:hidden min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-zinc-900 text-white p-5">
        <div className="flex flex-col items-center justify-center max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-linear-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              Join DevArt
            </h1>
            <h2 className="text-gray-400 text-sm">Elite CSFS Platform</h2>
          </div>

          <div className="w-full space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  First Name
                </label>
                <input
                  onChange={(e) =>
                    setUser({ ...user, first_name: e.target.value })
                  }
                  value={user.first_name}
                  type="text"
                  placeholder="Vladimir"
                  className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-600 focus:bg-slate-800/70 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Last Name
                </label>
                <input
                  value={user.last_name}
                  onChange={(e) =>
                    setUser({ ...user, last_name: e.target.value })
                  }
                  type="text"
                  placeholder="Petrovsky"
                  className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-600 focus:bg-slate-800/70 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Username
              </label>
              <input
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                type="text"
                value={user.username}
                placeholder="vladimir_dev"
                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-600 focus:bg-slate-800/70 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Email
              </label>
              <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-600 focus:bg-slate-800/70 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Password
              </label>
              <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
                type="password"
                placeholder="Enter your password"
                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-600 focus:bg-slate-800/70 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Role
              </label>
              <select
                onChange={(e) =>
                  setUser({
                    ...user,
                    role: e.target.value.toString() as RoleType,
                  })
                }
                value={user.role}
                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-amber-600 focus:bg-slate-800/70 transition"
              >
                <option value={RoleType.USER} className="bg-slate-900">
                  Student
                </option>
                <option value={RoleType.ADMIN} className="bg-slate-900">
                  Instructor
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Date of Birth
              </label>
              <input
                onChange={(e) =>
                  setUser({ ...user, DOB: new Date(e.target.value) })
                }
                type="date"
                value={user.DOB ? user.DOB.toISOString().split("T")[0] : ""}
                max={new Date().toISOString().split("T")[0]}
                aria-label="Date of Birth"
                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-amber-600 focus:bg-slate-800/70 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Location
              </label>
              <input
                onChange={(e) => setUser({ ...user, location: e.target.value })}
                value={user.location || ""}
                type="text"
                placeholder="Country, City"
                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-600 focus:bg-slate-800/70 transition"
              />
            </div>

            <button
              onClick={() => handleRegister()}
              className="w-full bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3 rounded-lg transition duration-200 mt-6 shadow-lg shadow-amber-900/50"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-400 mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-amber-500 font-medium hover:text-amber-400 transition"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:block hidden"></div>
      footer
    </>
  );
}
