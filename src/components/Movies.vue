<template>
    <div>
        <h1>Movies</h1>
        <hr/>
        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Pitch Text</th>
                    <th>Genre</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisMovie in movies" :key="thisMovie.MoviePK">
                    <th>{{thisMovie.Title}}</th>
                    <td>{{thisMovie.PitchText}}</td>
                    <td>{{thisMovie.GenreName}}</td>
                    <td><router-link :to="`/movies/${thisMovie.MoviePK}`">
                        <button type="button" class="btn btn-primary">Details</button></router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    computed:{
        movies(){
            return this.$store.state.movies
        }
    }
}
</script>

<style scoped>

</style>