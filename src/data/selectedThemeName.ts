import { writable } from "svelte/store";

export const selectedThemeName = writable("");

export const init = () => {
  const storedTheme = localStorage.getItem("theme");
  selectedThemeName.set(storedTheme || "클래식");
  selectedThemeName.subscribe((value) => localStorage.setItem("theme", value));
  console.log("init finished");
};
