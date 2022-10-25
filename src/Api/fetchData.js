export const fetchData = async url => {

  try {

    const response = await fetch(url);

    if(!response.ok) {
      throw new Error("Can't fetch data");
    }

    const fetchedData = await response.json();

    return fetchedData;

  } catch (err) {
    console.error(err.message);
  }
}
