export abstract class Utils {

	/**
	 * Transforma uma imagem em formato de url para base64
	 * @param imgUrl
	 * @returns base64
	 */
	public static async imageFromUrlToBase64(imgUrl): Promise<string> {
    const data = await fetch(imgUrl);
    const blob = await data?.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result as string;
        resolve(base64data);
      }
    });
  }

	public static isNullOrUndefined(value: any): boolean {
    return value === undefined || value === null;
  }

}