import {AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-router-dom'



const Close = () => {
  return <Link to="/"><AiOutlineClose style={{color: 'white',fontSize:'20px'}}/></Link>;
};

export default Close;
