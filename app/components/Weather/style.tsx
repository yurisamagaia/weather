// import styled from 'styled-components/native';
// import { colors } from '../../theme';

// export const Container = styled.View`
//   flex: 1;
// `;

// export const Content = styled.View`
//   flex: 1;
//   align-items: center;
// `;

// export const IconContainer = styled.View`
//   align-self: center;
// `;

// export const TextCity = styled.Text`
//   font-size: 22px;
//   color: ${colors.white};
// `;

// export const TextTemp = styled.Text`
//   font-size: 50px;
//   color: ${colors.white};
// `;

// export const TextDescription = styled.Text`
//   font-size: 20px;
//   text-align: center;
//   color: ${colors.white};
//   font-style: italic;
//   margin-top: 10px;
// `;

// export const Title = styled.Text`
//   font-size: 22px;
//   color: ${colors.white};
//   padding-bottom: 10px;
// `;

import styled from 'styled-components/native';
import { colors } from '../../theme';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  
`;

export const ContentFlex = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  
`;

export const IconContainer = styled.View`
  align-self: center;
`;

export const TextCity = styled.Text`
  font-size: 22px;
  color: ${colors.white};
`;

export const Temperature = styled.Text`
  font-size: 60px;
  font-weight: 200;
  color: ${colors.white};
`;

export const TextTemp = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.white};
  margin-right: 6px;
`;

export const ContainerTextCondition = styled.View`
  align-items: flex-start;
`;
  
export const TextCondition = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${colors.white};
  margin-top: 5px;
`;

export const TextDescription = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${colors.white};
  font-style: italic;
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: ${colors.white};
  padding-bottom: 10px;
`;