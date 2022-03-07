<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Test</div>

                    <div class="card-body">
                        <h2>Je suis un composant vue</h2>

                      <div class="form-group">
                        <input type="hidden"
                               id="user_id"
                               value="La valeur de l'input hidden"
                               class="form-control">
                        <label for="email">Titre</label>
                        <input type="text"
                               id="email"
                               class="form-control"
                                v-model="email">
                        <br>
                        <br>
                        <label for="created_at">Date</label>
                        <input type="date" id="created_at" name="created_at"
                               value="2018-07-22" v-model="created_at">
                        <br>
                        <br>
                          <label for="history">Histoire</label>
                          <textarea id="history"
                                 class="form-control"
                                 v-model="history">
                          </textarea>
                          <br>
                          <br>
                        <label for="priority">Priorité</label>
                        <select id="priority"
                                class="form-control"
                                v-model="selectedPriority">
                          <option v-for="priority in priorities">{{ priority }}</option>
                        </select>
                        <br>
                        <br>
                        <label for="satisfaction">Satisfaction (1 à 10)</label>
                        <input min="1"
                               max="10"
                               type="number"
                               id="satisfaction"
                               class="form-control"
                               v-model.number="satisfaction">
                      <br>
                      <br>
                      <label for="interest">Intérêt</label>
                        <input id="interest" value="0" type="range" min="0" max="100" step="1" v-model="interest">

                      </div>

                      <button class="mt-3 btn btn-primary" @click="resetInput">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      priorities: ['Urgente', 'Normale', 'Basse'],
      selectedPriority: 'Normale',
      satisfaction: 10,
      email: '',
      user_id: 5,
      history: '',
      interest: 0,
      created_at: '2018-07-22'
    }
  },
  methods: {
    resetInput() {
      this.email = "";
      this.selectedPriority = "Normale";
      this.satisfaction = 0;
      this.history = "";
      this.interest = 0;
      this.created_at = "2018-07-22"
    },
  },
}

</script>


