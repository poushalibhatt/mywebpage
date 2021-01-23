import React from 'react';
import Render from './Render';
import FileUpload from './FileUpload';

let Quiling=(props)=>{
    
    return(
        <div>
            <h1>Quiling Page</h1>
            <div>
                <Render render=
                    {
                        (file, error, handleFile)=> <FileUpload {...props} file={file} error={error} handleFile={handleFile}/> 
                    }
                />
            </div>
        </div>
        
    )
}

export default Quiling;