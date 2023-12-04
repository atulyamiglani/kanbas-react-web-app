import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  const save = async () => {
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("signin");
  };

  return (
    <div className="w-50 p-10" style={{ padding: "100px" }}>
      <Link to="/kanbas/admin/users" className="btn btn-warning w-100">
        Users
      </Link>
      <h1>Account</h1>

      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="signin">Sign In</Link>
        </li>
        <li className="nav-item">
          <Link to="signup">Sign up</Link>
        </li>
        <li className="nav-item">
          <Link to="">account</Link>
        </li>
      </ul>

      {account && (
        <div>
          <label>firstName</label>
          <input
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <label>password</label>
          <input
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <label>lastname</label>
          <input
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <label>date of birth</label>
          <input
            value={account.dob}
            type="date"
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <label>email</label>
          <input
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-primary" onClick={save}>
            Save
          </button>
          <button onClick={signout}>Signout</button>
        </div>
      )}
    </div>
  );
}
export default Account;
