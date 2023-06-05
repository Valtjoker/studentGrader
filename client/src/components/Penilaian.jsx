import { useState } from "react";
import gundam from "../picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg";

export default function Penilaian() {
  const [result, setResult] = useState({});
  const nilaiMahasiswa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const aspek = [
    "aspek_penilaian_1",
    "aspek_penilaian_2",
    "aspek_penilaian_3",
    "aspek_penilaian_4",
  ];
  const [form, setForm] = useState({});
  const onChangeHandler = (e) => {
    const { name, value, id } = e.target;
    setForm({ ...form, [name]: { ...form[name], ["mahasiswa_" + id]: value } });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setResult(form);
    console.log(result);
  };
  return (
    <div className=" max-w-7xl">
      <div className="flex flex-row gap-5 justify-center max-w-xl ml-48">
        {aspek.map((aspek, index) => {
          return (
            <p className="text-lg text-center">Aspek Penilaian {index + 1}</p>
          );
        })}
      </div>
      <form action="post" onSubmit={onSubmitHandler}>
        {nilaiMahasiswa.map((mahasiswa) => {
          return (
            <div className="flex flex-col gap-10" key={mahasiswa}>
              <div className="flex flex-row gap-5 py-5 outline outline-1 outline-black">
                <div className="w-16">
                  <img src={gundam} alt="" className="rounded-full ml-3" />
                </div>
                <p className="self-center">Mahasiswa {mahasiswa}</p>
                {aspek.map((penilaian) => {
                  return (
                    <div className="flex flex-row justify-center text-center ml-12 mx-6">
                      <select
                        id={mahasiswa}
                        name={penilaian}
                        key={penilaian}
                        onChange={onChangeHandler}
                        className=""
                      >
                        <option selected disabled>
                          Nilai
                        </option>
                        {nilaiMahasiswa.map((nilai) => {
                          return (
                            <option key={nilai} value={nilai}>
                              {nilai}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="flex justify-end">
          <button
            type="submit"
            className="outline outline-1 outline-black hover:bg-black my-5"
          >
            <p className="hover:text-white">Simpan</p>
          </button>
        </div>
      </form>
      {Object.keys(result).length ? (
        <div className=" max-w-xl">{JSON.stringify(result)}</div>
      ) : (
        ""
      )}
    </div>
  );
}
