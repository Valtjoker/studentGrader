import { useState } from "react";
import Penilaian from "../components/Penilaian";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="my-2 mb-10">
        <p className="font-semibold text-center text-4xl">
          Aplikasi Penilaian Mahasiswa
        </p>
      </div>
      <div className=" self-center">
        <Penilaian />
      </div>
    </div>
  );
}
