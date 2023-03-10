import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api"

export const GetChat = createAsyncThunk(
    "messages/chat",
    async (username) => {
        try {
            const { data } = await api.APIgetChat(username)
            return data
        } catch (error) {
            throw error.response.data || "Something went wrong"
        }
    }
)

export const SendMessage = createAsyncThunk(
    "messages/sendMessage",
    async (info) => {
        try {
            const { username, message } = info
            const { data } = await api.APIsendMessage(username, message)
            
            return data
        } catch (error) {
            throw error.response.data || "Something went wrong"
        }
    }
)

export const SearchUser = createAsyncThunk(
    "messages/searchUser",
    async (username) => {
        try {
            const { data } = await api.APIsearchUser(username)
            return username
        } catch (error) {
            throw error.response.data || "Something went wrong"
        }
    }
)

export const ReactToMessage = createAsyncThunk(
    "messages/react",
    async (info) => {
        try {
            const { reaction, msgDate, username } = info
            const { data } = await api.APIreact(reaction, msgDate, username)
            return data
        } catch (error) {
            throw error.response.data || "Something went wrong"
        }
    }
)

export const GetUser = createAsyncThunk(
    'auth/getUser',
    async (username) => {
        try {
            const { data } = await api.APIgetUser(username)
            return data
        } catch (error) {
            throw error.response.data || "Something went wrong"
        }
    }
)

export const GetMessages = createAsyncThunk(
    "messages/getMessages",
    async () => {
        try {
           const { data } = await api.APIgetMessages()
           return data
        } catch (error) {
            throw error.response.data || "Something went wrong"
        }
    }
)