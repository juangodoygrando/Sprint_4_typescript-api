export function getCoordinates(): Promise<{ lat: number; lon: number }> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("La geolocalización no es compatible"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => reject(error)
    );
  });
}


export async function getLocation() {
  try {
    const { lat, lon } = await getCoordinates();

    return `lat=${lat}&lon=${lon}`;
  } catch (error) {
    console.error("No se pudo obtener la ubicación:", error);
  }
}
