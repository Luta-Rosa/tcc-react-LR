import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
container: {
    backgroundColor: "E86687",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
},
left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
},
right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginEnd: 20,
},
})

export default Styles;