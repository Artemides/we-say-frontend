import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { BsCardImage } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { ProfileIcon } from "../components/ProfileIcon";
import { useAuth } from "../hooks/useAuth";
import defaultAvatar from "../assets/images/default.png";
import "../styles/ProfileSelection.css";
export const ProfileSelection = () => {
  const [profile, setProfile] = useState(null);
  const fileRef = useRef(null);
  const navigate = useNavigate();
  const auth = useAuth();
  const handleSelect = async (e) => {
    const image = await toBase64(e.target.files[0]);
    setProfile(image);
  };
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleSelectAvatar = async () => {
    if (!profile) {
      toast.error("Selecciona una foto de perfil");
      return;
    }
    toast
      .promise(auth.handleSetAvatar(profile), {
        loading: "Cargando Perfil...",
        success: "Perfil Seleccionado",
        error: "Error al Seleccionar Perfil",
      })
      .then((status) => {
        if (status === 200) {
          navigate("/home");
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <section className="profile-selection--container">
      <h3>We Say</h3>
      <article className="profile-selection--body">
        <h5>Ingresa una foto de perfil</h5>
        <div className="profile-selection--choose">
          <ProfileIcon
            image={profile ?? defaultAvatar}
            size="large"
            status="offline"
          />
        </div>
      </article>
      <section className="profile-selection--btn">
        <BsCardImage className="profile-selection--icon" />
        <input
          type="file"
          name="file"
          id=""
          accept="image/*"
          ref={fileRef}
          onChange={handleSelect}
        />
      </section>
      <section 
        className="profile-selection--btn profile-selection--next"
        onClick={() => handleSelectAvatar()}
      >
        <GrFormNext className="profile-selection--icon" />
      </section>
      <Toaster
        position="top-center"
        reverseOrder={false}
        autoClose={3000}
        hideProgressBar={false}
      />
    </section>
  );
};
