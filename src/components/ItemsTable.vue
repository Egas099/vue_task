<template>
  <div class="main-table">
    <div class="btn-wrapper">
      <button id="addionBtn" class="btn-ctrl" @click="addition()">
        + Add new record
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Units In Stock</th>
          <th>Discontinued</th>
          <th>Control</th>
        </tr>
      </thead>
      <transition-group name="items-list" tag="tbody">
        <tr
          v-for="(item, index) in items"
          :key="index"
          v-bind:class="{ discolor: index % 2 === 0 }"
          class="row"
        >
          <th>{{ item.name }}</th>
          <th>${{ item.price }}</th>
          <th>{{ item.units }}</th>
          <th>{{ item.discontinued }}</th>
          <th>
            <div class="tools-panel">
              <button class="btn-ctrl btn" v-on:click="editing(index)">
                ✎ Edit
              </button>
              <button class="btn-ctrl btn" v-on:click="deletion(index)">
                ✖ Delete
              </button>
            </div>
          </th>
        </tr>
      </transition-group>
    </table>
    <transition name="popur-window">
      <PopUp
        v-if="this.popupShow"
        :title="this.popupType"
        :importItem="this.editItem"
        @applying="applying()"
        @canceling="canceling()"
      />
    </transition>
  </div>
</template>

<script>
import PopUp from '@/components/PopUp.vue';

export default {
  name: 'ItemsTable',
  data() {
    return {
      items: this.$store.state.items,
      popupShow: false,
      popupType: 'Сreate',
      editIndex: 0,
      editItem: {
        name: '',
        price: '',
        units: '',
        discontinued: false,
      },
    };
  },
  mounted() {
    this.$store.dispatch('loadData');
    this.items = this.$store.state.items;
  },
  methods: {
    addition() {
      this.popupType = 'Create';
      this.popupShow = !this.popupShow;
    },
    editing(index) {
      const curItem = this.items[index];
      this.editItem = {
        name: curItem.name,
        price: curItem.price,
        units: curItem.units,
        discontinued: curItem.discontinued,
      };
      this.editIndex = index;
      this.popupType = 'Edit';
      this.popupShow = !this.popupShow;
    },
    deletion(index) {
      if (window.confirm('Are you sure you want to delete the item?')) {
        this.$store.commit('deleteItem', index);
      }
    },
    canceling() {
      this.popupShow = !this.popupShow;
      this.editItem = {
        name: '',
        price: '',
        units: '',
        discontinued: false,
      };
    },
    applying() {
      console.log('aplly2');
      if (this.editItem.name === '' || this.editItem.price === '' || this.editItem.units === '') {
        window.confirm('Please fill in all fields!');
        return;
      }
      if (this.popupType === 'Create') {
        this.$store.commit('addItem', this.editItem);
        this.canceling();
      } else if (this.popupType === 'Edit') {
        this.$store.commit('changeItem', { item: this.editItem, index: this.editIndex });
        this.canceling();
      }
    },
  },
  components: {
    PopUp,
  },
};
</script>

<style scoped lang="scss">
.main-table {
  background-color: rgba(185, 185, 185, 0.103);
  min-width: 500px;
  width: 80%;
  margin: 5vh auto;
  .btn-wrapper {
    border: 1px rgba(141, 141, 141, 0.5) solid;
    border-block-end: none;
  }
  #addionBtn {
    margin: 1vh 2vw;
    padding: 1vh 2vw;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    th {
      padding: 1vh 1vw;
      font-weight: 400;
      border: 1px rgba(141, 141, 141, 0.5) solid;
    }
    .btn {
      width: 100%;
    }
    .discolor {
      background-color: rgb(255, 255, 255);
    }
    .row {
      &:hover {
        background-color: rgba(230, 230, 230, 0.6);
      }
    }
    .tools-panel {
      display: flex;
    }
  }
  .items-list-enter-active {
    transition: 0.8s;
  }
  .items-list-enter,
  .items-list-leave-to {
    opacity: 0;
  }
}
.popur-window-enter-active,
.popur-window-leave-active {
  transition: 0.2s;
}
.popur-window-enter,
.popur-window-leave-to {
  opacity: 0;
}
</style>
