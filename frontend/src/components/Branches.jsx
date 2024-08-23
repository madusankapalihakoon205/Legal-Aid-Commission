import { useEffect } from "react";
import API from './services/ApiServices';

export default function Branches() {
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await API.get('/branches');
            console.log(response.data);
          } catch (err) {
            console.error(err);
          }
        };
    
        fetchData();
      }, []);
  return (
    <div>
      
    </div>
  )
}
