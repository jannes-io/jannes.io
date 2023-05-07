import React, { createContext, useContext } from 'react';

export interface IWrapperContext {
  hideWrapper: () => void;
}

export const WrapperContext = createContext<IWrapperContext>({
  hideWrapper: () => {
  },
});

export const HideWrapper: React.FC = () => {
  useContext(WrapperContext).hideWrapper();
  return null;
};

export default HideWrapper;
