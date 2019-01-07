import Vue from 'vue'
import axios from "axios";
export default {
    async 'GET_IMAGES'({commit}) {
      try {
        const images = []
        let response = await axios.get("/localImages.json")
        let responseData = response.data.data
        for (let i in responseData) {
          images.unshift(responseData[i])
        }
        commit('SET_IMAGES', images)
      } catch (e) {
        commit('ERROR', e)
      }
    },
    async 'GET_VALUE_OF_IMAGE'({commit}, payload) {
      try {
        const images = []
        let response = await axios.get("/localImages.json")
        let responseData = response.data.data
        for (let i in responseData) {
          images.unshift(responseData[i])
        }
        images.find(item => {
          if(item.id == payload) {
            commit('SET_VALUE_OF_IMAGE', item)
          }
        })
      } catch (e) {
        commit('ERROR', e)
      }
    }
  }