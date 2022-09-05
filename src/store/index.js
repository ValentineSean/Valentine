import { createStore } from 'vuex'

import sample from '../store/modules/sample'

const store = createStore({
    modules: {
        sample,
    },
})

export default store
