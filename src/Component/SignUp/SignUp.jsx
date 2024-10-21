import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addStudent } from "../../features/student/studentSlice";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [stream, setStream] = useState("");
  const [password, setPassword] = useState(""); // New password state

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = {
      name,
      rollNo: rollNumber, // match the backend schema
      class: className, // match the backend schema
      phone: phoneNumber, // match the backend schema
      email,
      stream,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        studentData
      );
      dispatch(addStudent(studentData));
      setName("");
      setClassName("");
      setRollNumber("");
      setPhoneNumber("");
      setEmail("");
      setStream("");
      setPassword("");

      alert("User registered successfully:", response.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className={styles.signUpContainer}>
      <h2 className={styles.title}>Sign Up</h2>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="class" className={styles.label}>
            Class:
          </label>
          <input
            type="text"
            id="class"
            className={styles.input}
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="rollNumber" className={styles.label}>
            Roll Number:
          </label>
          <input
            type="text"
            id="rollNumber"
            className={styles.input}
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber" className={styles.label}>
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className={styles.input}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="stream" className={styles.label}>
            Stream:
          </label>
          <input
            type="text"
            id="stream"
            className={styles.input}
            value={stream}
            onChange={(e) => setStream(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.signUpButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
