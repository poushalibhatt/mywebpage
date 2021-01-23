import React from 'react';

let FileUpload=({file, error, handleFile})=>{
    
    return(
            
            <form >
                <input type="file" onChange={handleFile}/>
                <div>
                    {error ? <div className='error'>Select image type(png/jpeg)</div>: null}
                    {file ? <div>{file.name}</div> :null}
                </div>
            </form>
        
    )
}

export default FileUpload;