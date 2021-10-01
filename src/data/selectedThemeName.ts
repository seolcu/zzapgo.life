import { writable } from "svelte/store";

const storedTheme = localStorage.getItem("theme");
export const selectedThemeName = writable(storedTheme || "클래식");
console.log("asdfasdfasdfs");
selectedThemeName.subscribe((value) => localStorage.setItem("theme", value));
