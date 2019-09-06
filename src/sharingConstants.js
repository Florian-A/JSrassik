// Selection du canvas et definition de sa taille.
export const canvas = document.querySelector(".game > div > canvas");
export const context = canvas.getContext("2d");

export const height = 250;
export const width = 600;
export const fps = 58;
export const gravity = 4;