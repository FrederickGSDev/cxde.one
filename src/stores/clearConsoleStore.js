import { atom } from 'nanostores'
import saveInLocal from '../utils/saveInLocal'
import { setClearConsole } from '../utils/setFromLocal/setClearConsole'

const SAVED_CLEAR_CONSOLE = window.localStorage.getItem('clearConsole') === 'true'

export const clearConsoleStore = atom(SAVED_CLEAR_CONSOLE)

clearConsoleStore.listen((value) => {
  saveInLocal()
})

setClearConsole(SAVED_CLEAR_CONSOLE)
