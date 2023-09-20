export const load = async (serverLoadEvent) => {
  try {
    const { fetch } = serverLoadEvent;
    const res = await fetch(`http://localhost:3011/api`);
    const items = await res.json();
    return { items };
  } catch (error) {
    return {
      error,
    };
  }
};
