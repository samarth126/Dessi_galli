import React, { useState } from "react";
import axios from "axios";

const ReservationForm = () => {
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [img, setImg] = useState(null);

  const addNewPost = async () => {
    let formField = new FormData();
    formField.append("title", title);
    formField.append("desc", desc);
    formField.append("img", img);

    if (img !== null) {
      formField.append("img", img);
    }

    await axios({
      method: "post",
      url: "http://localhost:8000/api/creatBlog/",
      data: formField
    }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <>
      <h3 class="text-center">Create Data </h3>

      <div class="container">
        <div class="row">
          <div class=" col-md-12">
            <h1 class="text-center">Blogs</h1>
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>
              <div class="form-group">
                <label for="exampleFormControlFile1">Blog image</label>
                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </div>
              <button
                type="submit"
                class="btn btn-dark btn-lg"
                onClick={addNewPost}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationForm;
