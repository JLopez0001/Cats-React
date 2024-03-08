import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCat, editCat } from "../services/cats.js";

function CatEdit() {
  let nav = useNavigate();
  let { id } = useParams();

  const [catData, setCatData] = useState({
    name: "",
    aka: "",
    bio: "",
    age: 0,
    gender: "",
    species: "",
    likesCuddles: true,
    image: "",
  });

  async function fetchCat() {
    const oneCat = await getCat(id);
    setCatData(oneCat);
  }

  useEffect(() => {
    fetchCat();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editCat(catData);
    nav("/cats");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCatData((prevCat) => ({
      //change the previous use state that is all empty strings and change them to [name]:value
      ...prevCat,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCatData((prevCat) => ({
      ...prevCat,
      [name]: checked,
    }));
  };

  return (
    <div>
      <h1>Add a Cat</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please add your cat's name"
          name="name"
          value={catData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Nickname"
          name="aka"
          value={catData.aka}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={catData.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Gender"
          name="gender"
          value={catData.gender}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Cat's bio"
          name="bio"
          value={catData.bio}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Cat's species"
          name="species"
          value={catData.species}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Add image url"
          name="image"
          value={catData.image}
          onChange={handleChange}
        />
        <div>
          <label htmlFor="cuddles-box">
            Likes Cuddles:
            <input
              id="cuddles-box"
              type="checkbox"
              name="likesCuddles"
              checked={catData.likesCuddles}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
        <button type="submit">Create your Cat!</button>
      </form>
    </div>
  );
}

export default CatEdit;
