import axios from "axios";

const API_URL = "http://localhost:8080/api";

export async function getAllCars() {
    return await axios.get(`${API_URL}/cars/all`).then((response) => {
        return response.data;
    });
}

export function getCar(id: number) {
    return fetch(`${API_URL}/cars/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.error(`Error fetching car ${id}:`, error);
            return null;
        });
}
