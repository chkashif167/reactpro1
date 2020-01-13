import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "./managment.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Item 1", price: 100 },
  { id: 2, name: "Item 2", price: 102 }
];
const Managment = props => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
      filter: textFilter()
    },
    {
      dataField: "title",
      text: "Post Title",
      filter: textFilter()
    },
    {
      dataField: "body",
      text: "Post Body"
    }
  ];

  return (
    <div className="col-lg-7 col-md-7 col-sm-7 Management_table">
      <div className="row ">
        <h6> Managment Table</h6>
        <BootstrapTable
          keyField="id"
          data={posts}
          columns={columns}
          filter={filterFactory()}
        />
      </div>
    </div>
  );
};
export default Managment;
