import packageInfo from "../../package.json";

export const environment = {
  production: false,
	ALBUM_API: "https://jsonplaceholder.typicode.com/photos/",
  version: String(packageInfo.version)
};