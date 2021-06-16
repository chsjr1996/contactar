/**
 * Try get IPv4 from getlocation-db
 */
export default async function GetIP(): Promise<string> {
  try {
    const response = await fetch("https://geolocation-db.com/json/");
    const data = await response.json();
    return data.IPv4 as string;
  } catch (e) {
    return "";
  }
}
