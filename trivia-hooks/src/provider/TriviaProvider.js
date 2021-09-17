import GlobalContext from '../context/GlobalContext';

const TriviaProvider = ({ children }) => {
  return <GlobalContext value={{}}>{children}</GlobalContext>;
};

export default TriviaProvider;
