import { useLocalObservable } from "mobx-react-lite"

const useDataStore = () => {
    const store = useLocalObservable(() => ({
        data: [],
        setData(newData) {
            store.data = newData
        },
        getData() {
            return store.data;
        }
    }))
    return store
}

export default useDataStore;