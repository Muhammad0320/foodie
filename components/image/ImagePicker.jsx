"use client";

import { useRef } from "react";
import classes from "./imagePicker.module.css";

function ImagePicker({ name, label }) {
  const inputRef = useRef();

  const handlePickImage = () => {
    inputRef.current.click();
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}> {label} </label>

      <div className={classes.controls}>
        <input
          type="file"
          name={name}
          id={name}
          className={classes.input}
          ref={inputRef}
        />

        <button className={classes.button} onClick={handlePickImage}>
          Pick an image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
