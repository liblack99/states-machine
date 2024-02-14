import { createMachine, assign } from "xstate";

// const fillCountries = {
//   initial: "loading",
//   states: {
//     loading: {
//       invoke: {
//         id: "getCountries",
//         src: () => fetchCountries,
//         onDone: {
//           target: "success",
//           actions: assign({
//             countries: ({ event }) => event.data,
//           }),
//         },
//         onError: {
//           target: "failure",
//           actions: assign({
//             error: "Fallo el request",
//           }),
//         },
//       },
//     },
//     success: {},
//     failure: {
//       on: {
//         RETRY: { target: "loading" },
//       },
//     },
//   },
// };

const bookingMachine = createMachine(
  {
    id: "buy plane tickets",
    initial: "initial",
    context: {
      passengers: [],
      selectedCountry: "",
      countries: [],
      error: "",
    },
    states: {
      initial: {
        on: {
          START: {
            target: "search",
          },
        },
      },
      search: {
        on: {
          CONTINUE: {
            target: "passengers",
            actions: assign({
              selectedCountry: ({ event }) => event.selectedCountry,
            }),
          },
          CANCEL: "initial",
        },
      },
      tickets: {
        after: {
          5000: {
            target: "initial",
            actions: "cleanContext",
          },
        },
        on: {
          FINISH: {
            target: "initial",
            actions: "cleanContext",
          },
        },
      },
      passengers: {
        on: {
          DONE: {
            target: "tickets",
          },
          CANCEL: {
            target: "initial",
            actions: "cleanContext",
          },
          ADD: {
            target: "passengers",
            actions: assign({
              passengers: ({ context, event }) => [
                ...context.passengers,
                event.newPassenger,
              ],
            }),
          },
        },
      },
    },
  },
  {
    actions: {
      cleanContext: assign({
        selectedCountry: "",
        passengers: [],
      }),
    },
    guards: {
      moreThanOnePassenger: ({ context }) => {
        return context.passengers.length > 0;
      },
    },
  }
);

export default bookingMachine;
