import axios from "axios";   
const uploadFile = async (profileImage)=>{ 
    const data = new FormData()
    data.append("file", profileImage)
    const cloudName= process.env.REACT_APP_CLOUD_NAME
    const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET
    const apiUpload = process.env.REACT_APP_API_UPLOAD
    data.append("upload_preset",uploadPreset)
    data.append("cloud_name",cloudName)
    return axios.post(`${apiUpload}`,data)
    .then((res)=>{
        return res.data.secure_url
    })
    .catch(err=>{
        console.log(err)
    })
}
export default uploadFile


