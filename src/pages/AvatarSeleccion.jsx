import React, { useEffect, useState } from "react";
import { ProfileIcon } from "../components/ProfileIcon";
import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";
import "../styles/AvatarSeleccion.css";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";
import { Toaster,toast} from "react-hot-toast";
import {AiOutlineReload} from 'react-icons/ai'
const AvatarSeleccion = () => {
  const navigate=useNavigate();
  const auth=useAuth();
  const api = "https://api.multiavatar.com/45678945";
  const [avatars, setAvatars] = useState([]);
  const [selected, setSelected] = useState(undefined);
  const data = [];
  useEffect(() => {
    (async () => {
      for (let i = 0; i < 6; i++) {
        const image = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}`
        );
        const buffer = Buffer.from(image.data);
        data.push(buffer.toString("base64"));
      }
      setAvatars(data);
    })();
  }, []);

  const handleSelectAvatar=async ()=>{
      if(selected==undefined){
         toast.error("Selecciona un avatar");
         return;
      }
      toast.promise(auth.handleSetAvatar(avatars[selected]),{
        loading:"Cargando Avatar...",
        success:"Avatar Seleccionado",
        error:"Error al Seleccionar Avatar"
      })
      .then((status)=>{
        if(status===200){
          navigate("/home");
        }
      })
      .catch(err=>{
        toast.error(err);
      })
  }
  return (
    <section className="avatar-selection--container">
      <h3>We Say</h3>
      <article className="avatar-selection--body">
        <h5>Ingresa una foto de perfil</h5>
        <div className="avatar-selection--choose">
          {avatars.map((avatar, index) => (
            <div key={index+1} onClick={()=>setSelected(index)}  className={`${selected===index ? "avatar-selected":""}`}>
              <ProfileIcon
              image={`data:image/svg+xml;base64,${avatar}`}
              size="small"
              status="offline"
            />
            </div>
          ))}
        </div>
      </article>
      <a 
        className="avatar-selection--finalize" 
        href="#"
        onClick={()=>handleSelectAvatar()}
        >
        Finalizar
      </a>
      <Toaster
        position="top-center"
        reverseOrder={false}
        autoClose={3000}
        hideProgressBar={false}
      />
    </section>
  );
};

export default AvatarSeleccion;
