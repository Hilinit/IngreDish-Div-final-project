import axios from "axios";

const CLOUDINARY_CLOUD_NAME = "atxbjlpo"; 
const CLOUDINARY_UPLOAD_PRESET = "my_default";
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

const api = axios.create({
  baseURL: "https://69c53df08a5b6e2dec2c09e9.mockapi.io",
  headers: { "Content-Type": "application/json" }
});

export const uploadImageToCloudinary = async (base64String) => {
  if (!base64String || typeof base64String !== "string" || !base64String.startsWith("data:image")) { return base64String }

  try {
    const formData = new FormData();
    formData.append("file", base64String);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await axios.post(CLOUDINARY_URL, formData);
    return response.data.secure_url;
  } catch (error) {
    console.log("Cloudinary yükləmə xətası:", error);
    return base64String; 
  }
};

export const fetchUsers = () => api.get("/users");
export const updateUserApi = (id, data) => api.put(`/users/${id}`, data);
export const createUserApi = (payload) => api.post("/users", payload);