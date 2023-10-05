import { useEffect, useState } from "react";
let API = "https://dummyjson.com/products";
const Card = () => {
  const [list, setList] = useState<any[]>([]);
  const FetchMyApi = async (url: any) => {
    try {
      let data = await fetch(url);
      const mydata = await data.json();
      const thisList = mydata.products;

      //   console.log(thisList);

      setList([...thisList]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(list);

  useEffect(() => {
    FetchMyApi(API);
  }, []);

  return (
    <>
      {list.map((product) => {
        //   console.log(product);
        // return list.length < 15 ? (

        return (
          <>
            <div className="card mx-3 my-2" style={{ width: "18rem" }}>
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <p style={{ height: "10px" }}>{product.id}</p>
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </>
        );
        // ) : (
        //   <div></div>
        // );
      })}
    </>
  );
};

export default Card;
