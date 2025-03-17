// Marcar si la página se está recargando
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("is_reloading", "true");
});

// Al cargar la página, verificar si fue una recarga
document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("is_reloading")) {
    localStorage.removeItem("REACT_QUERY_OFFLINE_CACHE");
    sessionStorage.removeItem("is_reloading");
  }
});
