import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    paddingTop: 30,
    backgroundColor: 'coral',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginHorizontal: 20,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
