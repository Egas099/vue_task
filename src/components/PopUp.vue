<template>
  <div class="popup">
    <div class="mask">
      <div class="wrapper">
        <header>
          <span>{{ this.title }}</span>
          <button @click="canceling()">✖</button>
        </header>
        <div class="p-body">
          <div class="labels">
            <span>Product Name</span>
            <span>Unit Price</span>
            <span>Units In Stock</span>
            <span>Discontinued</span>
          </div>
          <div class="inputs">
            <input autofocus type="text" v-model="editItem.name" />
            <input type="number" v-model="editItem.price" placeholder="$" />
            <input type="number" v-model="editItem.units" />
            <input type="checkbox" v-model="editItem.discontinued" />
          </div>
        </div>
        <footer>
          <div class="tools-btn">
            <button class="btn-success" @click="applying()">Apply</button>
            <button class="btn-cancel" @click="canceling()">Cancel</button>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopUp',
  props: {
    title: String,
    importItem: Object,
  },
  data() {
    return {
      editItem: this.importItem,
    };
  },
  methods: {
    applying() {
      this.$emit('applying');
    },
    canceling() {
      this.$emit('canceling');
    },
  },
};
</script>

<style scoped lang="scss">
.popup {
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 350px;
    width: 30vw;
    height: 30vh;
    margin: 20vh auto;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.493);
  }
  header {
    box-shadow: 0 0.5vh 10px rgba(0, 0, 0, 0.2);
    background-color: rgb(243, 243, 243);
    span {
      display: inline-block;
      margin: 1vh 2vw;
    }
    button {
      font-size: 20px;
      margin: 0.5vh 0.5vw;
      float: right;
      border: none;
      &:hover {
        background-color: rgb(226, 226, 226);
      }
    }
  }
  .p-body {
    display: flex;
    justify-content: center;
    > * {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    > * > * {
      height: 2vh;
      padding: 0;
      margin: 0.5vh 1vw;
    }
    .labels {
      align-items: flex-end;
      span {
        padding: 2px 0;
      }
    }
  }
  footer {
    box-shadow: 0 -0.5vh 10px rgba(0, 0, 0, 0.2);
    background-color: rgb(243, 243, 243);
    .tools-btn {
      height: 5vh;
      display: flex;
      justify-content: flex-end;
    }
    button {
      padding: 0vh 1.5vw;
      margin: 1% 1vw;
    }
  }
}
</style>
