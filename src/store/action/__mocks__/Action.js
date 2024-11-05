const AddResourseItems =jest.fn().mockReturnValue({type: "mock" })
module.exports = {
    ...jest.requireActual("../Action.js"),
    __esModule: true,
    AddResourseItems
  };

  
  