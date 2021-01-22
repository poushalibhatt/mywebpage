import React, {useState} from 'react';

let Render=(props)=>{

    const[file, setFile]= useState(null);
    const[error, setError]=useState(false);

        

        let handleFile=(e)=>{
            let types=["image/png", "image/jpeg"];
            let selected=e.target.files[0];
            if(selected && types.includes(selected.type)){
                setFile(selected);
                setError('');
                console.log(selected);
            }else{
                setFile(null);
                setError(true);
            }
        }
        return(
            <div>
               {props.render(file, error, handleFile)}
            </div>

        )
}

export default Render