"use client";

import { useRef, useState } from "react";
import classes from "./imagePicker.module.css";

function ImagePicker({ name, label }) {
  const inputRef = useRef();

  const [pickImage, setPickedImage] = useState();

  const handlePickImage = () => {
    inputRef.current.click();
  };

  const handleOnChangeImage = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setPickedImage(reader.result);
    };

    reader.readAsDataURL(file);
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
          onChange={handleOnChangeImage}
          required
        />

        <button className={classes.button} onClick={handlePickImage}>
          Pick an image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
