import imageNotAvailable from '@/assets/img/image-not-available.png';
import avatar from '@/assets/img/avatar.jpg';

export const storageEndpoint = `${process.env.REACT_APP_ENDPOINT_STORAGE}`;
export const apiEndpoint = `${process.env.REACT_APP_ENDPOINT}`;

export const imageNotAvailableSrc = imageNotAvailable;
export const defaultAvatar = avatar;

export const googleMapsApiKey: string = `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`;
