<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h2 class="text-primary">{{movie.Title}}</h2>
                <br/>
                <p>Pitch Text: <br/> <strong>{{movie.PitchText}}</strong></p>
                <p>Summary: <br/> <strong>{{movie.Summary}}</strong></p>
                <p>Budget: <br/> <strong>{{formattedBudget}}</strong></p>
                <p>Genre: <br/> <strong>{{movie.GenreName}}</strong></p>
            </div>
        </div>

        <br/>

        <router-link v-if="auth" :to="`/movies/${this.$route.params.pk}/review`"><button type="button" class="btn btn-success">Add Review</button></router-link>

        <router-link v-else :to="`/signin`"><button type="button" class="btn btn-outline-success">Sign in to Add Review</button></router-link>

        <br/>
        <br/>
        <router-view></router-view>

    </div>
</template>

<script>
export default {
    computed:{
        movie(){
            var movies = this.$store.state.movies;
            var thisMovie = movies.find((aMovie)=> aMovie.MoviePK == this.$route.params.pk)

            return thisMovie
        },
        formattedBudget(){
            return new Intl.NumberFormat("en-US",{
                style: 'currency',
                currency: 'USD'
            }).format(this.movie.Budget)
        },
        auth(){
            return this.$store.state.token
        }
    }
}
</script>

<style scoped>

</style>