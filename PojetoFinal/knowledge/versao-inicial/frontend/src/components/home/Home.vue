<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de conhecimento"/>
        <div class="stats">
            <Stat title="Categorias" :value="stat.categories"
                icon="fa fa-folder" color="#d54d50"/>
            <Stat title="Artigos" :value="stat.articles"
                icon="fa fa-file" color="#3bc480"/>
            <Stat title="Usuários" :value="stat.users"
                icon="fa fa-user" color="#3282cd"/>
        </div>
    </div>
</template>

<script>
import PageTitle from '../templete/PageTitle'
import Stat from './Stat'
import axios from 'axios'
import { baseApiUrl } from '../../global'

export default {
    name: 'Home',
    components: { PageTitle, Stat },
    data: function() {
        return {
            stat: {}
        }
    },
    methods: {
        async getStats() {
            
            let users = await axios.get(`${baseApiUrl}/users`)
            let categories = await axios.get(`${baseApiUrl}/categories`)
            let articles = await axios.get(`${baseApiUrl}/articles`)

            this.stat = {
                users: users.data.length,
                categories: categories.data.length,
                articles: articles.data.count
            }

            console.log(this.stat)
        },
    },
    mounted() {
        this.getStats()
    }

}
</script>

<style>
    .stats { 
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>