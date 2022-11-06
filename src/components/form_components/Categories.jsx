import React, { useState, useEffect } from "react";

const Categories = () => {
  const [values, setValues] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    fetch("https://run.mocky.io/v3/0b8fbded-6ce4-4cb2-bf2f-d2c39207506b")
      .then((res) => res.json())
      .then((data) => {
        setValues(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(values, "values");

  const handleCategory = (e) => {
    const categoryId = e.target.value;
    setCategoryId(categoryId);
  };

  useEffect;

  return (
    <div className="w-full mb-[36px]">
      <select className="w-full pl-[28px] py-[12px] rounded-[28px] border-[1px] ">
        {values.map((opts, categoryId) => {
          return <option key={categoryId}>{opts.name}</option>;
        })}
      </select>
      <select className="w-full pl-[28px] mt-[36px] py-[12px] rounded-[28px] border-[1px] ">
        {values.map((subs, index) => {
          return (
            <option key={index}>
              {subs.subCategories &&
                subs.subCategories.map((data) => <li>{data.name}</li>)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Categories;
