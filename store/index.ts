import create from 'zustand'
import { EditiedTask } from '../types'

type State = {
  editedTask: EditiedTask
  updateEditedTask: (payload: EditiedTask) => void
  resetEditedTask: () => void
}

const useStore = create<State>((set) => ({
  editedTask: { id: 0, title: '', description: '' },
  updateEditedTask: (payload) =>
    set({
      editedTask: {
        id: payload.id,
        title: payload.title,
        description: payload.description,
      },
    }),
  resetEditedTask: () =>
    set({ editedTask: { id: 0, title: '', description: '' } }),
}))

export default useStore
