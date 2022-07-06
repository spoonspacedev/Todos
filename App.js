import React from 'react';
import DefaultApp from './src/screen';
import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <DefaultApp></DefaultApp>
//     </View>
//   );
// }
const App = () => {
  return(
    <View style = {{
      flex: 1,
    }}>
      <DefaultApp></DefaultApp>
    </View>
  )
}
export default App;
