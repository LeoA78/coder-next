
const getToken = async () => {
  const response = await fetch(`${process.env.DIRECTUS_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({
      email: process.env.API_EMAIL,
      password: process.env.API_PASSWORD,
    }),
  });
  const { data } = await response.json();
  console.log("token -> ", data.access_token);
  return data.access_token;
};

export const getOrdenanzas = async () => {
  const token = await getToken();
  const response = await fetch(`${process.env.DIRECTUS_URL}/items/ordenanzas`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
  const { data } = await response.json();
  return data;
};

export const getResoluciones = async () => {
  const token = await getToken();
  const response = await fetch(`${process.env.DIRECTUS_URL}/items/resoluciones`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
  const { data } = await response.json();
  console.log("resoluciones -> ", data)
  return data;
};