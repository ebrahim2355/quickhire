"use client";

import { Toaster } from "react-hot-toast";

export default function GlobalToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          border: "1px solid #dbe3f5",
          color: "#1f2a44",
        },
      }}
    />
  );
}
