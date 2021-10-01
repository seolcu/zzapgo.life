import { writable } from "svelte/store";

const storedTheme = localStorage.theme;
export const selectedThemeName = writable(storedTheme || "클래식");
selectedThemeName.subscribe((value) => (localStorage.theme = value));
