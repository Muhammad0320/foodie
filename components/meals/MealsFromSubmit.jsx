"use client";

import { useFormStatus } from "react-dom";

function MealsFromSubmit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit"> {pending ? "submitting..." : "share meal"} </button>
  );
}

export default MealsFromSubmit;
