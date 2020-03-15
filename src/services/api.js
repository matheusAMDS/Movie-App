import axios from "axios"
import { images } from "../config/apiConfig"

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
})

export const imageData = {
  poster(path) {
    return `${images.base_url}${images.poster_sizes[3]}/${path}`
  },
  backdrop(path) {
    return `${images.base_url}${images.backdrop_sizes[2]}/${path}`
  },
  profile(path) {
    return `${images.base_url}${images.profile_sizes[1]}/${path}`
  }
}