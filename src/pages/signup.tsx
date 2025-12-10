// import React, { useState } from 'react';
// import Layout from '@theme/Layout';
// import apiClient from '../services/apiClient';
// import styles from './signup.module.css';
// import {useHistory} from '@docusaurus/router';

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [fullName, setFullName] = useState('');
//   const [error, setError] = useState('');
//   const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       await apiClient.signup({ fullName, email, password });
//       history.push('/signin'); // Redirect to signin page on successful signup
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <Layout title="Sign Up">
//       <div className={styles.signupContainer}>
//         <form className={styles.signupForm} onSubmit={handleSubmit}>
//           <h2>Sign Up</h2>
//           {error && <p className={styles.error}>{error}</p>}
          
//           <div className={styles.formGroup}>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//            <div className={styles.formGroup}>
//             <label htmlFor="password">Software Background</label>
//             <input
//               type="password"
//               id="password"
              
//               required
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="password">Hardware Background</label>
//             <input
//               type="password"
//               id="password"
              
//               required
//             />
//           </div>
//           <button type="submit" className={styles.submitButton}>Sign Up</button>
//         </form>
//       </div>
//     </Layout>
//   );
// }

// export default Signup;



import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './signup.module.css';
import { useHistory } from '@docusaurus/router';
import apiClient from '../services/apiClient';
import { useAuth } from '../contexts/AuthContext';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [softwareBg, setSoftwareBg] = useState('');
  const [hardwareBg, setHardwareBg] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const softwareOptions = ['None', 'Python', 'AI/ML', 'Robotics', 'Web Development', 'Other'];
  const hardwareOptions = ['None', 'Arduino', 'Raspberry Pi', 'Microcontrollers', 'Electronics', 'Other'];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      // MOCK API - replace with real API call
      console.log({ fullName, email, password, softwareBg, hardwareBg });
      
      // Redirect to signin page after signup
      history.push('/signin');
    } catch (err: any) {
      setError(err.message || 'Signup failed. Please try again.');
    }
    
  };
  

  
  return (
    <Layout title="Sign Up">
      <div className={styles.signupContainer}>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Sign Up</h2>
          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a strong password"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="softwareBg">Software Background</label>
            <select
              id="softwareBg"
              value={softwareBg}
              onChange={(e) => setSoftwareBg(e.target.value)}
              required
            >
              {softwareOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="hardwareBg">Hardware Background</label>
            <select
              id="hardwareBg"
              value={hardwareBg}
              onChange={(e) => setHardwareBg(e.target.value)}
              required
            >
              {hardwareOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <button type="submit" className={styles.submitButton}>
            Sign Up
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Signup;
