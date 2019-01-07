import Vue from 'vue'

export default {
  'SET_IMAGES': (state, payload) => {
    Vue.set(state, 'images', payload)
  },
  'SET_VIDEOS': (state, payload) => {
    Vue.set(state, 'videos', payload)
  },
  'SET_VALUE_OF_IMAGE': (state, payload) => {
    Vue.set(state, 'valueOfImage', payload)
  },
  'SET_VALUE_OF_VIDEO': (state, payload) => {
    Vue.set(state, 'valueOfVideo', payload)
  }
}