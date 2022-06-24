import React from "react";
import { useState, useEffect } from "react";
import Products from "../components/Product";
import "../App.css";

const fetchURL = "https://615c0904c298130017735e88.mockapi.io/souvenir"; //Nhận API - URL
const getItems = () => fetch(fetchURL).then((res) => res.json());
//Khai báo 1 hàm getItems để nhận giá trị đổi từ JSON ra Javascript types

function Souvenir(props) {
  const [items, setItems] = useState([]);
  //dùng useState để nhận giá trị thay đổi
  //items là giá trị hiển trị, setItems là giá trị thay đổi, useState là initState, giá trị mặc định.

  useEffect(() => {
    getItems().then((data) => setItems(data));
  }, []);

  // useEffect(() => {
  //   fetch("https://615c0904c298130017735e88.mockapi.io/souvenir")
  //     .then((res) => res.json())
  //     .then((data) => setItems(data));
  // });

  //useEffect là hàm để thay đổi dữ liệu trong quá trình hoạt động
  //Sử dụng hàm getItems, khai báo biến data để nhận giá trị trả về từ fetch.
  //dùng setItems để nhận các dữ liệu từ biến data, truyền vào cho items để thể hiện trên trình duyệt thông qua HTML

  return (
    <section className="container">
      <div className="products">
        {items.map((item) => (
          <Products
            key={item.id}
            id={item.id}
            name={item.name}
            desc={item.desc}
            pic={item.picture}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Souvenir;
