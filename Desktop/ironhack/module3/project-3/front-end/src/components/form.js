import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './style.css'
import { post } from '../../../blocktones-backend/routes/post.routes';
const Form = () => {

    const [posts, setPosts] = useState(null);    

    useEffect(() => {
        axios.get("http://localhost:5005/api/post")
        .then((res) => setPosts(res.data.items))
    }, []);
    
    if(posts === null) return <div>loading</div>
    
    return(
        <div>{posts.map((post) => (
            <div>{post.name}</div>))}
      <div className="form">
          <div className="form-body">
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </div>      </div>
    )       
}
export default Form;