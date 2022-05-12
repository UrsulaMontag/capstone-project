import GlobalStyle from "../src/components/ui/GlobalStyle";

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