<template>
  <div>
    <vue-good-table
      :columns="fields"
      :rows="users"
      theme="black-rhino"
      :select-options="{ 
        enabled: true ,
        selectionText: 'ligne cochées',
        clearSelectionText: 'decocher',
        }"
      :search-options="{ enabled: true ,placeholder: 'Faire une recherche',}"
      :sort-options="{enabled: true}"
      :pagination-options="{
        enabled: true,
        perPage: 5,
        perPageDropdown: [3, 7],
        rowsPerPageLabel: 'Ligne par page',
        ofLabel: 'sur',
      }"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'my-component',
  data(){
    return {
      fields: [
           {
            label: 'id',
            field: 'id',
          },
          {
            label: 'Name',
            field: 'name',
          },
          {
            label: 'Username',
            field: 'username',
            
          },
           {
            field: 'email',
            label: 'Email',  
                   
            },

          {
            field: 'phone',
            label: 'Téléphone',
          },
           {
            field: 'address.city' ,
            label: 'Adresse',
          },
          {
            field: 'website',
            label: 'Website',
          },
          {
            field: 'company.name',
            label: 'Compagnie',
          },
        ],
      }
    },
    computed: {
      ...mapState([
        'users',
        
      ]),

    },
    mounted(){
      this.$store.dispatch('loadUsers')
    },
};
</script>