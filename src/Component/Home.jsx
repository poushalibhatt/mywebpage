import React from 'react';
import sakuraflower from '../sakuraflower.jpg';
import Render from './Render';
import Painting from './Painting';
let Home=(props)=>{
    return(
        <div className="main">
           <h1>Home Page</h1> 
           <Render render=
                {
                  (file, error, handleFile)=> <Painting {...props} file={file} error={error} handleFile={handleFile}/> 
                }
            />
        </div>
    )
}

export default Home