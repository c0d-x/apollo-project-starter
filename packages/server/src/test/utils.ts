export const mockSuccessParams = {
  status: 200,
  headers: {
    'Content-Length': '1000',
    'Content-Type': 'application/json',
  },
};

export const startTestServer = async (server) => {
  const httpServer = await server.listen({ port: process.env.PORT || 0 });

  return {
    stop: () => httpServer.server.close(),
  };
};
