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
    async 'GET_VIDEOS'({commit}) {
      try {
        const videos = []
        let response = await axios.get("/localVideos.json")
        let responseData = response.data.data
        for (let i in responseData) {
          videos.unshift(responseData[i])
        }
        commit('SET_VIDEOS', videos)
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
        const images = this.getters.images;
        images.find(item => {
          if(item.id == payload) {
            item.url = "atom://" + item.name
            commit('SET_VALUE_OF_IMAGE', item)
          }
        })
        commit('ERROR', e)
      }
    },
    async 'GET_VALUE_OF_VIDEO'({commit}, payload) {
      try {
        const videos = []
        let response = await axios.get("/localVideos.json")
        let responseData = response.data.data
        for (let i in responseData) {
          videos.unshift(responseData[i])
        }
        videos.find(item => {
          if(item.id == payload) {
            commit('SET_VALUE_OF_VIDEO', item)
          }
        })
      } catch (e) {
        const videos = this.getters.videos;
        videos.find(item => {
          if(item.id == payload) {
            item.videourl = "atom://" + item.name
            commit('SET_VALUE_OF_VIDEO', item)
          }
        })
        commit('ERROR', e)
      }
    }
  }