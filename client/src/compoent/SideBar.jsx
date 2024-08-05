import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SidBar.css';

function SideBar() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/category/get')
      .then((data) => {
        console.log(data.data);
        setCategory(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div>
        {category.map((e) => (
          <div className="ull" key={e.id}> 
            <Link to={`/categoryproduct/${e.id}`} className="nav-link">
              <h5 className="catg">
                {e.name}
              </h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
