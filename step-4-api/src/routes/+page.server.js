export const load = async (serverLoadEvent) => {
  try {
    const { fetch } = serverLoadEvent;
    const res = await fetch(`http://localhost:3010/appointments/2023/10/13`);
    const items = await res.json();
    return { items };
  } catch (error) {
    return {
      error,
    };
  }
};
