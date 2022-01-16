import { Alert, Button, Snackbar } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASEURL, SOURCEURL } from "../utils";
import { Loader } from "./loader";
import { Stories } from "./stories";


const News =(props)=>{
    const [state, setState] = useState([]);
    const [count, setCount] = useState(21);
    const [isLoading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const {type} = useParams();

    const showMoreContent = () => {
        setLoading(true);
        getData(type || 'topstories', count, count + 20).then(arr => {
          getDeatils(arr)?.then(item =>
            formatComponent(item, () => {
              setCount(count + 20);
              setLoading(false);
              window.scrollTo(0, 0);
            })
          );
        });
      };

const formatComponent = (item, callback) => {
    setState(item);
    callback();
};

useEffect(() => {
    // function executes here ,calling two async function
    setLoading(true);
    getData(type || 'topstories', 0, 20).then(arr => {
      getDeatils(arr)?.then(item =>
        formatComponent(item, () => {
         // props?.hideLoader();
          setLoading(false);
        })
      );
    });
  }, [type]);

      //getting all the data
  const getData = async function(category, start, end) {
    const arr = [];
    try {
      const { data } = await axios.get(
        `${BASEURL}/${category}.json?print=pretty`
      );
      data.slice(start, end).map(item => arr.push(item));
    } catch (error) {
        setOpen(true);
        setLoading(false);
      return error;
    }
    return arr;
  };

  //fetching data from those ids and storing data in array
  const getDeatils = async function(arr) {
    const promises = arr?.map(async item => {
      const { data } = await axios.get(
        `${BASEURL}/item/${item}.json?print=pretty`
      );
      return {
        item,
        text: data?.text,
        author: data?.by,
        title: data?.title,
        score: data?.score,
        comments_count: data?.descendants,
        time: data?.time,
        url: data?.url ? data?.url : `${SOURCEURL}/item?id=${item}`
      };
    });
    const results = await Promise.all(promises);
    return results;
  };

return (
        <>
          {(props?.isLoading || isLoading) ? (
            <Loader />
          ) : (
            <div>
           <Stories state={state} />
            <span className="btn-more">
                <Button onClick={()=>showMoreContent()} variant="outlined">More</Button>
            </span>  
            </div>
          )}

          
           <Snackbar open={open} autoHideDuration={3000} onClose={()=> setOpen(false)}>
            <Alert severity="error" onClose={()=> setOpen(false)}>This is an error message!</Alert>
         </Snackbar>
        
        </>
      );
}

export default News;