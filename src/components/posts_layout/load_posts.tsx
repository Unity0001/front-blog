import api from "@/services/api";

export async function getPosts() {
    const response = await api.get("/api/posts");
    return response.data;
}
