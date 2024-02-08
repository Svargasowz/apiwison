import {pool} from '../database/conexion.js'

export const getUsuarios=async(req,res)=>{
    try{
        const[result]=await pool.query('SELECT * FROM usuarios');
        if(result.length > 0){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                "mensaje":"no encontramos a nadie UnU"
            })
        }

    }catch(error){
        res.status(500).json({
            message:"error en el servidor"+error
        })
    }
}
export const postUsuarios=async(req,res)=>{
    try{

    }catch{
        
    }
}