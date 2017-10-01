<template>
  <v-toolbar dark class="primary white--text" fixed>
    <router-link to="/" class="btn primary" flat dark>
      <v-toolbar-title class="mr-4">
       Vue js Application Example     
      </v-toolbar-title>
    </router-link>

<!--TODO: Implement team browser in certain league?! -->
<!--
    <v-toolbar-items>
      <v-btn flat dark>
        Browse Teams
      </v-btn>
    </v-toolbar-items>
    -->

    <v-spacer></v-spacer>
     <v-toolbar-items>
      <router-link to="login" class="btn primary" flat dark>
        LOGIN
      </router-link>
    </v-toolbar-items>

    <v-toolbar-items>
      <router-link to="register" class="btn primary" flat dark>
        SIGN UP
        <!--<v-btn to="register" flat dark>
          SIGN UP
        </v-btn> -->
      </router-link>
    </v-toolbar-items>  
  </v-toolbar>
</template>

<script>
export default {
}

</script>

<style scoped>

</style>