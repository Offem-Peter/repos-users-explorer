import { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import ResultGrid from "./components/Result/ResultGrid";
import GridLoader from "react-spinners/GridLoader";
import WebFont from "webfontloader";

const GITHUB_API = "https://api.github.com/search";

const App = () => {
  const [data, setData] = useState<object[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log("USE-EFFECT-1");
    WebFont.load({
      google: {
        families: ["Inter"],
      },
    });
  }, []);


  const searchClicked = async (query: string) => {
    setLoading(true);
    setError(false);
    setData([]);

    fetch(`${GITHUB_API}/repositories?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items);
        setData(data.items);
        setError(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
    
  }

  return (
    <>
      <Search searchClicked={searchClicked} loading={loading}/>
      { error && 
        <div style={{textAlign: "center" ,marginTop: "3rem"}}>
          <p style={{color: "grey"}}>Something went wrong, Please try again 🤕...</p>
        </div> 
      }
      {loading ? ( 
        <div style={{textAlign: "center" ,marginTop: "3rem"}}>
          <GridLoader size={8} color="#ec6661" />
          <p style={{color: "grey"}}>Please wait 🙂...</p>
        </div>
        ) : (
       <ResultGrid data={data}/>
        )}
    </>
  );
}

export default App;
