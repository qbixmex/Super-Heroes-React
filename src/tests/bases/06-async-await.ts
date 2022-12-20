export const getImage = async (apiKey: string): Promise<string | void> => {
  const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

  if (response.status === 401) {
    throw 'Image not found';
  }

  const { data } = await response.json();
  const { url } = data.images.original;

  return url;
};
