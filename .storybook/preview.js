import GlobalStyle from "../src/components/GlobalStyle";

export const decorators = [
  (Story) => {
    return (
      <>
     <GlobalStyle />
        <Story />
      </>
    );
  },
];