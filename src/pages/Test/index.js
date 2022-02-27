import React, { useState } from "react";
import style from "./Test.module.scss";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import axios from "axios";
import { Link } from "react-router-dom";

function Entry({ name, type, data, setData, kind }) {
  return (
    <div className={style.entry}>
      <div className={style.name}>{name}</div>
      <input
        type={type}
        defaultValue={type == "Number" ? "0" : "India"}
        onChange={(e) => {
          let obj = { ...data };
          obj[kind] = e.target.value;
          setData(obj);
        }}
      />
    </div>
  );
}

function Test() {
  const [data, setData] = useState({
    clump_thickness: 0,
    uniform_cell_size: 0,
    uniform_cell_shape: 0,
    marginal_adhesion: 0,
    single_epithelial_size: 0,
    bare_nuclei: 0,
    bland_chromatin: 0,
    normal_nucleoli: 0,
    mitoses: 0,
  });

  const onSubmitHandler = async () => {
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }

    let result = await axios.post(
      "https://cancerrrr.herokuapp.com/predict",
      formData
    );
    console.log(result);
  };

  return (
    <div className={style.wrapper}>
      <img src={img1} className={style.img1} />
      <div className={style.heading}>Prognosis Possibility Test</div>
      <div className={style.subHeading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien,
        et dolor consectetur sit vitae facilisi.
      </div>
      <div className={style.subHead}>Biographical data</div>

      <div className={style.bio}>
        <Entry name="Age" type="Number" />
        <div className={"entry"}>
          <div className={"name"}>Sex</div>
          <select>
            <option>Male</option>
            <option>Female</option>
            <option>Non-Binary</option>
          </select>
        </div>
        <Entry name="Height" type="Number" />
        <Entry name="Weight" type="Number" />
        <div className={"entry"}>
          <div className={"name"}>Blood Group</div>
          <select>
            <option>A+</option>
            <option>B+</option>
            <option>AB+</option>
            <option>O+</option>
          </select>
        </div>
        <Entry name="Country" type="text" />
      </div>

      <div className={style.subHead}>Medical data</div>
      <div className={style.medical}>
        <Entry
          name="Clump Thickness"
          type="Number"
          setData={setData}
          data={data}
          kind="clump_thickness"
        />
        <Entry
          name="Bare Nuclei"
          type="Number"
          setData={setData}
          data={data}
          kind="bare_nuclei"
        />
        <Entry
          name="Uniform Cell Size"
          type="Number"
          setData={setData}
          data={data}
          kind="uniform_cell_size"
        />
        <Entry
          name="Bland Chromatin"
          type="Number"
          setData={setData}
          data={data}
          kind="bland_chromatin"
        />
        <Entry
          name="Uniform Cell Shape"
          type="Number"
          setData={setData}
          data={data}
          kind="uniform_cell_shape"
        />
        <Entry
          name="Normal Nucleoli"
          type="Number"
          setData={setData}
          data={data}
          kind="normal_nucleoli"
        />
        <Entry
          name="Marginal Adhesion"
          type="Number"
          setData={setData}
          data={data}
          kind="marginal_adhesion"
        />
        <Entry
          name="Mitoses"
          type="Number"
          setData={setData}
          data={data}
          kind="mitoses"
        />
        <Entry
          name="Single Epithelial Cell Size"
          type="Number"
          setData={setData}
          data={data}
          kind="single_epithelial_size"
        />
      </div>

      <div className={style.consent}>
        <input type="checkbox" />I would like to share this information
        anonymously with Cancer Care for research purposes
      </div>

      <Link to="/result">
        <div className={style.btn} onClick={onSubmitHandler}>
          Submit
        </div>{" "}
      </Link>

      <img src={img2} className={style.img2} />
      <div>
        <img src={img3} className={style.img3} />
      </div>
      <img src={img4} className={style.img4} />
    </div>
  );
}

export default Test;
