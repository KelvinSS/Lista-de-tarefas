import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    fontStyle: 'normal',
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  titulo: {
    flexDirection: 'row',
    paddingTop: 70,
  },
  textTitle1: {
    color: '#4EA8DE',
    fontSize: 70,
  },
  textTitle2: {
    color: '#8284FA',
    fontSize: 70,
  },
  input: {
    backgroundColor: '#262626',
    height: 50,
    borderRadius: 5,
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16,
    marginRight: 4,
    flexGrow: 5,
    maxWidth: 265
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    //marginBottom: 42,
    paddingLeft: 20
    /*   display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      gap: 4,
    
      position: 'absolute',
      height: 54,
      left: 24,
      right: 24,
      top: 142, */
  },
  buttonText: {
    color: '#fff',
  },
  divButton: {
    flexGrow: 1,
    alignContent: 'flex-end'
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    // flex: 1,
    marginTop: 0,
    width: '100%',
    //backgroundColor: '#1A1A1A',
    paddingLeft: 7
  },
  listEmpty: {
    color: '#6b6b6b',
    flexDirection: 'row', 
  },
  menu: {
    flexDirection: 'row',    
  },
  created: {    
    color: '#4EA8DE',
    alignItems: 'flex-start',
    flexGrow: 1,
    padding: 10,
    paddingLeft: 20,
  },
  completed: {
    color: '#8284FA',
    alignItems: 'flex-end',
    padding: 10,
    paddingRight: 20,
  },
  alt:{
    //backgroundColor: 'red',
    width: '100%',
    paddingVertical: 30
  }

})
