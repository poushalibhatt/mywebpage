import React from 'react';

let Painting=({file, error, handleFile})=>{
    
    return(
            
            <form >
                <input type="file" onChange={handleFile}/>
                <div>
                    {error ? <div className='error'>Select image type(png/jpeg)</div>: null}
                    {file ? <div>{file.name}</div> :null}
                </div>
                <h1>Painting Page</h1>
            </form>
        
    )
}

export default Painting;