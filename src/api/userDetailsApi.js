

const getAllUsersApi = async () => {
    const responseData = await fetch(`https://dummyjson.com/users`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }
    )
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
    return responseData;
};

const getPostByUserApi = async (userId) => {
  const responseData = await fetch(
    `https://dummyjson.com/users/${userId}/posts`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  return responseData;
};

export { getAllUsersApi, getPostByUserApi};