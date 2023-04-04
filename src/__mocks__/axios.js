const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Saurabh",
          last: "K..",
        },
        picture: {
          large:
            "https://images.unsplash.com/photo-1679629595664-87d8ab6f56cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        login:{
            username:"thephoneyGoat"
        }
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
